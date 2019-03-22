<template>
    <v-carousel>
        <v-carousel-item
                v-for="(item,i) in activities"
                :key="item.id"
                :src="item.pic"
        ></v-carousel-item>
    </v-carousel>
</template>
<script>
    export default {
        // props: ['dto'],
        computed: {
            authorText() {
                return `${this.dto.authorName}  著`;
            },
        },
        methods: {},
        data: () => ({

            activities: [
                {
                    id: 1,
                    pic: 'http://img61.ddimg.cn/upload_img/00087/geq/750x315_dl_0318-1552964951.jpg',
                },
                {
                    id: 2,
                    pic: 'http://img55.ddimg.cn/9003330054813025.jpg',
                },{
                    id: 3,
                    pic: 'http://img62.ddimg.cn/upload_img/00762/1/750x315-1552974285.jpg',
                },{
                    id: 4,
                    pic: 'http://img61.ddimg.cn/upload_img/00709/wangsiyu/FHC750x315_dl_0318sh-1553052690.jpg',
                },
            ]
        })
    }
</script>
<style>

</style>