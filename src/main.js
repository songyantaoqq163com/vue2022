import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant'
import 'vant/lib/index.css'

// import echarts from 'echarts'
// Vue.prototype.$echarts=echarts
// import VCharts from 'v-charts'
// Vue.use(VCharts)


import  *  as echarts from 'echarts'
import "echarts-gl"; //echarts 3D插件
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
