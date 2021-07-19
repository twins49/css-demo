import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/touxiang',
    name: 'touxiang',
    component: () => import(/* webpackChunkName: "touxiang" */ '../views/Touxiang.vue'),
  },
  {
    path: '/didian',
    name: 'didian',
    component: () => import(/* webpackChunkName: "didian" */ '../views/Didian.vue'),
  },
  {
    path: '/wechat',
    name: 'wechat',
    component: () => import(/* webpackChunkName: "wechat" */ '../views/Wechat.vue'),
  },
  {
    path: '/yes',
    name: 'yes',
    component: () => import(/* webpackChunkName: "yes" */ '../views/Yes.vue'),
  },
  {
    path: '/view',
    name: 'view',
    component: () => import(/* webpackChunkName: "view" */ '../views/View.vue'),
  },
  {
    path: '/gps',
    name: 'gps',
    component: () => import(/* webpackChunkName: "gps" */ '../views/Gps.vue'),
  },
  {
    path: '/logo',
    name: 'logo',
    component: () => import(/* webpackChunkName: "logo" */ '../views/Logo.vue'),
  },
  {
    path: '/ps',
    name: 'ps',
    component: () => import(/* webpackChunkName: "ps" */ '../views/Ps.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
