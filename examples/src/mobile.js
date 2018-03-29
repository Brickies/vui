import Vue from 'vue'
import VueRouter from 'vue-router'
import MobileApp from './MobileApp'
import registerRoute from './router.config'
import navConfig from './nav.config'
import Vui from 'src/index'
import isMobile from './is-mobile.js'
import 'packages/vui-css/src/index.css'
import DemoList from './components/demo-list.vue'
import ExampleBlock from './components/example-block'

Vue.component('example-block', ExampleBlock)

Vue.use(Vui)
Vue.use(VueRouter)

const isProduction = process.env.NODE_ENV === 'production'
const routesConfig = registerRoute(navConfig, true)
routesConfig.push({
  path: '/',
  component: DemoList
})
const router = new VueRouter({
  base: isProduction ? '/' : __dirname,
  routes: routesConfig
})
console.log(isMobile)
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0)
  }
  const pathname = '/'
  if (!isMobile) {
    window.location.replace(pathname)
    return
  }
  document.title = route.meta.title || document.title
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app-container',
  router,
  components: { MobileApp },
  template: '<MobileApp/>'
})
