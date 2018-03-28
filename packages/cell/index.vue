<template>
  <div
    class="v-cell"
    :class="{
      'v-cell--clickable': isLink || clickable
    }"
    @click="onClick"
  >
    <div class="v-cell__title" v-if="hasTitle">
      <slot name="icon">
        <v-icon v-if="icon" :name="icon"></v-icon>
      </slot>
      <slot v-if="title" name="title">
        <span class="v-cell__text" v-text="title"></span>
        <span class="v-cell__label" v-if="label" v-text="label"></span>
      </slot>
    </div>
    <div
      class="v-cell__value"
      :class="{
        'v-cell__value--alone': !hasTitle,
        'v-cell__value--link': isLink
      }"
      v-if="hasValue || isLink"
    >
      <slot>
        <span v-text="value"></span>
      </slot>
      <slot name="link-icon">
        <v-icon :name="linkIcon" class="v-cell__link-icon" v-if="isLink"></v-icon>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-cell',
  props: {
    title: String,
    icon: String,
    label: String,
    value: String,
    isLink: Boolean,
    clickable: Boolean,
    linkIcon: {
      type: String,
      default: 'arrow-right'
    },
    url: String,
    replace: Boolean,
    to: [String, Object]
  },
  computed: {
    hasTitle () {
      return this.title || this.icon || this.$slots.icon || this.$slots.title
    },
    hasValue () {
      return this.value || this.$slots.default
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
      const { to, url, $router, replace } = this
      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
}
</script>
