
<template>
  <label
    :class="['v-switch', {'disabled': disabled}, currentVal?['checked', activeClass]:inactiveClass]"
    :style="{
      width: width+'px',
      height: pheight+'px',
      borderRadius: radius
    }"
  >
    <input type="checkbox" v-model="currentVal" @change="$emit('change', !currentVal, currentVal)" :disabled="disabled">
    <p :class="['v-switch__scale']"></p>
    <span class="v-switch__button" :style="{ transform, width: cwidth+'px' }"></span>
  </label>
</template>

<script>
export default {
  name: 'v-switch',
  props: {
    width: {
      type: [Number, String],
      default: 60
    },
    height: [Number, String],
    activeClass: {
      type: String,
      default: 'active'
    },
    inactiveClass: {
      type: String,
      default: 'inactive'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Boolean, Number, String],
      default: false
    }
  },
  computed: {
    pheight () {
      if (!this.height) {
        return ~~this.width/2
      } else {
        return ~~this.height
      }
    },
    cwidth () {
      return this.pheight - 2
    },
    radius () {
      return ~~this.pheight + 'px'
    },
    transform() {
      return this.currentVal ? `translate3d(${ ~~this.width - ~~this.pheight }px, 0, 0)` : '';
    },
    bgColor () {
      return this.currentVal ? this.activeColor : this.inactiveColor;
    },
    currentVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
