import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Work1 from '../views/Work1.vue'
import Work2 from '../views/Work2.vue'
import Work3 from '../views/Work3.vue'
import Work4 from '../views/Work4.vue'
import Work5 from '../views/Work5.vue'
// husk import


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/work1',
    name: 'Work1',
    component: Work1
  },
  {
    path: '/work2',
    name: 'Work2',
    component: Work2
  },
  {
    path: '/work3',
    name: 'Work3',
    component: Work3
  },
  {
    path: '/work4',
    name: 'Work4',
    component: Work4
  },
  {
    path: '/work5',
    name: 'Work5',
    component: Work5
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
