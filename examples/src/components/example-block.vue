<template>
  <div class="example-block">
    <h2 class="demo-sub-title" v-text="title"></h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>
<style>
.example-block {
  padding: 0 15px;
}
</style>
