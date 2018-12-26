<style scoped>
.swiper-page {
  height: auto;
  text-align: center;
  p {
    margin: 10px 0;
  }
}
</style>
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
      ]
    }
  },
  methods: {
    changeHandle (index) {
      console.log(index)
    }
  }
}
</script>
