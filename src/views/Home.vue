<template>
    <div>
        <v-container grid-list-md text-xs-center style="padding: 0px">
            <v-layout justify-start raw wrap>
                <v-flex xl2 lg2 md2>
                    <SideBar></SideBar>
                </v-flex>
                <v-flex xl10 lg10 md10>
                    <!--<v-layout justify-start raw></v-layout>-->
                    <v-layout justify-center raw wrap>
                        <v-flex lg12 md12 xl12>
                            <Carousels></Carousels>
                        </v-flex>
                        <v-flex @click="check(i)" v-for="i in 24" :key="`4${i}`" xs6 lg2 md2 xl2>
                            <ProductCard>
                            </ProductCard>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>

        </v-container>
        <v-dialog v-model="checkDetail" width="600">
            <ProductDetail></ProductDetail>
        </v-dialog>
    </div>
</template>
<script>
    import ProductCard from '../components/ProductCard';
    import Carousels from '../components/Carousels';
    import SideBar from '../components/SideBar';
    import ProductDetail from "./ProductDetail";
    import {User} from "../url";

    export default {

        components: {ProductDetail, Carousels, ProductCard, SideBar},

        data: () => ({

            drawer: false,
            checkDetail: false,
            currentProductId: -1,

        }),
        methods: {
            check(id) {
                // console.log("点击了"+id);
                this.currentProductId = id;
                this.checkDetail = true;
            },
        },
        mounted() {
            User.test()
                .then((resp) => {
                    console.log(resp.data);
                })
        }

    }
</script>
