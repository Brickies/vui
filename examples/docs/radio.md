## Radio 单选框

**需配合radio-group组件一起使用**

### 基础用法
```html
<v-radio-group v-model="radio">
  <v-radio name="1">单选框 1</v-radio>
  <v-radio name="2">单选框 2</v-radio>
</v-radio-group>
```
```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
```

### 禁用状态

```html
<v-radio-group v-model="radio" disabled>
  <v-radio name="1">单选框 1</v-radio>
  <v-radio name="2">单选框 2</v-radio>
</v-radio-group>
```

### 与其他组件一起配合使用（如 Cell 组件）

```html
<v-radio-group v-model="radio">
  <v-cell-group>
    <v-cell title="单选框 1" clickable @click="radio2 = '1'"><v-radio name="1" /></v-cell>
    <v-cell title="单选框 2" clickable @click="radio2 = '2'"><v-radio name="2" /></v-cell>
  </v-cell-group>
</v-radio-group>
```


### Radio Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name  | radio的值   | 任意类型   | — | — |
| value  | radio默认的值   | 任意类型   | — | — |
| disabled  | 禁用状态   | boolean   | true、false | false |


### RadioGroup Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 选中项的name   | 任意类型   | — | — |
| v-model  | 选中项的name   | 任意类型   | — | — |
| disabled  | 禁用状态   | boolean   | true、false | false |


### RadioGroup Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件    | 当前选中项的 name |
