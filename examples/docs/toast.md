## Toast 轻提示

### 基本用法

```html
<template>
  <example-block title="基础用法">
    <button @click="showSimpleToast">普通文字提示</button>
  </example-block>
</template>
<script>
export default {
  methods: {
    showSimpleToast () {
      this.$toast({msg: '我是文字提示~'});
    }
  }
}
</script>
```
### 自定义 HTML

```html
<template>
  <example-block title="自定义HTML">
    <button @click="showHtmlToast">自定义HTML文本提示</button>
  </example-block>
</template>
<script>
export default {
  methods: {
    showHtmlToast () {
      this.$toast('<strong style="font-size: 20px;">HTML文字提示~</strong>');
    }
  }
}
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| msg  | msg文本内容    | string   | — | — |
| timeout  | msg显示时长    | number | —   | 2000  |
| callback  | 回调函数    | function   | — | —   |
| icon  | 特殊icon    | string   | — | —   |


