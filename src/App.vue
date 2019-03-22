<template>

  <v-app id="inspire">

    <!--侧边栏-->
    <v-navigation-drawer

            v-model="drawer"

            fixed

            app

    >


      <v-list dense>
        <!--侧边栏子项列表-->

        <v-list-tile :to="'/'">

          <v-list-tile-action>

            <v-icon>home</v-icon>

          </v-list-tile-action>

          <v-list-tile-content>

            <v-list-tile-title>首页</v-list-tile-title>

          </v-list-tile-content>

        </v-list-tile>

        <v-list-tile :to="'orders'">

          <v-list-tile-action>

            <v-icon>assignment</v-icon>

          </v-list-tile-action>

          <v-list-tile-content>

            <v-list-tile-title>我的订单</v-list-tile-title>

          </v-list-tile-content>

        </v-list-tile>

        <v-list-tile :to="'comments'">

          <v-list-tile-action>

            <v-icon>chat</v-icon>

          </v-list-tile-action>
          <v-list-tile-content>

            <v-list-tile-title>我的评论</v-list-tile-title>

          </v-list-tile-content>

        </v-list-tile>

        <v-list-tile :to="'account'">

          <v-list-tile-action>

            <v-icon>account_circle</v-icon>

          </v-list-tile-action>

          <v-list-tile-content>

            <v-list-tile-title>个人信息</v-list-tile-title>

          </v-list-tile-content>

        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <!--顶部-->
    <v-toolbar color="indigo" dark fixed app>

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>DuangDuang.com</v-toolbar-title>

    </v-toolbar>

    <!--内容-->
    <v-content>

      <v-container fluid fill-height>

        <v-layout

        >

          <v-flex >

            <router-view></router-view>

          </v-flex>

        </v-layout>

      </v-container>

    </v-content>

    <!--<v-footer color="indigo" app>-->

      <!--<span class="white&#45;&#45;text">&copy; 2017</span>-->

    <!--</v-footer>-->

  </v-app>

</template>



<script>

  export default {

    data: () => ({

      drawer: false

    }),



    props: {

      source: String

    }

  }

</script>