<template>
  <div class="v-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'v-swipe-item',
    props: {
      scale: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this);
    },

    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this);
    }
  };
</script>
