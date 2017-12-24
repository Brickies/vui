<template>
  <div class="v-search" :style="styles">
    <form action="#" onsubmit="return false;">
      <input type="search"
        ref="input"
        class="v-search__input"
        v-model='model'
        :placeholder="placeholder"
        @keyup="searchKeyupFn"
        @click="searchFocusFn"
        @keyup.enter="searchEnterFn"
        @blur="searchBlurFn"
      />
      <div class="icon v-search__icon">
        <img :src="searchImg" alt="">
      </div>
      <div class="icon v-search__close" v-show="showClose" @click="closeFn">
        <img :src="closeImg" alt="">
      </div>
    </form>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'v-search',
  componentName: 'v-search',
  props: {
    // 搜索节流时长
    timeout: {
      type: Number,
      default: 100
    },
    async: {
      type: Boolean,
      default: true
    },
    styles: Object,
    placeholder: {
      type: String,
      default: '搜索'
    },
    clear: {
      type: Boolean,
      default: false
    },
    autofocus: Boolean, // iOS移动端autofocus无效
  },
  data() {
    return {
      id: null,
      timer: null,
      showClose: false,
      searchFlag: true, // 搜索节流
      model: '',
      searchImg: require('packages/vui-css/assets/search.png'),
      closeImg: require('packages/vui-css/assets/close.png')
    };
  },
  watch: {
    model (val) {
      if (val) {
        this.showClose = true;
      } else {
        this.showClose = false;
      }
      if (this.searchFlag) {
        this.$emit('search', this.model)
      }
    }
  },
  created () {
    this.$on('clear', () => {
      this.model = '';
    });
  },
  methods: {
    searchKeyupFn() {
      let self = this;
      this.searchFlag = false;

      if (!this.async) {
        this.searchFlag = true;
        return
      }

      clearTimeout(this.timer)
      this.timer = setTimeout(function() {
        self.searchFlag = true
      }, this.timeout)
    },
    searchEnterFn (e) {
      this.$emit('enter', this.model)
      this.$refs.input.blur()
      if (this.clear) {
        this.model = '';
      }
    },
    searchBlurFn () {
      // do something for blur
    },
    closeFn () {
      this.model = '';
      this.showClose = false;
      this.$emit('close', this.model)
    },
    searchFocusFn () {
      this.$emit('focus')
    }
  },
  mounted () {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>
