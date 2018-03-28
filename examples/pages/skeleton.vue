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
