## Scroller 下拉刷新上拉加载

**经常用来做手机端的分页功能，下拉刷新，上拉加载**

### 基本用法

```html
<template>
  <div class="scroller-page">
    <v-scroller
      :on-refresh="refresh"
      :on-infinite="infinite"
    >
      <ul>
        <li v-for="(list, index) in lists" :key="index">{{list}}</li>
      </ul>
    </v-scroller>
  </div>
</template>
<script>
export default {
  data () {
    return {
      len: 6,
    }
  },
  computed: {
    lists () {
      let arr = []
      for (let i = 1; i < this.len + 1; i++) {
        arr.push('列表' + i)
      }
      return arr
    }
  },
  methods: {
    // 下拉刷新
    refresh (done) {
      setTimeout(() => {
        this.len = 6
        done()
      }, 1000)
    },
    // 上拉加载
    infinite (done) {
      setTimeout(() => {
        if (this.len >= 7) {
          done(true)
          return
        }
        this.len++
        done()
      }, 1000)
    }
  }
}
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| onRefresh  | 下拉回调    | function   | — | — |
| onInfinite  | 上拉回调    | function   | — | — |
| width  | scroller宽度    | string   | — | 100% |
| height  | scroller高度    | string   | — | 100% |
| isLoadMore  | 是否展示上拉加载  |  boolean  | — | true   |
| refreshText  | 下拉文本内容  |  string  | — | 下拉刷新   |
| noDataText  | 无数据文本    | string   | — | 没有更多数据啦~   |
| refreshLayerColor  | 下拉文本颜色    | string   | — | #AAA |
| loadingLayerColor  | 上拉文本颜色     | string   | — | #AAA |
| animating  | 是否有动画    | boolean   | — | true |
| animationDuration  | 动画间隔    | number   | — | 250 |
| bouncing  | 是否有反弹效果    | string   | — | true |
| cssClass  | content css class    | string   | — | —   |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onRefresh  | 下拉回调    | 里面有个done callback用于结束loading效果 |
| onInfinite  | 上拉回调    | 里面有个done callback用于结束loading效果 |
