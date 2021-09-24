import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Profil from '../views/Profil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Perfil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '*',
    redirect: 'error-404',
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/pages/error/Error404.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
