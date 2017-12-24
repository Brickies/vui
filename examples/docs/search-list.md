## SearchList 搜索列表

**一般情况下都是配合search组件，进行搜索结果的展示**

### 基本用法

```html
<template>
  <v-search-list :result="result"></v-search-list>
</template>
<script>
export default {
  data () {
    return {
      result: [1, 2, 3]
    }
  }
}
</script>
```

### 高阶用法

```html
<style>
.search-result {
  position: relative;
  overflow: hidden;
  .l {
    width: 100%;
    margin-bottom: 5px;
  }
  .r {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -10px;
    line-height: 20px;
  }
}
</style>
<template>
  <v-search-list :result="defaultResult" top="0">
    <div class="search-result" slot="list-item" slot-scope="props">
      <p class="l" v-html="props.slotValue.name"></p>
      <p class="gray" v-show="props.slotValue.price">￥{{props.slotValue.price}}/斤</p>
      <div class="gray r" v-show="props.slotValue.amount">剩余{{props.slotValue.amount}}斤</div>
    </div>
  </v-search-list>
</template>
<script>
export default {
  data () {
    return {
      defaultResult: [
        {name: 'Apple', price: 5, amount: 20},
        {name: 'Banana', price: 5, amount: 30},
        {name: 'Orange', price: 3, amount: 10},
        {name: 'Durian', price: 10, amount: 25},
        {name: 'Lemon', price: 4, amount: 30},
        {name: 'Peach', price: 5, amount: 40},
        {name: 'Cherry', price: 20, amount: 50},
        {name: 'Berry', price: 15, amount: 60},
        {name: 'Core', price: 10, amount: 21},
        {name: 'Fig', price: 10, amount: 22},
        {name: 'Haw', price: 10, amount: 23},
        {name: 'Melon', price: 10, amount: 24},
        {name: 'Plum', price: 10, amount: 25},
        {name: 'Pear', price: 10, amount: 26},
        {name: 'Peanut', price: 10, amount: 27},
        {name: 'Other'}
      ]
    }
  }
}
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| result  | 结果列表    | array   | — | [] |

### slotScope

| 名称      | 说明    |
|---------- |-------- |
| list-item  | slot name    |
| slotValue  | slot value    |
