import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Aside/Home'
import Homepage from '../menulist/HelloWorld'
import leftInput from '../menulist/leftInput'

import menuserch from '../components/new/menuSerch'

import vie_one from '@/components/Van/vie_one'
import Echartshree from '@/components/Echarts/Echartshree'
import vie_About from '@/components/Css/About'
import CssTranSition from '@/components/Css/CssTranSition'
import CssDiv from '@/components/Css/CssDiv'
import jsDrag from '@/components/JsFunction/jsDrag'
import jsvudiovisual from '@/components/JsFunction/jsvudiovisual'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/com/menuserch'//重定向
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
      path: '/Echartshree',
      name: 'Echartshree',
      component: Echartshree
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
      path: '/CssTranSition',
      name: 'CssTranSition',
      component: CssTranSition
    }, {
      path: '/first/leftInput',
      name: 'leftInput',
      component: leftInput
    },{
      path:'/js/jsDrag',
      name:'jsDrag',
      component:jsDrag
    },{
      path:'/js/jsvudiovisual',
      name:'jsvudiovisual',
      component:jsvudiovisual,
      meta: {title: 'vudioisual'}
    }]
  },

]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
