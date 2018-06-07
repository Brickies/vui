
<style scoped>
h2 {
  margin: 20px 20px -20px;
  font-size: 24px;
}
.demo-radio .v-radio {
  margin-bottom: 10px;
}
.cell-example-block {
  padding: 0;
}
.cell-example-block .demo-sub-title {
  padding: 30px 20px 10px;
}
</style>
<template>
  <section class="demo-radio">
    <h2>Radio</h2>
    <example-block title="基础用法">
      <v-radio-group v-model="radio">
        <v-radio name="1">单选框 1</v-radio>
        <v-radio name="2">单选框 2</v-radio>
      </v-radio-group>
    </example-block>
    <example-block title="禁用状态">
      <v-radio-group v-model="radio1" disabled>
        <v-radio name="1">单选框 1</v-radio>
        <v-radio name="2">单选框 2</v-radio>
      </v-radio-group>
    </example-block>
    <example-block title="配合 cell 使用" class="cell-example-block">
      <v-radio-group v-model="radio2">
        <v-cell-group>
          <v-cell title="单选框 1" clickable @click="radio2 = '1'"><v-radio name="1" /></v-cell>
          <v-cell title="单选框 2" clickable @click="radio2 = '2'"><v-radio name="2" /></v-cell>
        </v-cell-group>
      </v-radio-group>
    </example-block>
  </section>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      radio1: '1',
      radio2: '1'
    }
  },
  watch: {
    radio (val) {
      console.log(val)
    }
  },
  methods: {
    handleChange (val) {
      console.log('currentVal', val)
    }
  }
}
</script>
