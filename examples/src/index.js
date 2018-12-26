// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import registerRoute from './router.config'
import navConfig from './nav.config'
import isMobile from './is-mobile'
import Vui from 'src/index.js'
import 'packages/vui-css/src/index.css'
import '../assets/docs.css'

Vue.config.productionTip = false
Vue.use(Vui)
Vue.use(VueRouter)

const routesConfig = registerRoute(navConfig)
const isProduction = process.env.NODE_ENV === 'production'
routesConfig.push({
  path: '/',
  redirect: '/component/intro'
})
routesConfig.push({
  path: '/component',
  redirect: '/component/intro'
})
const router = new VueRouter({
  base: isProduction ? '/' : __dirname,
  routes: routesConfig
})
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0)
  }

  const pathname = '/mobile.html'
  if (isMobile) {
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
  components: { App },
  template: '<App/>'
})
