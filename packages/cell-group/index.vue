<template>
  <div class="v-cell-group" :class="{ 'v-cell-group--top-bottom': border }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
};
</script>
