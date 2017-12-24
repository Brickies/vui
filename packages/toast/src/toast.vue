<template>
  <div class='v-mask-toast' v-show='show'>
    <div class='v-toast animated zoomIn' >
      <template>
        <div v-html="msg">{{msg}}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-toast',
  props: {
    msg: String,
    timeout: {
      type: [Number, String],
      default: 2000
    },
    callback: Function,
    icon: String,
  },
  data() {
    return {
      show: true
    };
  },
  mounted () {
    setTimeout(() => {
      // 销毁组件
      this.$el.remove()
    }, this.timeout)
  }
};
</script>
