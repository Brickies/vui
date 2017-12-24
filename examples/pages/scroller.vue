<style scoped>
.scroller-page {
  height: 100%;
}
ul {
  padding: 20px 0
}
li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  text-align: center;
}
</style>
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
