<template>
  <div class="v-radio-group">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'v-radio-group',
  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
}
</script>
