import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 300ms点击延迟
import fastClick from 'fastclick'
fastClick.attach(document.body)
// 图片懒加载
import lazyLoader from 'vue-lazyload'
Vue.use(lazyLoader, {
  loading: require('common/image/default.png')
})

import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
