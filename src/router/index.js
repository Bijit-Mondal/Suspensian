import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Channel from '../views/channel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    name:'about',
    component: About
  },
  {
    path: '/:channel',
    name: 'Channel',
    component : Channel
  },
  {
    path: '/:channel/:id',
    name: 'id',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Download.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
