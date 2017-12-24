<template>
  <div class="app">
    <page-header></page-header>
    <div class="main-content">
      <div class="page-container clearfix">
        <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
        <div class="page-content">
          <router-view></router-view>
          <footer-nav></footer-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import 'highlight.js/styles/color-brewer.css';
import navConfig from './nav.config.json';
import SideNav from './components/side-nav';
import DemoBlock from './components/demo-block';
import FooterNav from './components/footer-nav';
import PageHeader from './components/page-header';

Vue.component('side-nav', SideNav);
Vue.component('demo-block', DemoBlock);
Vue.component('footer-nav', FooterNav);
Vue.component('page-header', PageHeader);

export default {
  data() {
    return {
      navConfig: navConfig
    };
  }
};
</script>
