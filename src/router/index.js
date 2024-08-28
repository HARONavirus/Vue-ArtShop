import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Favorites from '@/pages/Favorites.vue'
import LogIn from '@/pages/LogIn.vue'
import Registraition from '@/pages/Registration.vue'
import Reviews from '@/pages/Reviews.vue'
import Rent from '@/pages/Rent.vue'
import Shops from '@/pages/Shops.vue'
import Suits from '@/pages/Suits.vue'
import Jackets from '@/pages/Jackets.vue'
import Shirts from '@/pages/Shirts.vue'
import Pants from '@/pages/Pants.vue'
import Shoes from '@/pages/Shoes.vue'
import Accessories from '@/pages/Accessories.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/registration',
      name: 'Registraition',
      component: Registraition
    },
    {
      path: '/login',
      name: 'Login',
      component: LogIn
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/rent',
      name: 'Rent',
      component: Rent
    },
    {
      path: '/shops',
      name: 'Shops',
      component: Shops
    },
    {
      path: '/suits',
      name: 'Suits',
      component: Suits
    },
    {
      path: '/jackets',
      name: 'Jackets',
      component: Jackets
    },
    {
      path: '/shirts',
      name: 'Shirts',
      component: Shirts
    },
    {
      path: '/pants',
      name: 'Pants',
      component: Pants
    },
    {
      path: '/shoes',
      name: 'Shoes',
      component: Shoes
    },
    {
      path: '/accessories',
      name: 'Accessories',
      component: Accessories
    }
  ]
})

export default router