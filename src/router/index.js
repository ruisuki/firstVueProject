import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const originaPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originaPush.call(this, location).catch(err => err)
}

const routes = [
  {

    path: '/home',
    alias: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [

    ],
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('@/views/collect.vue'),
    children: [

    ],
  },

  {
    path: '/paper',
    name: 'paper',
    component: () => import('@/views/paper.vue'),
    children: [

    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),

    children: [

    ],
  },

  {
    path: '/loginpage',
    name: 'loginpage',
    component: () => import('@/views/loginpage.vue')
  }
]

const router = new VueRouter({
  routes
})



export default router
