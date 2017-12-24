## Swiper 轮播

**目前这里默认为swiper轮播图，如果你有特殊需要，也可以使用swipe和swipe-item组合出自己的swiper**

### 基本用法

```html
<template>
  <div class="swiper-page">
    <p>正常swiper</p>
    <v-swiper :items='items' :styles="{height: '200px'}" @change="changeHandle"></v-swiper>
    <p>缩略swiper</p>
    <v-swiper type='thum' :items='items' :styles="{height: '240px'}"></v-swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        require('../assets/beauty_1.png'),
        require('../assets/beauty_2.png'),
        require('../assets/beauty_3.png'),
        require('../assets/beauty_4.png'),
        require('../assets/beauty_5.png')
      ],
    }
  },
  methods: {
    changeHandle (index) {
      console.log(index);
    }
  }
}
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | swiper类型    | string   | swiper(正常)/thum(缩略) | swiper |
| auto  | 自动播放时长    | number   | — | 5000 |
| items  | swiper展示的列表    | array   | — | [] |
| showIndicators  | 是否展示swiper小圆点    | boolean   | — | true |
| styles  | swiper样式控制  |  object  | — | {}   |
| resetTitle  | 重置title内容  |  string  | — | —   |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | swiper滑动回调    | 当前swiper item索引 |
