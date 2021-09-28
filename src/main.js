import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import store from './store'
import emailjs from 'emailjs-com';
import VueCompositionAPI from '@vue/composition-api'
import Vuelidate from 'vuelidate'

import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

import './app.scss'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
Vue.use(Vuelidate)

new Vue({
  created () {
    AOS.init()
  },
  emailjs,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
