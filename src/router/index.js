import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/homePage/index.vue'
import About from '@/components/About/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
