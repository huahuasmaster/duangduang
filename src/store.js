import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: 1,
    showAlert: false,
    content: '',
    type: 'info',
  },
  mutations: {
    info(state, content) {
      this.alert(state, {content, type: 'info'})
    },
    error(state, content) {
      this.alert(state, {content, type: 'error'})
    },
    success(state, content) {
      this.alert(state, {content, type: 'success'})
    },
    warning(state, content) {
      this.alert(state, {content, type: 'warning'})
    },
    doAlert(state, props) {
      // console.log(props);
      state.type = props.type;
      state.content = props.content;
      state.showAlert = true;
    },
    cancelAlert(state) {
      // console.log(props);
      state.content = '';
      state.showAlert = false;
    }
  },
  actions: {
    alert({commit}, props) {
      commit('doAlert', props);
      setTimeout(() => {
        commit('cancelAlert');
      }, 3000);
    }
  }
})
