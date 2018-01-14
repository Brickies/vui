<template>
  <component
    class="v-button"
    :is="tag"
    :disabled="disabled"
    :class="[
      'v-button--' + type,
      'v-button--' + size,
      {
        'v-button--disabled': disabled,
        'v-button--block': block,
        'v-button--fixed': fixed,
      }
    ]"
    :style="styles"
    @click="onClick"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'v-button',
  props: {
    type: {
      validator(v) {
        return ['default', 'primary', 'warn'].indexOf(v) > -1;
      },
      default: 'default',
      required: false
    },
    size: {
      validator(v) {
        return ['normal', 'large', 'middle', 'small'].indexOf(v) > -1;
      },
      default: 'normal',
      required: false
    },
    tag: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    fixed: Boolean,
    block: Boolean,
    styles: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onClick (e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>
