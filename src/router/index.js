import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: resolve => require(['@/layouts/main.vue'], resolve),
      children: [
        {
          path: '',
          name: 'Layout',
          component: resolve => require(['@/views/home/index.vue'], resolve),
        },
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/views/home/index.vue'], resolve),
        },
        {
          path: '/found',
          name: 'found',
          component: resolve => require(['@/views/found/index.vue'], resolve),
        },
        {
          path: '/message',
          name: 'message',
          component: resolve => require(['@/views/message/index.vue'], resolve),
        },
        {
          path: '/info',
          name: 'info',
          component: resolve => require(['@/views/info/index.vue'], resolve),
        },
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/views/search/index.vue'], resolve),
    }
  ]
})
