<template>
<div>
  <div class="v-placeholder-row" v-for="(row, i) in rows" :style="{height: row.height, width: '100%'}" :key="i">
    <div v-if="row.boxes" v-for="(item, k) in row.boxes" :style="{width: `${item.box||item.width||item}`, height: '100%', float: 'left'}" :key="k">
      <div class="v-placeholder-box" v-if="item.box" style="height: 100%; background: #fff"></div>
      <row v-if="item.rows" :rows="item.rows"></row>
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
