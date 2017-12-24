## Search 搜索框

**常用于手机端搜索关键字，有时候还会进行高亮匹配**

### 基本用法

**1、只有搜索框**
```html
<template>
  <v-search
    placeholder="请输入搜索关键字"
    @search="searchFn"
    @enter="searchEnter"
  ></v-search>
</template>
<script>
export default {
  methods: {
    searchFn (query) {
      console.log('search', query)
    },
    searchEnter (query) {
      console.log('enter', query)
    }
  }
}
</script>
```

**2、搭配 SearchList 搜索结果列表**

```html
<template>
  <v-search
    placeholder="请输入搜索关键字"
    :async="false"
    @search="searchFn"
  >
    <v-search-list :result="filterResult" @listSearch="listSearch" v-show="visible"></v-search-list>
  </v-search>
</template>
<script>
export default {
  data () {
    return {
      keyword: '',
      visible: false, // 点击列表，列表是否消失
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  watch: {
    keyword (val) {
      if (!val) {
        this.visible = false;
      }
    }
  },
  methods: {
    searchFn (query) {
      this.keyword = query;
      this.visible = true;
    }
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(item => new RegExp(this.keyword, 'i').test(item));
    }
  }
}
</script>
```

### 高阶用法

**3、定制化结果列表，关键字高亮匹配**

```html
<template>
  <v-search
    placeholder="请输入搜索关键字"
    :async="false"
    @search="searchFn"
  >
    <v-search-list :result="filterResult" @listSearch="listSearch" v-show="visible">
      <div class="search-result" slot="list-item" slot-scope="props">
        <p class="l" v-html="props.slotValue.name"></p>
        <p class="gray" v-show="props.slotValue.price">￥{{props.slotValue.price}}/斤</p>
        <div class="gray r" v-show="props.slotValue.amount">剩余{{props.slotValue.amount}}斤</div>
      </div>
    </v-search-list>
  </v-search>
</template>
<script>
export default {
  data () {
    return {
      keyword: '',
      visible: false,
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
      ],
      // 防止defaultResult值被污染
      copy: []
    }
  },
  watch: {
    keyword (val) {
      if (!val) {
        this.visible = false;
      }
    }
  },
  methods: {
    searchFn (query) {
      this.keyword = query;
      this.visible = true;
    },
    listSearch (index) {
      this.visible = false;
      console.log(index, this.defaultResult[index].name)
    }
  },
  computed: {
    filterResult() {
      // i 忽略大小写
      let result = this.defaultResult.filter(item => new RegExp(this.keyword, 'i').test(item.name));
      // 关键字高亮匹配
      this.copy = JSON.parse(JSON.stringify(result))
      this.copy.forEach((item, index) => {
        let name = item.name, word = this.keyword;
        name = name.toLowerCase();
        word = word.toLowerCase();

        if (word && name.indexOf(word) !== -1) {
          let arr    = item.name.split('')
          let i      = name.indexOf(word);
          let len    = word.length;
          let active = '<span class="price">' + arr.splice(i, len).join('') + '</span>';
          arr.splice(i, 0, active);
          item.name  = arr.join('');
        }
      })
      return this.copy;
    }
  }
}
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| async  | 是否进行节流    | boolean   | — | true |
| timeout  | 搜索节流时长    | number   | — | 100 |
| styles  | search样式  |  object  | — | —   |
| placeholder  | placeholder  |  string  | — | '搜索'   |
| autofocus  | 是否自动聚焦(iOS端autofocus无效)    | boolean   | — | —   |
| clear  | 进行搜索是否清空search框内容    | boolean   | — | false   |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| search  | search搜索回调    | 搜索文本 |
| enter  | enter时搜索回调    | 搜索文本 |
| close  | 点击搜索关闭按钮回调    | '' |
