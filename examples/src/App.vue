<template>
  <!-- <div id="app">
    <router-view/>
  </div> -->
  <div class="app">
    <page-header></page-header>
    <div class="main-content">
      <!-- <p class="page-tip">查看 demo 请将浏览器切换到手机调试模式</p> -->
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
import 'highlight.js/styles/atom-one-dark.css'

import navConfig from './nav.config.json'
import PageHeader from './components/page-header'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'

export default {
  name: 'App',
  components: {
    PageHeader,
    SideNav,
    FooterNav
  },
  data () {
    return {
      navConfig: navConfig
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
