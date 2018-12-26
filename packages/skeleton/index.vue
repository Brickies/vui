<template>
  <div class="v-skeleton" v-if="show" :style="{padding: padding}">
    <div class="v-skeleton__background" :style="{'background-size': size}">
      <row :rows="rows"></row>
    </div>
  </div>
</template>

<script>
import Row from './row'

export default {
  name: 'v-skeleton',
  components: {
    Row
  },
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '250%'
    },
    padding: {
      type: String,
      default: '5px 15px'
    }
  },
  created () {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden'
  },
  destroyed () {
    document.getElementsByTagName('html')[0].style.overflow = 'initial'
  }
}
</script>
