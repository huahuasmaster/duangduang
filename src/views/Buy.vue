<template>
    <v-container grid-list-md style="padding: 0px">
        <v-layout justify-center wrap>
            <v-flex>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1" editable="e1 <= 2">购物车</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">确认订单</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">支付</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <Cart></Cart>

                            <v-btn
                                    color="primary"
                                    @click="e1 = 2"
                            >
                                选好了
                            </v-btn>

                            <v-btn flat>取消</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <OrderConfirm
                                    v-on:address_change="(id) => chosenAddressId = id"
                                    v-on:pay_type_change="(id) => chosenPayType = id"
                                    v-on:needInvoice="(need) => needInvoice = need"
                                    :book="book"
                            ></OrderConfirm>

                            <v-btn
                                    color="primary"
                                    @click="placeOrder"
                                    :loading="waitingForOrder"
                            >
                                下单
                            </v-btn>

                            <v-btn flat @click="$router.push('/')">取消</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <Pay
                                    v-on:platform_change="(id) => {this.chosenPlatformId = id}"
                                    :order-num="orderNum"
                                    :book="book"
                            ></Pay>

                            <v-btn
                                    color="primary"
                                    @click="payOrder"
                                    :loading="waitingForPay"
                                    :disabled="alredyPaid"
                            >
                                确认支付
                            </v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import Cart from '../components/buy/Cart'
    import OrderConfirm from '../components/buy/OrderConfirm'
    import Pay from '../components/buy/Pay'
    import {Book, Order} from '../url'

    export default {
        components: {Cart, OrderConfirm, Pay},
        props: ['step'],
        watch: {
            step: () => {
                this.e1 = this.step;
            },
        },
        data() {
            return {
                e1: 2,
                paying: false,
                chosenPlatformId: 1, //默认支付宝
                chosenAddressId: -1,
                chosenPayType: 1,
                needInvoice: false,
                waitingForOrder: false,
                waitingForPay: false,
                book: {},
                orderNum: '',
                alredyPaid: false,
            }
        },
        methods: {
            // 下单
            placeOrder() {
                this.waitingForOrder = true;
                let params = {
                    buyerId: this.$store.state.userId,
                    bookId: this.$route.params.id,
                    addressId: this.chosenAddressId,
                    orderAmount: this.book.price,
                    payId: this.chosenPayType,
                    requireInvoice: this.needInvoice,
                };
                console.log(`即将提交的订单$`);
                console.log(params);
                Order.place(params)
                    .then((resp) => {
                        this.orderNum = resp;
                        console.log(`下单成功，订单号：${this.orderNum}`);
                        this.$store.dispatch('alert', {type: 'info', content: "下单成功，请及时支付"});
                        this.e1 = 3;
                        this.waitingForOrder = false;
                    }).catch(() => {
                    this.waitingForOrder = false;
                })
            },
            payOrder() {
                this.waitingForPay = true;
                let rand = Math.floor(Math.random()*(99999-10000+1)+10000) + '32' +( new Date()).valueOf();

                let params = {
                    payDate:( new Date()).valueOf(),
                    onlinePlatform: this.chosenPlatformId,
                    outerTradeNo: rand,
                    payId: this.chosenPayType,
                };

                Order.pay(this.orderNum, params)
                    .then((resp) => {
                        console.log("下单成功");
                        this.$store.dispatch('alert', {type: 'success', content: "支付成功，稍后返回首页"});
                        this.waitingForPay = false;
                        this.alredyPaid = true;
                        setTimeout(() => {
                            this.$router.push("/");
                        }, 2000)
                    })

            }
        },
        created() {
            let id = this.$route.params.id;
            Book.get(id)
                .then((resp) => {
                    this.book = resp;
                });
        },
    }
</script>
<style type="text/css">
    h1.title1 {
        font-size: 15px;
        color: #000;
        line-height: 22px;
        font-weight: bold;

    }

    span .price1 {
        font-size: 18px;
        width: 100px;
        display: inline-block;
        color: #ff2832;
    }
</style>
