<template>
    <div>
        <h1 class="title">收货人信息</h1>
        <!--<v-item-group>-->
        <!--<v-container grid-list-md>-->
            <!--<v-layout wrap>-->
                <!--<v-flex-->
                        <!--v-for="n in 3"-->
                        <!--:key="n"-->
                        <!--xs12-->
                        <!--md2-->
                <!--&gt;-->
                    <!--<v-item>-->
                        <!--<v-card-->
                                <!--slot-scope="{ active, toggle }"-->
                                <!--:color="active ? 'primary' : ''"-->
                                <!--class="d-flex align-center"-->
                                <!--dark-->
                                <!--height="200"-->
                                <!--@click="toggle"-->
                        <!--&gt;-->
                            <!--<v-scroll-y-transition>-->
                                <!--<div-->
                                        <!--v-if="active"-->
                                        <!--class="display-3 text-xs-center"-->
                                <!--&gt;-->
                                    <!--Active-->
                                <!--</div>-->
                            <!--</v-scroll-y-transition>-->
                        <!--</v-card>-->
                        <!--<AddressCard-->

                        <!--&gt;</AddressCard>-->
                    <!--</v-item>-->
                <!--</v-flex>-->
            <!--</v-layout>-->
        <!--</v-container>-->
    <!--</v-item-group>-->

        <v-item-group >
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex
                            v-for="address in adds"
                            :key="address.id"
                            xs12
                            md2
                            style="margin-right: 8px"
                    >
                        <v-item>
                            <v-card
                                    :style="{padding : '8px', color : active ? '#FFF' : '#000'}"
                                    slot-scope="{ active, toggle }"
                                    :color="active ? 'primary' : '#FFFFFF'"
                                    @click="toggle"
                            >
                                <div class="name">{{address.name}} <span>{{address.tel}}</span></div>
                                <p class="address">{{address.address}}</p>
                                <v-scroll-y-transition>
                                    <div
                                            v-if="active"
                                            class="display-3 text-xs-center"
                                    >
                                    </div>
                                </v-scroll-y-transition>
                            </v-card>
                        </v-item>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-item-group>
        <h1 class="title1">支付方式</h1>
        <v-item-group >
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex
                            v-for="method in payMethods"
                            :key="method.id"
                            xs12
                            md1
                            style="margin-right: 8px"


                    >
                        <v-item>
                            <v-btn slot-scope="{ active, toggle }"
                                   @click="toggle"
                                   block
                                   :color="active ? 'primary' : ''">{{method.name}}</v-btn>
                        </v-item>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-item-group>
        <h1 class="title1">发票</h1>
        <v-switch v-model="needInvoice" label="需要开发票" style="margin-left: 24px"></v-switch>
        <v-container grid-list-md>
            <v-layout justify-end wrap style="border-top: 1px solid #e6e6e6;">
                <v-flex md2>
                    <div class="border">
                        <p style="margin: 0px"><span style="width: 125px;display: inline-block;">商品金额:</span><span style="width: 100px;display: inline-block;">66.7</span></p>
                        <p style="margin: 0px;border-bottom: 1px solid #e6e6e6;"><span style="width: 125px;display: inline-block;">运费:</span><span style="width: 100px;display: inline-block;">0</span></p>
                        <p ><span style="font-size: 14px;width: 125px;display: inline-block;">应付金额:</span><span style="font-size: 18px;color: #ff2832;">66.7</span></p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>
<script>
    // import AddressCard from "./AddressCard";
    export default {
        // components: {AddressCard}
        data: () => ({
            adds: [
                {
                    id:1,
                    name: '小明',
                    tel: '15897391872',
                    address: '中国 浙江 杭州市 西湖区 留下街道'
                },
                {
                    id:3,
                    name: '小明',
                    tel: '15897391872',
                    address: '中国 浙江 杭州市 西湖区 留下街道'
                },
                {
                    id:2,
                    name: '小明',
                    tel: '15897391872',
                    address: '中国 浙江 杭州市 西湖区 留下街道'
                },
            ],
            la: [2],
            payMethods: [
                {
                    id: 1,
                    name: '在线支付',
                },
                {
                    id: 2,
                    name: '货到付款',
                },
                {
                    id: 3,
                    name: '他人支付',
                },
                {
                    id: 4,
                    name: '银行转账',
                }
            ],
            needInvoice: false,

        }),
        methods: {
            test: function (id) {
                console.log(id);
            }
        }
    }
</script>
<style type="text/css">
    .name {
        font-weight: bold;
        line-height: 30px;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 8px;
        margin-bottom: 4px;
    }
    .name span {
        float: right;
    }
    .address {
        line-height: 22px;
        height: 22px;

        white-space: normal;
        padding: 0 0 0 8px;
    }

    .border {

        padding: 5px 0;
        width: 228px;
        display: inline-block;
    }

</style>