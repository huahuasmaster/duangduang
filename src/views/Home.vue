<template>
    <div>
        <v-container grid-list-md text-xs-center style="padding: 0px">
            <v-layout justify-center raw wrap>
                <v-flex xl2 lg2 md2>
                    <SideBar></SideBar>
                </v-flex>
                <v-flex xl9 lg10 md9>
                    <!--<v-layout justify-start raw></v-layout>-->
                    <v-layout justify-start raw wrap>
                        <v-flex lg12 md12 xl12>
                            <Carousels></Carousels>
                        </v-flex>
                        <v-flex @click="check(book)" v-for="book in books" :key="`book${book.id}`" xs6 lg2 md2 xl2>
                            <ProductCard :book="book">
                            </ProductCard>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>

        </v-container>
        <v-dialog v-model="checkDetail" width="660">
            <ProductDetail :book="currentProduct"></ProductDetail>
        </v-dialog>
    </div>
</template>
<script>
    import ProductCard from '../components/ProductCard';
    import Carousels from '../components/Carousels';
    import SideBar from '../components/SideBar';
    import ProductDetail from "./ProductDetail";
    import {Book} from "../url";

    export default {

        components: {ProductDetail, Carousels, ProductCard, SideBar},

        data: () => ({

            drawer: false,
            checkDetail: false,
            currentProduct: {},
            books: [],

        }),
        methods: {
            check(book) {
                // console.log("点击了"+id);
                this.$log("check_book",this,{book});
                this.currentProduct = book;
                this.checkDetail = true;
            },
        },
        mounted() {
            Book.list()
                .then((resp) => {
                    this.books = resp;
                });
            this.$log("at_home", this);
        }

    }
</script>
