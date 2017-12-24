## Dialog 弹框

### 基本用法

```html
<template>
  <example-block title="基础用法">
    <button @click="showSimpleDialog">普通 Dialog</button>
  </example-block>
</template>
<script>
export default {
  methods: {
    showSimpleDialog () {
      this.$dialog({
        title: '普通 Dialog',
        cancelText: '取消',
        okText: '确定',
        content: '测试 Dialog，测试 Dialog，测试 Dialog~~~'
      })
    }
  }
}
</script>
```

### 自定义 HTML

```html
<template>
  <example-block title="自定义 HTML">
    <button @click="showHtmlDialog">HTML Dialog</button>
  </example-block>
</template>
<script>
export default {
  methods: {
    showHtmlDialog () {
      this.$dialog({
        title: '自定义 HTML',
        cancelText: '取消',
        okText: '确定',
        content: '<strong style="color: green">测试 Dialog，测试 Dialog，测试 Dialog~~~</strong style="color: green">'
      })
    }
  }
}
</script>
```

### 高阶Dialog组件用法

```html
<template>
  <div>
    <example-block title="Dialog 模板">
      <button @click="showDialogTpl">Dialog Template</button>
    </example-block>
    <v-dialog
    title="Dialog 模板"
    cancelText="取消"
    okText="确认"
    content="测试 Dialog，测试 Dialog，测试 Dialog~~~"
    :show="showDialog"
    :onCancel="close"
    :onOk="close"
    >
      <p class="modal-text">Dialog Template slot ！！！</p>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    showDialogTpl () {
      this.showDialog = true
    },
    close () {
      this.showDialog = false
    }
  }
}
</script>

```

### Attributes(modal)

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| show  | modal是否显示    | boolean   | — | — |
| title  | modal标题  |  string  | — | —   |
| content  | modal内容  |  string  | — | —   |
| onOk  | 确定按钮回调    | function   | — | —   |
| onCancel  | 取消按钮回调    | function   | — | —   |
| okText  | 确定按钮内容    | string   | — | —   |
| cancelText  | 取消按钮内容    | string   | — | —   |
| showCloseIcon  | 是否显示关闭icon    | boolean   | — | true   |

