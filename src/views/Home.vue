<template>

  <v-container grid-list-md text-xs-center>
    <v-layout justify-start raw wrap>
      <v-flex xl2 lg2 md2><SideBar></SideBar></v-flex>
      <v-flex xl10 lg10 md10>
        <!--<v-layout justify-start raw></v-layout>-->
        <v-layout justify-center raw wrap>
          <v-flex lg12 md12 xl12>
            <Carousels></Carousels>
          </v-flex>
          <v-flex v-for="i in 24" :key="`4${i}`" xs6 lg2 md2 xl2>
            <ProductCard>
            </ProductCard>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
  import ProductCard from '../components/ProductCard';
  import Carousels from '../components/Carousels';
  import SideBar from '../components/SideBar';

  export default {

    components: {Carousels, ProductCard, SideBar},

    data: () => ({

      drawer: false

    }),


  }
</script>
