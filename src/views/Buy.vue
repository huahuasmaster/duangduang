<template>
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
                    下单
                </v-btn>

                <v-btn flat>取消</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
                <OrderConfirm></OrderConfirm>

                <v-btn
                        color="primary"
                        @click="e1 = 3"
                >
                    购买
                </v-btn>

                <v-btn flat>取消</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <Pay></Pay>

                <v-btn
                        color="primary"
                        @click="e1 = 1"
                >
                    完成
                </v-btn>

                <v-btn flat>取消</v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
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
        }),
    }
</script>
