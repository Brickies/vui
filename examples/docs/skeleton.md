## Skeleton 占位

**一般用来做整个页面的占位。防止页面加载时间太长，给人一种想关页面的冲动**

## 基本用法

### 整个页面进行占位

```html
<style scoped>
.demo-skeleton {
  padding: 0 10px;
  font-size: 14px;
}
.title {
  margin: 15px 0;
  overflow: hidden;
  > p {
    font-size: 12px;
  }
  > p.l {
    font-size: 18px;
    font-weight: 500;
  }
  > p.r {
    color: #999
  }
}
.card {
  width: 100%;
  height: 100px;
  margin: 15px 0;
  .l {
    width: 160px;
    height: 100px;
    img {
      height: 100%;
    }
    &:last-child {
      margin-left: 20px;
      > p {
        margin-top: 10px
      }
    }
  }
}
.l { float: left; }
.r { float: right; }
</style>

<template>
  <div class="demo-skeleton">
    <v-swiper :items='items' :styles="{height: '208px'}"></v-swiper>
    <div class="title">
      <p class="l">内容占位</p>
      <p class="r">查看更多 ></p>
    </div>
    <p>我是文字描述~~~我是文字描述~~~我是文字描述~~~</p>
    <div class="card">
      <div class="l"><img :src="items[4]" alt=""></div>
      <div class="l">
        <p>我是图片描述1~~~</p>
        <p>我是图片描述2~~~</p>
        <p>我是图片描述3~~~</p>
      </div>
    </div>
    <v-swiper :items='items' type="thum" defaultIndex="1" :styles="{height: '208px'}"></v-swiper>
    <v-skeleton :rows="rows" :show="showPlaceholder"></v-skeleton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rows: [
        {
          height: '208px'
        },
        {
          height: '15px',
          boxes: [{box: '100%'}]
        },
        {
          height: '30px',
          boxes: [{width: '55%'}, {box: '25%'}, '20%']
        },
        {
          height: '15px',
          boxes: [{box: '100%'}]
        },
        {
          height: '15px',
          boxes: ['100%']
        },
        {
          height: '15px',
          boxes: [{box: '100%'}]
        },
        {
          height: '100px',
          boxes: ['160px', {box: '10%'}, {width: 'calc(90% - 160px)', rows: [
            {
              height: '10px',
              boxes: [{box: '100%'}]
            },
            {
              height: '20px'
            },
            {
              height: '10px',
              boxes: [{box: '100%'}]
            },
            {
              height: '20px'
            },
            {
              height: '10px',
              boxes: [{box: '100%'}]
            },
            {
              height: '20px'
            },
            {
              height: '10px',
              boxes: [{box: '100%'}]
            }
          ]}]
        },
        {
          height: '15px',
          boxes: [{box: '100%'}]
        },
        {
          height: '208px'
        }
      ],
      items: [
        require('../assets/beauty_1.png'),
        require('../assets/beauty_2.png'),
        require('../assets/beauty_3.png'),
        require('../assets/beauty_4.png'),
        require('../assets/beauty_5.png')
      ],
      showPlaceholder: true
    }
  },
  created () {
    setTimeout(() => {
      this.showPlaceholder = false
    }, 2000)
  }
}
</script>
```

### 使用 v-placeholder 指令进行占位

**这里目前有个限制，就是得提前用css设置好需占位元素的宽高，占位符宽高默认为 100% 继承父元素**

```html
<template>
  <div class="demo-skeleton">
    <h2 v-placeholder="{ data: title, config }"></h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      config: {
        width: '200px',
        height: '30px',
        background: '#ddd'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.title = 'hello placeholder'
    }, 1500)
  }
}
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| rows  | 占位组件内容配置    | array   | — | — |
| show  | 占位组件是否显示  |  boolean  | — | false   |
| size  | 占位组件背景size  |  string  | — | 250%   |
| padding  | 占位组件padding    | function   | — | 5px 15px   |

### directive

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data  | 占位组件内容    | string   | — | — |
| config  | 占位组件内容样式  |  object  | — | {width: '100%', height: '100%', background: '#eee', transition: 'all .3s'}   |

### Config

**配置效果从左至右分别进行配置**

| 参数名称      | 说明    | 显示效果描述      |
|---------- |-------- |---------- |
| height  | 高度    | 灰色背景高度 |
| boxes  | 当前内容详细配置项    | 本身为数组，里面带box选项的则为白色背景，否则为灰色背景 |
| box  | 白色背景宽度 (string)    | 白色背景宽度设置，例如，box设为55%，则当前row，白色宽度占比55% |
| width  | 白色背景宽度    | 白色背景宽度，也可以不写width选项，可直接用string代替 |
| rows  | 再一轮配置（该组件为递归组件，你可以根据需要深层次进行配置）    | 背景再一轮配置 |
