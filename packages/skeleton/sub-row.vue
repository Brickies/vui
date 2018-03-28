<template>
<div>
  <div class="v-placeholder-row" v-for="row in rows" :style="{height: row.height, width: '100%'}">
    <div v-if="row.boxes" v-for="item in row.boxes" :style="{width: `${item.box||item.width||item}`, height: '100%', float: 'left'}">
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
