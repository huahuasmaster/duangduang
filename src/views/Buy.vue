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
                            ></OrderConfirm>

                            <v-btn
                                    color="primary"
                                    @click="placeOrder"
                                    :loading="waitingForOrder"
                            >
                                下单
                            </v-btn>

                            <v-btn flat>取消</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <Pay v-on:platform_change="(id) => {this.chosenPlatformId = id}"></Pay>

                            <v-btn
                                    color="primary"
                                    @click="doPaying"
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

    export default {
        components: {Cart, OrderConfirm, Pay},
        props: ['step'],
        watch: {
            step: () => {
                this.e1 = this.step;
            },
        },
        data: () => ({
            e1: 2,
            paying: false,
            chosenPlatformId: 1, //默认支付宝
            chosenAddressId: -1,
            chosenPayType: 1,
            needInvoice: false,
            waitingForOrder: false
        }),
        methods: {
            doPaying: function () {
                console.log(`选中了${this.chosenPlatformId}`);
            },
            // 下单
            placeOrder() {
                console.log(`address:${this.chosenAddressId} chosenpaytype:${this.chosenPayType} needinvoice:${this.needInvoice}`);
                this.waitingForOrder = true;
                setTimeout(() => {
                    this.e1 = 3;
                    this.waitingForOrder = false;
                }, 3000)
            },
        }
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
        font-size: 18px;width: 100px;display: inline-block;color: #ff2832;
    }
</style>
