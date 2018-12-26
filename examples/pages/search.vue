<style lang="postcss" scoped>
.search-page {
  padding: 0 10px;
  margin-top: 10px;

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
    .price {
      color: #ff6f5c;
    }
    .gray {
      font-size: 12px;
    }
  }
}
</style>
<template>
  <div class="search-page">
    <v-search
      placeholder="请输入搜索关键字"
      :autofocus="true"
      :async="false"
      @search="searchFn"
      @enter="searchEnter"
      @close="closeFn">
      <v-search-list :result="filterResult" @listSearch="listSearch" v-show="visible">
        <div class="search-result" slot="list-item" slot-scope="props">
          <p class="l" v-html="props.slotValue.name"></p>
          <p class="gray" v-show="props.slotValue.price">￥{{props.slotValue.price}}/斤</p>
          <div class="gray r" v-show="props.slotValue.amount">剩余{{props.slotValue.amount}}斤</div>
        </div>
      </v-search-list>
    </v-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      visible: false,
      defaultResult: [
        { name: 'Apple', price: 5, amount: 20 },
        { name: 'Banana', price: 5, amount: 30 },
        { name: 'Orange', price: 3, amount: 10 },
        { name: 'Durian', price: 10, amount: 25 },
        { name: 'Lemon', price: 4, amount: 30 },
        { name: 'Peach', price: 5, amount: 40 },
        { name: 'Cherry', price: 20, amount: 50 },
        { name: 'Berry', price: 15, amount: 60 },
        { name: 'Core', price: 10, amount: 21 },
        { name: 'Fig', price: 10, amount: 22 },
        { name: 'Haw', price: 10, amount: 23 },
        { name: 'Melon', price: 10, amount: 24 },
        { name: 'Plum', price: 10, amount: 25 },
        { name: 'Pear', price: 10, amount: 26 },
        { name: 'Peanut', price: 10, amount: 27 },
        { name: 'Other' }
      ]
    }
  },
  watch: {
    keyword (val) {
      if (!val) {
        this.visible = false
      }
    }
  },
  methods: {
    searchFn (query) {
      this.keyword = query
      this.visible = true
      console.log('search', query)
    },
    searchEnter (query) {
      this.keyword = query
      console.log('enter', query)
    },
    closeFn (query) {
      this.keyword = query
      console.log('close', query)
    },
    listSearch (index) {
      this.visible = false
      console.log(index, this.defaultResult[index].name)
    }
  },
  computed: {
    filterResult () {
      // i 忽略大小写
      let result = this.defaultResult.filter(item => new RegExp(this.keyword, 'i').test(item.name))
      // 关键字高亮匹配
      let copy = JSON.parse(JSON.stringify(result))
      copy.forEach((item, index) => {
        let name = item.name; let word = this.keyword
        name = name.toLowerCase()
        word = word.toLowerCase()

        if (word && name.indexOf(word) !== -1) {
          let arr = item.name.split('')
          let i = name.indexOf(word)
          let len = word.length
          let active = '<span class="price">' + arr.splice(i, len).join('') + '</span>'
          arr.splice(i, 0, active)
          item.name = arr.join('')
        }
      })
      return copy
    }
  }
}
</script>
