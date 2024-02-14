import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OurBeers from '../views/OurBeers.vue'
import EpicImages from '../views/EpicImages.vue'
import Weather from '../views/Weather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ourbeers',
      name: 'OurBeers',
      component: OurBeers
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/epic-images',
      name: 'EpicImages',
      component: EpicImages
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather
    }
  ]
})

export default router
