// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    base: __dirname,
    routes
})

/* eslint-disable no-new */

new Vue({
  //el: '#app',
  router,
  /*template: '<App/>',
  components: { App }*/
  render: h => h(App)
}).$mount('#app')
