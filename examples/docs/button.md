## Button 按钮

**包含了常用的 button 按钮**

### 基本用法

#### 按钮类型
支持 `default`、`primary`、`warn` 三种类型，默认为 `default`

```html
<v-button type="default">默认按钮</v-button>
<v-button type="primary">主要按钮</v-button>
<v-button type="warn">警告按钮</v-button>
```
#### 按钮尺寸
支持 `large`、`normal`、`middle`、`small` 四种尺寸，默认为 `normal`
```html
<v-button size="large">大号按钮</v-button>
<v-button size="normal">普通按钮</v-button>
<v-button size="middle">中号按钮</v-button>
<v-button size="small">小号按钮</v-button>
```
#### 块状按钮
按钮是否为块级元素，默认为行内块级元素
```html
<v-button block>块状按钮1</v-button>
<v-button block type="primary">块状按钮2</v-button>
```
#### 禁用按钮
通过 `disabled` 属性来禁用按钮
```html
<v-button disabled>禁用按钮</v-button>
```
#### 自定义按钮
通过 `tag` 属性来自定义按钮
```html
<v-button tag="a" href="https://github.com/Brickies/vui">自定义按钮</v-button>
```
#### 页面底部 `fixed` 按钮
通过 `fixed` 属性来控制按钮是否定位也页面底部
```html
<v-button fixed type="primary">确定按钮</v-button>
```


### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 按钮类型    | string   | `default` `primary` `warn` | `default` |
| size  | 按钮 大小    | string   | `normal` `large` `middle` `small` | `normal` |
| tag  | 自定义按钮类型    | string   | — | `button` |
| disabled  | 按钮是否禁用    | boolean   | — | `false` |
| fixed  | 是否 fixed 固定在页面底部    | boolean   | — | `false` |
| block  | 是否为块状按钮    | boolean   | — | `false` |
| styles  | 按钮自定义样式    | object   | — | {} |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击操作    | — |
