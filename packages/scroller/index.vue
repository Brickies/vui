<template>
  <div class="v-scroller" :ref="containerId"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
    @mousedown="mouseDown($event)"
    @mousemove="mouseMove($event)"
    @mouseup="mouseUp($event)"
  >
    <div class="v-scroller__content" :ref="contentId">
      <div v-if="onRefresh" class="pull-to-refresh-layer"
        :class="{'active': state === 1, 'active refreshing': state === 2}"
        >
        <span class="spinner-holder">
          <arrow class="arrow" :fillColor="refreshLayerColor" v-if="state !== 2"></arrow>

          <span class="text" v-if="state != 2" :style="{color: refreshLayerColor}" v-text="refreshText"></span>

          <span v-if="state === 2">
            <slot name="refresh-spinner">
              <spinner :style="{fill: refreshLayerColor, stroke: refreshLayerColor}"></spinner>
            </slot>
          </span>
        </span>
      </div>

      <slot><!-- scroller content --></slot>

      <div v-if="showInfiniteLayer && isLoadMore" class="v-scroller-loading" :style="styles">
        <span class="spinner-holder" :class="{'active': showLoading}" v-if="showLoading">
          <slot name="infinite-spinner">
            <spinner :style="{fill: loadingLayerColor, stroke: loadingLayerColor}"></spinner>
          </slot>
        </span>

        <div class="no-data-text"
          v-if="!showLoading && loadingState === 2"
          :class="{'active': !showLoading && loadingState === 2}" :style="{color: loadingLayerColor}"
          v-text="noDataText">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroller from 'src/utils/core'
import getContentRender from 'src/utils/render'
import Spinner from './spinner'
import Arrow from './arrow'

const re = /^[\d]+(%)?$/
const widthAndHeightCoerce = (v) => {
  if (v[v.length - 1] !== '%') return v + 'px'
  return v
}
const widthAndHeightValidator = (v) => {
  return re.test(v)
}

