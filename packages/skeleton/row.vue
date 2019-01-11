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
      <sub-row :rows="item.rows" />
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
