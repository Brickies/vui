import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './MobileApp';
import navConfig from './nav.config.json';
import routes from './router.config';
import Vui from 'src/index';

import 'packages/vui-css/src/index.css';

import DemoList from './components/demo-list.vue';

Vue.use(Vui);
Vue.use(VueRouter);

const isProduction = process.env.NODE_ENV === 'production';
const routesConfig = routes(navConfig, true);
routesConfig.push({
  path: '/',
  component: DemoList.default || DemoList
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
  document.title = route.meta.title || document.title;
  next();
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');
