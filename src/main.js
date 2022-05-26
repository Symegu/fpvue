import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins/ModalWindow'
import contextMenu from './plugins/ContextMenu'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(contextMenu)


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
