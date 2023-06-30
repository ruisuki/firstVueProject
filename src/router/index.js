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
    meta: {
      keepAlive: true
    }
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
  },

  {
    path: '/resultpage',
    name: 'resultpage',
    component: () => import('@/views/resultpage.vue')
  },
  {
    path: '/notFound',
    name: 'notfound',
    component: () => import('@/views/notfound.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})



export default router
