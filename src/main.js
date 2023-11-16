import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import CanvasVideo from 'vue-canvasvideo'
import '../src/icons'

import Vant from 'vant'
import 'vant/lib/index.css'

import './assets/index.css'//公共样式
import './views/indexCss.css'

// import echarts from 'echarts'
// Vue.prototype.$echarts=echarts
// import VCharts from 'v-charts'
// Vue.use(VCharts)


import  *  as echarts from 'echarts'
import "echarts-gl"; //echarts 3D插件
import {saveAs} from 'file-saver'//下载txt文件
// import SvgIcon from '@/SvgIcon'

Vue.prototype.$echarts = echarts;
// Vue.use(CanvasVideo)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant)
Vue.component('saveAs',saveAs)
// Vue.component('svg-icon',SvgIcon)
// const req=require.context('./svg',false,/\.svg$/)
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// requireAll(req)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
