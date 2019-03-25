import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Orders from './views/Orders.vue'
import Comments from './views/Comments'
import Account from './views/Account'
import ProductDetail from './views/ProductDetail'
import Buy from './views/Buy'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: ProductDetail,
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: Buy,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: function () {
    //     return import(/* webpackChunkName: "about" */ './views/About.vue')
    //   }
    // }
  ]
})
