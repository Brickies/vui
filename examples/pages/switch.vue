<style scoped>
@import '../assets/docs.css';
.demo-title {
  padding: 20px 15px;
}
.example-block {
  padding: 0;
  /* .datetime-input {
    display: inline;
  }
  .demo-sub-title {
    font-size: 14px;
    padding-left: 20px !important;
  } */
}
</style>

<template>
  <div>
    <h1 class="demo-title">Switch 开关</h1>
    <example-block title="date 日期选择器">
      <v-cell-group>
        <v-cell title="cell 单元格" value="内容"></v-cell>
        <v-cell title="date 日期选择器">
          <v-switch v-model="val1"></v-switch>
        </v-cell>
      </v-cell-group>
    </example-block>
    <ul class='v-list'>
      <li>
        <label>默认switch，值：{{val1}}</label>
        <div></div>
      </li>
      <li>
        <label>设置宽高，默认选中，值：{{val2}}</label>
        <div><v-switch @change="handleChange" v-model="val2" width="50" height="30"></v-switch></div>
      </li>
      <li>
        <label>禁止点击，值：{{val3}}</label>
        <div><v-switch :disabled="true"></v-switch></div>
      </li>
      <li>
        <label>禁止点击，默认选中，值：{{val4}}</label>
        <div><v-switch :disabled="true" v-model="val4"></v-switch></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      val1: false,
      val2: true,
      val3: false,
      val4: true
    }
  },
  methods: {
    handleChange (val, oldVal) {
      console.log(val, oldVal);
    }
  }
}
</script>
