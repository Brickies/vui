<template>
<div>
  <div class="v-placeholder-row" v-for="(row, i) in rows" :style="{height: row.height, width: '100%'}" :key="i">
    <div v-if="row.boxes" v-for="(item, k) in row.boxes" :style="{width: `${item.box||item.width||item}`, height: '100%', float: 'left'}" :key="k">
      <div class="v-placeholder-box" v-if="item.box" style="height: 100%; background: #fff"></div>
      <sub-row v-if="item.rows" :rows="item.rows"></sub-row>
    </div>
  </div>
</div>
</template>

<script>
import SubRow from './sub-row'

export default {
  name: 'row',
  components: {
    SubRow
  },
  props: {
    rows: {
      type: Array,
      default: () => []
    }
  }
}
</script>
