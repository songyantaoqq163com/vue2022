import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Aside/Home'
import Homepage from '../menulist/HelloWorld'
import leftInput from '../menulist/leftInput'

import menuserch from '../components/new/menuSerch'

import vie_one from '@/components/module/vie_one'
import vie_Home from '@/components/module/Home'
import vie_About from '@/components/module/About'
import TranSition from '@/components/module/TranSition'
import CssDiv from '@/components/module/CssDiv'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/vie_About'//重定向
  },
  {
    path: '/',
    component: Home,
    meta: { title: '欢迎来到新世界' },
    children: [{
      path: '/first/Homepage',
      name: 'Homepage',
      component: Homepage
    }, {
      path: '/vie_About',
      name: 'vie_About',
      component: vie_About
    }, {
      path: '/vie_Home',
      name: 'vie_Home',
      component: vie_Home
    }, {
      path: '/CssDiv',
      name: 'CssDiv',
      component: CssDiv
    }, {
      path: '/vie_one',
      name: 'vie_one',
      component: vie_one
    }, {
      path: '/com/menuserch',
      name: 'menuserch',
      component: menuserch
    }, {
      path: '/com/TranSition',
      name: 'TranSition',
      component: TranSition
    }, {
      path: '/first/leftInput',
      name: 'leftInput',
      component: leftInput
    }]
  },

]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
