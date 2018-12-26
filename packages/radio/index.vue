<template>
  <div
    class="v-radio"
    :class="{ 'v-radio--disabled': isDisabled }"
    @click="$emit('click')">
    <span class="v-radio__input">
      <input
        type="radio"
        class="v-radio__content"
        :value="name"
        :disabled="isDisabled"
        :name="name"
        @change="handleChange"
        v-model="currentValue">
      <v-icon :name="currentValue === name ? 'checked' : 'check'" size="22" />
    </span>
    <span v-if="$slots.default" class="v-radio__label" @click="onClickLabel">
      <slot />
    </span>
  </div>
</template>
<script>
import findParent from '@/mixins/find-parent'

export default {
  name: 'v-radio',
  mixins: [ findParent ],
  data () {
    return {
      parent: null
    }
  },
  props: {
    value: null,
    name: null,
    disabled: Boolean
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name !== 'v-radio-group') {
          parent = parent.$parent
        } else {
          this.parent = parent
          return true
        }
      }
      return false
    },
    currentValue: {
      get () {
        return this.isGroup ? this.parent.value : this.value
      },
      set (val) {
        if (this.isGroup) {
          this.parent.$emit('input', val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    isDisabled () {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled
    }
  },
  methods: {
    onClickLabel () {
      if (!this.isDisabled) {
        this.currentValue = this.name
      }
    },
    handleChange (val) {
      this.$emit('change', this.currentValue)
    }
  }
}
</script>
