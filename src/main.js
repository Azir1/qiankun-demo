import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import {registerMicroApps,start} from 'qiankun'
const apps = [
  {
    name:'vueApp',
    entry:'//localhost:10000', // 默认会加载这个html，解析里面的js  动态执行（子应用必须支持跨域）fetch
    container:'#vue', // 容器名
    activeRule:'/vue' // 激活路径
  },
  {
    name:'reactApp',
    entry:'//localhost:20000', // 默认会加载这个html，解析里面的js  动态执行（子应用必须支持跨域）fetch
    container:'#react',
    activeRule:'/react'
  }
]
registerMicroApps(apps) // 注册子应用
start({
  prefetch:false // 取消预加载
}) // 开启
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