export default {
  name: 'v-scroller',
  components: {
    Spinner,
    Arrow
  },
  props: {
    onRefresh: Function,
    onInfinite: Function,
    isLoadMore: {
      type: Boolean,
      default: true
    },
    styles: {
      type: Object,
      default () {
        return {}
      }
    },
    refreshText: {
      type: String,
      default: '下拉刷新'
    },
    noDataText: {
      type: String,
      default: '没有更多数据啦~'
    },
    width: {
      type: String,
      default: '100%',
      validator: widthAndHeightValidator
    },
    height: {
      type: String,
      default: '100%',
      validator: widthAndHeightValidator
    },
    snapping: {
      type: Boolean,
      default: false
    },
    snapWidth: {
      type: Number,
      default: 100
    },
    snapHeight: {
      type: Number,
      default: 100
    },
    animating: {
      type: Boolean,
      default: true
    },
    animationDuration: {
      type: Number,
      default: 250
    },
    bouncing: {
      type: Boolean,
      default: true
    },
    refreshLayerColor: {
      type: String,
      default: '#AAA'
    },
    loadingLayerColor: {
      type: String,
      default: '#AAA'
    },
    cssClass: String, // content css class
    minContentHeight: {
      type: Number,
      default: 0 // px
    },
    loadingStatus: [Number, Boolean]
  },
  computed: {
    w: function () {
      return widthAndHeightCoerce(this.width)
    },
    h: function () {
      return widthAndHeightCoerce(this.height)
    },
    showInfiniteLayer () {
      let contentHeight = 0
      this.content
        ? contentHeight = this.content.offsetHeight
        : void 666
      return this.onInfinite
        ? contentHeight > this.minContentHeight
        : false
    }
  },
  data () {
    return {
      containerId: 'outer-22' + Math.random().toString(36).substring(3, 8),
      contentId: 'inner-22' + Math.random().toString(36).substring(3, 8),
      state: 0, // 0: pull to refresh, 1: release to refresh, 2: refreshing
      loadingState: 0, // 0: stop, 1: loading, 2: stopping loading
      showLoading: false,
      container: undefined,
      content: undefined,
      scroller: undefined,
      pullToRefreshLayer: undefined,
      mousedown: false,
      infiniteTimer: undefined,
      resizeTimer: undefined
    }
  },
  mounted () {
    this.container = this.$refs[this.containerId]
    this.container.style.width = this.w
    this.container.style.height = this.h
    this.content = this.$refs[this.contentId]
    if (this.cssClass) this.content.classList.add(this.cssClass)
    this.pullToRefreshLayer = this.content.getElementsByTagName('div')[0]
    let render = getContentRender(this.content)

    this.scroller = new Scroller(render, {
      scrollingX: false,
      snapping: this.snapping,
      animating: this.animating,
      animationDuration: this.animationDuration,
      bouncing: this.bouncing
    })
    // enable PullToRefresh
    if (this.onRefresh) {
      this.scroller.activatePullToRefresh(60, () => {
        this.state = 1
      }, () => {
        this.state = 0
      }, () => {
        this.state = 2
        this.$on('$finishPullToRefresh', () => {
          setTimeout(() => {
            this.state = 0
            this.finishPullToRefresh()
          })
        })
        this.onRefresh(this.finishPullToRefresh)
      })
    }
    // setup scroller
    let rect = this.container.getBoundingClientRect()
    this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop)
    // snapping
    if (this.snapping) {
      // console.log(this.snapWidth, this.snapHeight)
      this.scroller.setSnapSize(this.snapWidth, this.snapHeight)
    }
    // onContentResize
    const contentSize = () => {
      return {
        width: this.content.offsetWidth,
        height: this.content.offsetHeight
      }
    }
    let { contentWidth, contentHeight } = contentSize()

    this.resizeTimer = setInterval(() => {
      let { width, height } = contentSize()
      if (width !== contentWidth || height !== contentHeight) {
        contentWidth = width
        contentHeight = height
        this.resize()
      }
    }, 10)
  },
  destroyed () {
    clearInterval(this.resizeTimer)
    if (this.infiniteTimer) clearInterval(this.infiniteTimer)
  },
  methods: {
    resize () {
      let container = this.container
      let content = this.content
      this.scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight)
    },
    finishPullToRefresh () {
      this.scroller.finishPullToRefresh()
    },
    finishInfinite (hideSpinner) {
      this.loadingState = hideSpinner ? 2 : 0
      this.showLoading = false
      // console.log('this.showLoading', this.showLoading);
      // if (this.loadingState === 2) {
      //   this.resetLoadingState()
      // }
    },
    triggerPullToRefresh () {
      this.scroller.triggerPullToRefresh()
    },
    scrollTo (x, y, animate) {
      this.scroller.scrollTo(x, y, animate)
    },
    scrollBy (x, y, animate) {
      this.scroller.scrollBy(x, y, animate)
    },
    touchStart (e) {
      // Don't react if initial down happens on a form element
      if (e.target.tagName.match(/input|textarea|select/i)) {
        return
      }
      this.scroller.doTouchStart(e.touches, e.timeStamp)
    },
    touchMove (e) {
      e.preventDefault()
      this.scroller.doTouchMove(e.touches, e.timeStamp)
    },
    touchEnd (e) {
      this.scroller.doTouchEnd(e.timeStamp)
      // let { left, top, zoom } = this.scroller.getValues()
      let { top } = this.scroller.getValues()
      // console.log(left, top, this.content.offsetHeight, this.container.clientHeight);
      // 初始化load状态
      if (this.loadingState === 2) {
        this.loadingState = 2
      } else {
        this.loadingState = 0
      }
      // enable infinite loading
      if (this.onInfinite) {
        // 在 keep alive 中 deactivated 的组件长宽变为 0
        if (this.content.offsetHeight > 0 &&
          top - 20 > 0 && top - 20 > this.content.offsetHeight - this.container.clientHeight) {
          // if (this.loadingState) return
          this.loadingState = 1
          this.showLoading = true
          if (this.isLoadMore) this.onInfinite(this.finishInfinite)
        }
      }
    },
    mouseDown (e) {
      // Don't react if initial down happens on a form element
      if (e.target.tagName.match(/input|textarea|select/i)) {
        return
      }
      this.scroller.doTouchStart([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp)
      this.mousedown = true
    },
    mouseMove (e) {
      if (!this.mousedown) {
        return
      }
      this.scroller.doTouchMove([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp)
      this.mousedown = true
    },
    mouseUp (e) {
      if (!this.mousedown) {
        return
      }
      this.scroller.doTouchEnd(e.timeStamp)
      this.mousedown = false
    },
    // 获取位置
    getPosition () {
      let v = this.scroller.getValues()
      console.log(v)
      return {
        left: parseInt(v.left),
        top: parseInt(v.top)
      }
    },
    resetLoadingState () {
      // let { left, top, zoom } = this.scroller.getValues()
      let { top } = this.scroller.getValues()
      if (top - 20 > this.content.offsetHeight - this.container.clientHeight) {
        setTimeout(() => {
          this.resetLoadingState()
        }, 1000)
      } else {
        this.loadingState = 0
      }
    }
  }
}
</script>
