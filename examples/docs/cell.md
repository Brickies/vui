## Cell 单元格

**cell 单元格**

### 用法

#### 基本用法

将 `v-cell-group` 组件看成一个容器即可

```html
<v-cell-group>
  <v-cell title="cell 单元格" value="内容"></v-cell>
  <v-cell title="cell 单元格" label="这是描述" value="内容"></v-cell>
</v-cell-group>
```

#### 只有 value 内容

内容会左对齐

```html
<v-cell-group>
  <v-cell value="只有内容"></v-cell>
</v-cell-group>
```

#### 展示 icon

设置 `icon` cell 左侧即可展示 icon

```html
<v-cell-group>
  <v-cell title="cell 单元格" icon="address"></v-cell>
  <v-cell title="cell 单元格" value="内容" icon="address"></v-cell>
</v-cell-group>
```

#### 展示箭头

设置 `is-link` 即可

```html
<v-cell-group>
  <v-cell title="cell 单元格" is-link></v-cell>
  <v-cell title="cell 单元格" value="内容" is-link></v-cell>
  <v-cell title="cell 单元格" value="跳转到首页" is-link to="/"></v-cell>
</v-cell-group>
```

#### 更多用法

```html
<v-cell-group>
  <v-cell title="cell 单元格" value="自定义右侧 icon" is-link link-icon="search"></v-cell>
  <v-cell title="cell 单元格" is-link>
    <v-picker v-model="gender.value" placeholder="请选择性别" :default="gender.default" title="选择性别" type="custom"></v-picker>
  </v-cell>
</v-cell-group>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | 标题    | string   | — | — |
| icon  | icon 图标    | string   | — | — |
| label  | 描述内容    | string   | — | — |
| value  | cell 内容    | string   | — | — |
| is-link  | 是否显示link 箭头以及开启点击反馈    | boolean   | — | false |
| link-icon  | link-icon 图标    | string   | — | `arrow-right` |
| clickable  | 是否开启点击反馈    | boolean   | — | false |
| url  | 跳转链接    | string   | — | — |
| to  | 路由跳转对象，同 `vue-router`的 to   | string|object   | — | — |
| replace  | 跳转时是否替换当前 history   | boolean   | — | false |

### Slot

| slot 名称      | 说明    |
|---------- |-------- |
| —  | 自定义显示内容    |
| title  | 自定义 title    |
| icon  | 自定义 icon    |
| link-icon  | 自定义 link-icon   |
