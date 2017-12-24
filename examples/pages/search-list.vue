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
  .gray {
    font-size: 12px;
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
