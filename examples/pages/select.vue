<template>
	<div class="select-page">
		<v-select
    title="LIST ONE"
    width="50%"
    defaultValue="0"
    @select="selectFn"
    :selectData="selectData"
    :alwaysShowTitle="false"
    ></v-select>
    <v-select
    title="LIST TWO"
    width="50%"
    ellipsisWidth="65px"
    defaultValue="1"
    @select="selectFn1"
    :selectData="selectData1"
    ></v-select>
	</div>
</template>
<script>
export default {
  data() {
    return {
      selectData: [
        { id: 1, name: "LIST ONE 1" },
        { id: 2, name: "LIST ONE 2" },
        { id: 3, name: "LIST ONE 3" },
        { id: 4, name: "LIST ONE 4" },
        { id: 5, name: "LIST ONE 5" }
      ],
      selectData1: [
        { id: 1, name: "LIST TWO 1" },
        { id: 2, name: "LIST TWO 2" },
        { id: 3, name: "LIST TWO 3" },
        { id: 4, name: "LIST TWO 4" },
        { id: 5, name: "LIST TWO 5" }
      ]
    };
  },
  methods: {
    selectFn(index, id) {
      console.log(index, id);
    },
    selectFn1(index, id) {
      console.log(index, id);
    }
  }
};
</script>
