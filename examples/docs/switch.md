## switch

**表示两种相互对立的状态间的切换，多用于触发「开/关」。**

### 基本用法

**注：如果未使用v-model指令进行值的双向绑定，则switch会显示value值对应的位置，但不能进行on-off操作**

```html
<template>
  <ul class='v-list'>
    <li><label>默认switch，值：{{val1}}</label><v-switch v-model="val1"></v-switch></li>
    <li><label>设置宽高，默认选中，值：{{val2}}</label><v-switch @change="handleChange" v-model="val2" width="50" height="30"></v-switch></li>
    <li><label>禁止点击，值：{{val3}}</label><v-switch :disabled="true"></v-switch></li>
    <li><label>禁止点击，默认选中，值：{{val4}}</label><v-switch :disabled="true" v-model="val4"></v-switch></li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      val1: false,
      val2: true,
      val3: false,
      val4: true
    }
  },
  methods: {
    handleChange (val, oldVal) {
      console.log(val, oldVal);
    }
  }
}
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width  | switch的宽度（像素）    | number/string   | — | 60 |
| height  | switch的高度（像素）    | number/string   | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| value  | switch初始化选择状态    | boolean/number/string   | — | 0 |
| activeClass  | switch 打开时的class    | string   | — | avtive |
| inactiveClass  | switch 关闭时的class    | string   | — | inactive |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |

