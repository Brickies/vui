<template>
  <div
    class="v-select"
    v-clickoutside="hide"
    :style="{ width: width }"
    @touchmove="handleTouchMove">
    <ul class="v-select__list">
      <li class="select-item" :class="{ 'select-item-on':selectStatus }" @click="selectDown()">
        <span class="drop-title" :style="{ 'max-width': ellipsisWidth }" v-if="title && showTitle">{{ title }}</span>
        <span class="drop-title" :style="{ 'max-width': ellipsisWidth }" v-else>{{ selectData[currentIndex].name || selectData[currentIndex] }}</span>
        <span class="select-arrow-icon"></span>
        <span class="select-arrow" v-show="selectStatus">
          <i class="select-a-line"></i>
          <em class="select-a-bg"></em>
        </span>
      </li>
    </ul>

    <ul class="v-select__content" v-show="selectStatus">
      <li class="select-item" v-for="(item, index) in selectData" :key="index"
        :class="{ 'select-item-on': selectClass(index) }"
        @click="selectSubDown(index, item.id)" >
        {{ item.name || item }}
        <span class="select-icon" v-show="selectClass(index)">
          <slot>选中</slot>
        </span>
      </li>
    </ul>
    <div
      class="v-select__layout"
      v-show="selectStatus"
      @click="hide"
      @touchmove="handleTouchMove">
    </div>
  </div>
</template>
<script>
import Clickoutside from 'src/utils/clickoutside'

export default {
  name: 'v-select',
  directives: { Clickoutside },
  props: {
    selectData: Array,
    title: String,
    alwaysShowTitle: Boolean,
    defaultValue: [Number, String],
    width: {
      type: String,
      default: '100%'
    },
    ellipsisWidth: {
      type: String,
      default: '120px'
    },
    preventScroll: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      selectStatus: false,
      currentIndex: 0,
      showTitle: true
    }
  },
  created () {
    this.currentIndex = ~~this.defaultValue
  },
  methods: {
    hide () {
      this.selectStatus = false
    },
    selectDown () {
      this.selectStatus = !this.selectStatus
    },
    selectClass (index) {
      return this.currentIndex === index
    },
    selectSubDown (currentIndex, id) {
      this.alwaysShowTitle ? this.showTitle = true : this.showTitle = false
      this.selectStatus = false
      this.currentIndex = currentIndex
      this.$emit('select', currentIndex, id)
    },
    handleTouchMove (e) {
      if (this.selectStatus && this.preventScroll) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
  }
}
</script>
