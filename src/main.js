import Vue from 'vue'
import App from './App.vue'
import './mock'
import './styles/styles/global.less'
import router from './router'
import { shouMeassage } from './utils'


import './api'
Vue.config.productionTip = false

//添加到vue实例中去 所有组件都能使用此方法
Vue.prototype.$shouMeassage = shouMeassage;
new Vue({
  router,
  render: h => h(App), // 渲染组件实例
}).$mount('#app')
