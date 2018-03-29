<style scoped>
.demo-icon {
  font-size: 0;
}
h2 {
  margin: 20px 20px -20px;
  font-size: 24px;
}
.demo-sub-title {
  padding-top: 10px !important;
}
.v-col {
  width: 33.3333%;
  text-align: center;
  height: 100px;
  float: none;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  span {
    display: inline-block;
    font-size: 14px;
  }
}
.demo-icon .v-icon {
  display: block;
  font-size: 32px;
  margin: 15px 0;
  color: #666;
}
.demo-icon span {
  font-size: 14px;
}
</style>

<template>
  <section class="demo-icon">
    <h2>Icon</h2>
    <example-block title="图标列表">
      <div class="v-col"><v-icon name="address" size="30"></v-icon><span>address</span></div>
      <div class="v-col"><v-icon name="arrow-left" size="30"></v-icon><span>arrow-left</span></div>
      <div class="v-col"><v-icon name="arrow-right" size="30"></v-icon><span>arrow-right</span></div>
      <div class="v-col"><v-icon name="double-arrow" size="30"></v-icon><span>double-arrow</span></div>
      <div class="v-col"><v-icon name="double-arrow-down" size="30"></v-icon><span>double-arrow-down</span></div>
      <div class="v-col"><v-icon name="add" size="30"></v-icon><span>add</span></div>
      <div class="v-col"><v-icon name="reduce" size="30"></v-icon><span>address</span></div>
      <div class="v-col"><v-icon name="close" size="30"></v-icon><span>close</span></div>
      <div class="v-col"><v-icon name="fill-circle-close" size="30"></v-icon><span>fill-circle-close</span></div>
      <div class="v-col"><v-icon name="empty-circle-close" size="30"></v-icon><span>empty-circle-close</span></div>
      <div class="v-col"><v-icon name="fill-circle" size="30"></v-icon><span>fill-circle</span></div>
      <div class="v-col"><v-icon name="username" size="30"></v-icon><span>username</span></div>
      <div class="v-col"><v-icon name="phone" size="30"></v-icon><span>phone</span></div>
      <div class="v-col"><v-icon name="select" size="30"></v-icon><span>select</span></div>
      <div class="v-col"><v-icon name="circle-select" size="30"></v-icon><span>circle-select</span></div>
      <div class="v-col"><v-icon name="modify" size="30"></v-icon><span>modify</span></div>
      <div class="v-col"><v-icon name="collection" size="30"></v-icon><span>collection</span></div>
      <div class="v-col"><v-icon name="collected" size="30"></v-icon><span>collected</span></div>
      <div class="v-col"><v-icon name="search" size="30"></v-icon><span>search</span></div>
      <div class="v-col"><v-icon name="clock-time" size="30"></v-icon><span>clock-time</span></div>
      <div class="v-col"><v-icon name="bill" size="30"></v-icon><span>bill</span></div>
      <div class="v-col"><v-icon name="message" size="30"></v-icon><span>message</span></div>
      <div class="v-col"><v-icon name="subway" size="30"></v-icon><span>subway</span></div>
      <div class="v-col"><v-icon name="refresh" size="30"></v-icon><span>refresh</span></div>
      <div class="v-col"><v-icon name="star" size="30"></v-icon><span>star</span></div>
      <div class="v-col"><v-icon name="fill-star" size="30"></v-icon><span>fill-star</span></div>
      <div class="v-col"><v-icon name="market" size="30"></v-icon><span>market</span></div>
      <div class="v-col"><v-icon name="sort" size="30"></v-icon><span>sort</span></div>
      <div class="v-col"><v-icon name="wechat" size="30"></v-icon><span>wechat</span></div>
      <div class="v-col"><v-icon name="warn" size="30"></v-icon><span>warn</span></div>
      <div class="v-col"><v-icon name="failed" size="30"></v-icon><span>failed</span></div>
      <div class="v-col"><v-icon name="rmb" size="30"></v-icon><span>rmb</span></div>
    </example-block>
  </section>
</template>
