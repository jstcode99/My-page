import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import store from './store'

import './app.scss'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
