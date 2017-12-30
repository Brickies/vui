import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './DocsApp';
import navConfig from './nav.config.json';
import routes from './router.config';
import Vui from 'src/index.js';
import isMobile from './isMobile.js';
import { VERSION } from '../../package.json';

const isProduction = process.env.NODE_ENV === 'production';
const global = {
  version: VERSION
};
window._global = global;

import '../assets/docs.css';
import 'packages/vui-css/src/index.css';

Vue.use(Vui);
Vue.use(VueRouter);

const routesConfig = routes(navConfig);
routesConfig.push({
  path: '/',
  redirect: '/component/intro'
});
routesConfig.push({
  path: '/component',
  redirect: '/component/intro'
});

const router = new VueRouter({
  mode: 'hash',
  base: isProduction ? '/vui/' : __dirname,
  routes: routesConfig
});
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0);
  }

  const pathname = isProduction ? '/vui/mobile' : '/mobile.html';
  if (isMobile) {
    window.location.replace(pathname);
    return;
  }
  document.title = route.meta.title || document.title;
  next();
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');
