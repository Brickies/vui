<style >
.demo-cell {
  .example-block {
    padding: 0;
    .datetime-input {
      display: inline;
    }
    .demo-sub-title {
      font-size: 14px;
      padding-left: 20px !important;
    }
  }
  > h2 {
    margin: 20px 20px -20px;
    font-size: 24px;
    font-weight: 400;
  }
}
</style>

<template>
  <section class="demo-cell">
    <h2>Cell</h2>
    <example-block title="基本用法">
      <v-cell-group>
        <v-cell title="cell 单元格" value="内容"></v-cell>
        <v-cell title="cell 单元格" label="这是描述" value="内容"></v-cell>
      </v-cell-group>
    </example-block>
    <example-block title="只设置value">
      <v-cell-group>
        <v-cell value="只有内容"></v-cell>
      </v-cell-group>
    </example-block>
    <example-block title="展示 icon">
      <v-cell-group>
        <v-cell title="cell 单元格" icon="address"></v-cell>
        <v-cell title="cell 单元格" value="内容" icon="address"></v-cell>
      </v-cell-group>
    </example-block>
    <example-block title="展示箭头">
      <v-cell-group>
        <v-cell title="cell 单元格" is-link></v-cell>
        <v-cell title="cell 单元格" value="内容" is-link></v-cell>
        <v-cell title="cell 单元格" value="跳转到首页" is-link to="/"></v-cell>
      </v-cell-group>
    </example-block>
    <example-block title="更多用法">
      <v-cell-group>
        <v-cell title="cell 单元格" value="自定义 icon" is-link link-icon="search"></v-cell>
        <v-cell title="cell 单元格" is-link>
          <v-picker v-model="gender.value" placeholder="请选择性别" :default="gender.default" title="选择性别" type="custom"></v-picker>
        </v-cell>
      </v-cell-group>
    </example-block>
  </section>
</template>

<script>
export default {
  data () {
    return {
      gender: {
        default: -1,
        value: [
          { name: '保密', value: 0 },
          { name: '男', value: 1 },
          { name: '女', value: 2 }
        ]
      }
    }
  }
}
</script>
