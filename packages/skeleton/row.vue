<template>
<div>
  <div class="v-placeholder-row" v-for="(row, index) in rows" :key="index" :style="{height: row.height, width: '100%'}">
    <template v-if="row.boxes">
      <div v-for="(item, index) in row.boxes" :key="index" :style="{width: `${item.box||item.width||item}`, height: '100%', float: 'left'}">
        <div class="v-placeholder-box" v-if="item.box" style="height: 100%; background: #fff"></div>
        <sub-row v-if="item.rows" :rows="item.rows"></sub-row>
      </div>
    </template>
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
