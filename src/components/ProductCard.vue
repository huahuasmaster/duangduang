<template>
    <v-card @click="check">
        <v-img
                :src="dto.img"
                aspect-ratio="1"
        ></v-img>

            <div style="padding-left: 12px">
                <p class="name">{{dto.name}}</p>
                <p class="author">{{authorText}}</p>
                <p class="price">
                    <span class="rob">${{dto.price}}</span>
                    <span class="r">$100</span>
                </p>
                <!--<span class="price" style="color: #aaa; text-decoration: line-through">$100</span>-->
            </div>

        <!--<v-card-actions>-->
            <!--<v-btn flat color="orange">Share</v-btn>-->
            <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
    </v-card>
</template>
<script>
    export default {
        // props: ['dto'],
        computed: {
          authorText() {
              return `${this.dto.authorName}  著`;
          },
        },
        methods: {
            check() {
                this.$router.push({path:`/detail/${this.dto.id}`});
            }
        },
        data: () => ({
            dto: {
                img: 'http://img3m8.ddimg.cn/78/2/26475648-1_l_2.jpg',
                name: '给孩子一个世界',
                authorName: '译名',
                price: 90,
                id: 3,
            }
        })
    }
</script>
<style>
    p.name {
        padding-left: 8px;
        padding-right: 8px;
        margin-bottom: 0;
        overflow: hidden;
        font-size: 18px;
        text-align: left;

    }
    p.author {
        /*padding: 0 20px;*/
        padding-left: 8px;
        padding-right: 16px;
        color: #aaa;
        margin-bottom: 0;

        text-align: left;
    }
    .price {
        margin-top: 2px;
        padding-left: 8px;
        height: 16px;
        line-height: 16px;
        overflow: hidden;
        font-size: 16px;
    }
    .price .rob {
        color: #c30;
        float: left;
        overflow: hidden;
        font-weight: bold;
        margin-right: 12px;
    }
    .price .r {
        color: #aaa;
        text-decoration: line-through;
        float: left;
        overflow: hidden;
    }
    /*.price {*/
        /*display: inline;*/
        /*float: left;*/
        /*color: #c30;*/
        /*margin-top: 0px;*/
        /*margin-left: 0px;*/
        /*padding-left: 0px;*/
        /*font-weight: bold;*/
        /*text-align: left;*/
        /*font-size: 16px;*/
    /*}*/
</style>