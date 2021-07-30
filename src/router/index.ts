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
  {
    path: '/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '../views/Layout.vue'),
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import(/* webpackChunkName: "loading" */ '../views/Loading.vue'),
  },
  {
    path: '/hoverTips',
    name: 'hoverTips',
    component: () => import(/* webpackChunkName: "hoverTips" */ '../views/HoverTips.vue'),
  },
  {
    path: '/stateBall',
    name: 'stateBall',
    component: () => import(/* webpackChunkName: "StateBall" */ '../views/StateBall.vue'),
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import(/* webpackChunkName: "Navbar" */ '../views/Navbar.vue'),
  },
  {
    path: '/aspect',
    name: 'aspect',
    component: () => import(/* webpackChunkName: "Aspect" */ '../views/AspectRatio.vue'),
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import(/* webpackChunkName: "Clock" */ '../views/Clock/index.vue'),
  },
  {
    path: '/threeCrossbar',
    name: 'threeCrossbar',
    component: () => import(/* webpackChunkName: "threeCrossbar" */ '../views/ThreeCrossbar.vue'),
  },
  {
    path: '/sticky',
    name: 'sticky',
    component: () => import(/* webpackChunkName: "sticky" */ '../views/Sticky.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
