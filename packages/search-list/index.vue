<template>
	<ul class="v-search-list" :style="{top: ~~top+'px'}">
    <li v-for="(item, index) in result" :key="index" @click="listSearch(index)">
  		<slot name="list-item" :slotValue="item">{{item}}</slot>
	  </li>
  </ul>
</template>

<script>
import Emitter from 'src/mixins/emitter.js';
export default {
	name: 'v-search-list',
  mixins: [Emitter],
	props: {
    result: Array,
    top: {
      type: [Number, String],
      default: 30
    }
	},
	data () {
		return {
      visible: false
		}
	},
	methods: {
		listSearch (index) {
			this.visible = false
			this.dispatch('v-search', 'clear');
			this.$emit('listSearch', index)
		}
	}
}
</script>
