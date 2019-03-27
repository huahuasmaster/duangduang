<template>
    <!--<div class="about">-->
        <!--<h1>id={{$route.params.id}}</h1>-->
    <!--</div>-->
    <!--<v-container grid-list-md text-xs-center>-->
        <!--<v-layout justify-start raw wrap>-->
            <!--&lt;!&ndash;侧边的图片&ndash;&gt;-->
            <!--<v-flex xl4 lg4 md4>-->
                <!--<v-img :src="dto.imgSrc"></v-img>-->
            <!--</v-flex>-->
            <!--&lt;!&ndash;右侧边，图书的文字说明&ndash;&gt;-->
            <!--<v-flex xl8 lg8 md8>-->
                <!--&lt;!&ndash;<v-layout justify-start raw></v-layout>&ndash;&gt;-->
                <!--<v-layout justify-center raw wrap>-->
                    <!--<v-flex lg12 md12 xl12>-->
                    <!--</v-flex>-->
                    <!--<v-flex v-for="i in 24" :key="`4${i}`" xs6 lg2 md2 xl2>-->
                    <!--</v-flex>-->
                <!--</v-layout>-->
            <!--</v-flex>-->
        <!--</v-layout>-->

    <!--</v-container>-->
    <v-card>
        <v-img
                :src="dto.imgSrc"
                aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{dto.title}}</h3>
                <div> {{dto.desc}}</div>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-btn flat color="orange">加入购物车</v-btn>
            <v-btn flat color="orange" @click="goBuying">购买</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>

    export default {
        props:['id','V'],

        data: () => ({

            drawer: false,
            dto: {
                imgSrc: 'http://img3m5.ddimg.cn/70/28/26445445-1_u_4.jpg',
                title: '都挺好（套装共两册）',
                desc: '《大江大河》《欢乐颂》作者、高人气畅销书作家阿耐扛鼎力作！同名影视剧由正午阳光打造，姚晨、杨祐宁、彭昱畅领衔主演！',
            },

        }),
        methods: {
            goBuying: function () {
                this.$router.push({path:`/buy/${this.id}`});
            },
        }


    }
</script>
