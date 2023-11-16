import Vue from 'vue'
import SvgIcon from '@/SvgIcon'// svg 组件
 
// 全局注册svg组件
Vue.component('svg-icon', SvgIcon)
// 工程化导入svg图片
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)