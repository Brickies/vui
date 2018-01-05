## Select 选择器

**当选项过多时，使用下拉菜单展示并选择内容。**

### 基础用法

**只有一个select**

```html
<template>
  <div>
    <v-select
    title="LIST ONE"
    defaultValue="0"
    :selectData="selectData"
    :alwaysShowTitle="false"
    @select="selectFn"
    ></v-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectData: [
        { id: 1, name: "LIST ONE 1" },
        { id: 2, name: "LIST ONE 2" },
        { id: 3, name: "LIST ONE 3" },
        { id: 4, name: "LIST ONE 4" },
        { id: 5, name: "LIST ONE 5" }
      ],
    };
  },
  methods: {
    selectFn(index, id) {
      console.log(index, id);
    }
  }
};
</script>
```

**两个及多个（需设置width属性）**

```html
<template>
  <div>
    <!-- first -->
    <v-select
    title="LIST ONE"
    width="50%"
    defaultValue="0"
    @select="selectFn"
    :selectData="selectData"
    :alwaysShowTitle="false"
    ></v-select>
    <!-- second -->
    <v-select
    title="LIST TWO"
    width="50%"
    ellipsisWidth="65px"
    defaultValue="1"
    @select="selectFn1"
    :selectData="selectData1"
    ></v-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectData: [
        { id: 1, name: "LIST ONE 1" },
        { id: 2, name: "LIST ONE 2" },
        { id: 3, name: "LIST ONE 3" },
        { id: 4, name: "LIST ONE 4" },
        { id: 5, name: "LIST ONE 5" }
      ],
      selectData1: [
        { id: 1, name: "LIST TWO 1" },
        { id: 2, name: "LIST TWO 2" },
        { id: 3, name: "LIST TWO 3" },
        { id: 4, name: "LIST TWO 4" },
        { id: 5, name: "LIST TWO 5" }
      ]
    };
  },
  methods: {
    selectFn(index, id) {
      console.log(index, id);
    },
    selectFn1(index, id) {
      console.log(index, id);
    }
  }
};
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| selectData  | 下拉数据    | array   | — | [] |
| title  | 默认显示的标题    | string   | — | —   |
| alwaysShowTitle  | 是否一直显示默认标题    | boolean   | — | false |
| defaultValue  | 默认选中的值    | number/string   | — | 0 |
| width  | select组件的宽度    | string   | — | 100% |
| ellipsisWidth  | select文字超过多出省略号的宽度    | string   | — | 120px |
| preventScroll  | select下拉菜单出现时，是否禁止页面的scroll    | boolean   | — | true |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| select  | select 选中时的回调函数    | 参数1：索引，参数2：所中项的id值 |
