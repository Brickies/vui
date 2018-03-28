<template>
  <div class="v-dialog v-mask-dialog" v-if="show">
    <div class="v-dialog__content">
      <div class="v-dialog-wrap">
        <i class="v-icon v-icon-close" style="font-size: 14px;" v-show="showCloseIcon" @click.stop="closeDialog(false, onCancel)"></i>
        <!-- <img :src="closeImgSrc" alt="" v-show='showCloseIcon' class="v-dialog-close" @click.stop="closeDialog(false, onCancel)"> -->
        <div class="v-dialog-title" v-show="title">
          {{ title }}
        </div>
        <div class="v-dialog-content" v-if="content" v-html="content"></div>
        <slot></slot>
      </div>
      <div :class="{'v-dialog-footer': true, 'fullWidth': !cancelText||!okText}">
        <div v-show='cancelText' class="v-dialog-cancel" @click.stop="closeDialog(false, onCancel)">{{ cancelText }}</div>
        <div v-show='okText' class="v-dialog-ok" @click.stop='closeDialog(false, onOk)'>{{ okText }}</div>
      </div>
    </div>
    <div class="v-dialog__layout" @click.stop="closeDialog(false)"></div>
  </div>
</template>

<script>
export default {
  name: 'v-dialog',
  props: {
    show: Boolean,
    title: String,
    onOk: Function,
    content: String,
    onCancel: Function,
    cancelText: String,
    okText: String,
    showCloseIcon: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    // console.log(this.show);
  },
  data () {
    return {
      // closeImgSrc: require('packages/vui-css/assets/close.png'),
    };
  },
};
</script>
