import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Temperatura from '@/components/Temperatura.vue'
import Turbidez from '@/components/Turbidez.vue'
import Ph from '@/components/Ph.vue'
import NivelAgua from '@/components/NivelAgua.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/temperatura',
      name: 'temperatura',
      component: Temperatura
    },
    {
      path: '/turbidez',
      name: 'turbidez',
      component: Turbidez
    },
    {
      path: '/ph',
      name: 'ph',
      component: Ph
    },
    {
      path: '/nivel-agua',
      name: 'nivel-agua',
      component: NivelAgua
    }
  
  ]
})

export default router
