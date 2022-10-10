import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Aside/Home'
import Homepage from '../components/HelloWorld'
import vie_About from '../views/About'
import vie_Home from '../views/Home'
import menuserch from '../components/menuSerch'

import vie_one  from '../views/vie_one'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/vie_About'//重定向
  },
  {
    path: '/',
    component: Home,
    meta:{title:'欢迎来到新世界'},
    children:[{
      path:'/first/Homepage',
      name:'Homepage',
      component:Homepage
    },{
      path:'/vie_About',
      name:'vie_About',
      component:vie_About
    },{
      path:'/vie_Home',
      name:'vie_Home',
      component:vie_Home
    },{
      path:'/vie_one',
      name:'vie_one',
      component:vie_one
    },{
      path:'/com/menuserch',
      name:'menuserch',
      component:menuserch
    }]
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
