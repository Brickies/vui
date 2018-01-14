<style scoped>
.demo-button {
  font-size: 0;
  padding-bottom: 60px;
}
.v-button {
  margin-right: 10px;
}
h2 {
  margin: 20px 20px -20px;
  font-size: 24px;
}
.demo-button .v-button--large, .demo-button .v-button--block {
    margin-bottom: 15px;
}
</style>
<template>
  <section class="demo-button">
    <h2>Button</h2>
    <example-block title="按钮类型">
      <v-button type="default">默认按钮</v-button>
      <v-button type="primary">主要按钮</v-button>
      <v-button type="warn">警告按钮</v-button>
    </example-block>
    <example-block title="按钮尺寸">
      <v-button size="large">大号按钮</v-button>
      <v-button size="normal">普通按钮</v-button>
      <v-button size="middle">中号按钮</v-button>
      <v-button size="small">小号按钮</v-button>
    </example-block>
    <example-block title="块状按钮">
      <v-button block>块状按钮1</v-button>
      <v-button block type="primary">块状按钮2</v-button>
    </example-block>
    <example-block title="禁用按钮">
      <v-button disabled>禁用按钮</v-button>
    </example-block>
    <example-block title="自定义按钮">
      <v-button tag="a" href="https://github.com/Brickies/vui">自定义按钮</v-button>
    </example-block>
    <example-block title="页面底部 fixed 定位按钮">
      <v-button fixed type="primary" @click="clickFn(456)">确定按钮</v-button>
    </example-block>
  </section>
</template>

<script>
import Vue from "vue";
import ExampleBlock from "components/example-block";

Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    clickFn (a) {
      console.log(123, a);
    }
  }
}
</script>
