<template>
  <div class="v-swiper" :style="styles">
    <div class="v-default-swiper" @click="swiperClick">
      <v-swipe
        :auto="auto"
        :defaultIndex="currentIndex"
        :showIndicators="showIndicators"
        @change="changeIndex"
      >
        <v-swipe-item v-for="(item, index) in items" :key="index" @click.native="urlJump(item.url)">
          <img :src="item.pic || item" alt="">
        </v-swipe-item>
      </v-swipe>
    </div>
    <div class="v-thum-fixed" v-if="type==='thum' && showThum" @click="swiperClose">
      <div class="v-thum-swiper">
        <v-swipe
          :auto="0"
          :defaultIndex="currentThumIndex"
          :showIndicators="showIndicators"
          @change="changeThumIndex"
        >
          <v-swipe-item v-for="(item, index) in items" :key="index" :scale="true">
            <img :src="item.pic || item" alt="">
          </v-swipe-item>
        </v-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import VSwipe from './swipe'
import VSwipeItem from './swipe-item'

export default {
  name: 'v-swiper',
  props: {
    type: {
      type: String,
      default: 'swiper'
    },
    defaultIndex: {
      type: [Number, String],
      default: 0
    },
    auto: {
      type: Number,
      default: 5000
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    auto: {
      type: Number,
      default: 0
    },
    styles: {
      type: Object,
      default: function () {
        return {}
      }
    },
    resetTitle: String
  },
  data () {
    return {
      currentIndex: ~~this.defaultIndex,
      currentThumIndex: 0,
      showThum: false
    }
  },
  computed: {
    title () {
      return `${this.currentThumIndex+1}/${this.items.length}`
    }
  },
  methods: {
    swiperClick () {
      if (this.type === 'swiper') {
        return
      } else if (this.type === 'thum') {
        this.showThum = true
        this.currentThumIndex = this.currentIndex
      }
    },
    urlJump (url) {
      if (this.type === 'swiper' && url) {
        window.location.href = url
      }
    },
    swiperClose () {
      this.showThum = false
    },
    changeIndex (newIndex) {
      this.currentIndex = newIndex
      this.$emit('change', newIndex)
    },
    changeThumIndex (newIndex) {
      this.currentThumIndex = newIndex
    }
  },
  components: {
    VSwipe,
    VSwipeItem
  }
}
</script>
