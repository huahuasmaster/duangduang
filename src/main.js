import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/bury'
import snackbar from 'vuetify/lib/components/VSnackbar'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  snackbar,
  render: function (h) { return h(App) }
}).$mount('#app');

