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
                :src="book.img"
                aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{book.title}}</h3>
                <div> {{book.desc}}</div>
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
        props:['book'],

        data() {
            return {
                drawer: false,
            }
        },
        methods: {
            goBuying: function () {
                this.$router.push({path:`/buy/${this.book.id}`});
                // this.$router.push({name: 'buy', params: {id: this.book.id, book: this.book}});
            },
        }


    }
</script>
