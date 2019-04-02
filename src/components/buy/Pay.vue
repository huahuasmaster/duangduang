<template>
    <v-container grid-list-md style="padding: 0px">
        <v-layout justify-start raw wrap style="margin-bottom: 16px">
            <v-flex>
                <v-card color="#f5f5f5" style="padding: 24px" elevation="0">
                    <span style="width: 280px;display: inline-block;">
                        支付金额：
                        <span style="font-size: 18px;padding-left: 10px;color: #ff2832;">￥{{book.price}}</span>
                    </span>
                    <span style="display: inline-block;">
                        订单号：
                       <a style="text-decoration: none;color: #1976d2;">{{orderNum}}</a>
                    </span>
                    <div></div>
                </v-card>
            </v-flex>
        </v-layout>
        <h1 class="title1">常用支付方式</h1>
        <v-card elevation="0" style="border: 1px solid #dcdcdc;padding: 16px">
            <v-item-group v-model="chosenPlatformIndex" >
                <v-layout  align-start justify-start row>
                    <v-flex
                            v-for="platform in platforms"
                            :key="platform.id"
                            xs12
                            md1
                            lg2
                            style="margin-right: 8px"
                    >
                        <v-item>
                            <v-card
                                    :style="{padding : '0px', color : active ? '#FFF' : '#000'}"
                                    slot-scope="{ active, toggle }"
                                    @click="toggle"
                                    :elevation="active ? 8 : 1"
                                    max-width="170"
                                    min-width="120px"

                            >
                                <v-img :src="platform.imgSrc" max-width="160px" :aspect-ratio="7/2"></v-img>
                            </v-card>
                        </v-item>
                    </v-flex>
                </v-layout>
            </v-item-group>

        </v-card>
    </v-container>

</template>
<script>
    import zfb from '../../assets/zhifubao.gif';
    import wx from '../../assets/weixin.gif';
    import kq from '../../assets/kuaiqian.gif';
    import hb from '../../assets/mayihb.gif';


    export default {
        props: ['orderNum','book'],
        watch: {
            chosenPlatformIndex: function() {
                this.$emit('platform_change', this.platforms[this.chosenPlatformIndex].id)
            },
        },

        data: () => ({
            platforms: [
                {
                    id: 1,
                    name: '支付宝',
                    imgSrc: zfb,
                },
                {
                    id: 5,
                    name: '微信',
                    imgSrc: wx,
                },
                {
                    id: 2,
                    name: '快钱',
                    imgSrc: kq,
                },
                {
                    id: 7,
                    name: '蚂蚁花呗',
                    imgSrc: hb,
                },
            ],
            chosenPlatformIndex: 0
        }),
        methods: {
            test: function () {
                console.log(this.chosenPlatform);
            }
        }
    }
</script>
<style type="text/css">


</style>