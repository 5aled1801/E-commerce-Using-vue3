/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductcontView from '@/views/ProductcontView.vue'
import DetPreoductVue from '@/views/DetPreoduct.vue'
import AllcartDetVue from '@/views/AllcartDet.vue'
import checkoutVue from '@/views/checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:category/:title',
      name: 'produtCont',
      component: ProductcontView
    },
    {
      path: '/products/product-details/:productId',
      name: 'DetProduct',
      component: DetPreoductVue
    },

    {
      path: '/allcartdet',
      name: 'AllCartDet',
      component: AllcartDetVue
    },
    {
      path: '/checkout',
      name: 'check-out',
      component: checkoutVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
