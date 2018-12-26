<template>
<div>
  <div class="v-placeholder-row" v-for="(row, index) in rows" :key="index" :style="{height: row.height, width: '100%'}">
    <template v-if="row.boxes">
      <div  v-for="(item, index) in row.boxes" :key="index" :style="{width: `${item.box||item.width||item}`, height: '100%', float: 'left'}">
        <div class="v-placeholder-box" v-if="item.box" style="height: 100%; background: #fff"></div>
        <row v-if="item.rows" :rows="item.rows"></row>
      </div>
    </template>
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
