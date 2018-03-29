<style scoped>
button {
  padding: 5px 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  color: #555;
  font-size: 14px;
}
</style>
<template>
  <section class="demo-toast">
    <h1 class="demo-title">Toast 轻提示</h1>
    <example-block title="基础用法">
      <button @click="showSimpleToast">普通文字提示</button>
    </example-block>
    <example-block title="自定义 HTML">
      <button @click="showHtmlToast">自定义 HTML 文本提示</button>
    </example-block>
  </section>
</template>

<script>
export default {
  methods: {
    showSimpleToast () {
      this.$toast({msg: '我是文字提示~'});
    },
    showHtmlToast () {
      this.$toast('<strong style="font-size: 20px;">HTML 文字提示~</strong>');
    }
  }
}
</script>
