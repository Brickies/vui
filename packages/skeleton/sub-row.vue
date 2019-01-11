<template>
<div>
  <div
    class="v-placeholder-row"
    v-for="(row, index) in rows"
    :key="index"
    :style="{
      height: row.height,
      width: '100%'
    }">
    <div
      v-if="row.boxes"
      v-for="(item, k) in row.boxes"
      :key="k"
      :style="{
        width: `${item.box || item.width || item}`,
        height: '100%',
        float: 'left'
      }">
      <div class="v-placeholder-box" v-if="item.box" style="height: 100%; background: #fff"></div>
      <row v-if="item.rows" :rows="item.rows"/>
    </div>
  </div>
</div>
</template>

<script>
import Row from './row'

export default {
  name: 'sub-row',
  components: {
    Row
  },
  props: {
    rows: {
      type: Array,
      default: () => []
    }
  }
}
</script>
