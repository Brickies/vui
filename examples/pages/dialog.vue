<style scoped>
.modal-text {
  text-align: center;
  margin-top: 5px;
}
</style>
<template>
  <section class="demo-toast">
    <h1 class="demo-title">Dialog 弹框</h1>
    <example-block title="基础用法">
      <v-button @click="showSimpleDialog">普通 Dialog</v-button>
    </example-block>
    <example-block title="自定义 HTML">
      <v-button @click="showHtmlDialog">HTML Dialog</v-button>
    </example-block>
    <example-block title="Dialog 模板">
      <v-button @click="showDialogTpl">Dialog Template</v-button>
    </example-block>
    <v-dialog
      title="Dialog 模板"
      cancelText="取消"
      okText="确认"
      content="测试 Dialog，测试 Dialog，测试 Dialog~~~"
      :show="showDialog"
      :onCancel="close"
      :onOk="close">
      <p class="modal-text">Dialog Template slot ！！！</p>
    </v-dialog>
  </section>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    showSimpleDialog () {
      this.$dialog({
        title: '普通 Dialog',
        cancelText: '取消',
        okText: '确定',
        content: '测试 Dialog，测试 Dialog，测试 Dialog~~~',
        onOk () {
          console.log('click ok btn to do someting')
        },
        onCancel () {
          console.log('click cancel btn to do someting')
        }
      })
    },
    showHtmlDialog () {
      this.$dialog({
        title: '自定义 HTML',
        cancelText: '取消',
        okText: '确定',
        content: '<strong style="color: green">测试 Dialog，测试 Dialog，测试 Dialog~~~</strong style="color: green">',
        onOk () {
          console.log('click ok btn to do someting')
        },
        onCancel () {
          console.log('click cancel btn to do someting')
        }
      })
    },
    showDialogTpl () {
      this.showDialog = true
    },
    close () {
      this.showDialog = false
    }
  }
}
</script>
