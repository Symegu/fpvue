import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins/ModalWindow'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
