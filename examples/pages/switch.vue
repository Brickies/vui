<style scoped>
@import '../assets/docs.css';
.demo-title {
  padding: 20px 15px;
}
.example-block {
  padding: 0;
  .v-switch {
    float: right;
  }
}
</style>

<template>
  <div>
    <h1 class="demo-title">Switch 开关</h1>
    <example-block title="date 日期选择器">
      <v-cell-group>
         <v-cell :title="'默认switch，值：' + val1">
          <v-switch v-model="val1"></v-switch>
        </v-cell>
        <v-cell :title="'设置宽高，默认选中，值：' + val2">
          <v-switch v-model="val2"></v-switch>
        </v-cell>
         <v-cell :title="'禁止点击，值：' + val3">
          <v-switch v-model="val3" :disabled="true"></v-switch>
        </v-cell>
         <v-cell :title="'禁止点击，默认选中，值：' + val4">
          <v-switch v-model="val4" :disabled="true"></v-switch>
        </v-cell>
      </v-cell-group>
    </example-block>
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
