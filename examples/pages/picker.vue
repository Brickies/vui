<style>
@import '../assets/docs.css';
.picker-page {
  .demo-title {
    padding: 20px 15px 0;
  }
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
	<div class="picker-page">
    <h1 class="demo-title">Picker 选择器</h1>
    <example-block title="date 日期选择器">
      <v-cell-group>
        <v-cell title="date 日期选择器" is-link>
          <v-picker title="选择日期" startYear="2016" startDate="2015-01-01" endDate="2019-12-01"  placeholder="请选择日期" v-model="now_date" type="date"></v-picker>
        </v-cell>
      </v-cell-group>
    </example-block>
    <example-block title="time 时间选择器">
      <v-cell-group>
        <v-cell title="time 时间选择器" is-link>
					<v-picker title="选择时间" placeholder="请选择时间" startMinute="2" endMinute="30" v-model="now_time" type="time"></v-picker>
        </v-cell>
      </v-cell-group>
    </example-block>
    <example-block title="datetime 日期与时间选择器">
      <v-cell-group>
        <v-cell title="datetime 日期与时间选择器" is-link>
          <v-picker title="选择日期与时间" placeholder="请选择日期与时间" v-model="now_datetime" :timeStep="20" type="datetime"></v-picker>
        </v-cell>
      </v-cell-group>
    </example-block>
    <example-block title="custom 普通选择器">
      <v-cell-group>
        <v-cell title="custom 普通选择器" is-link>
          <v-picker v-model="gender.value" placeholder="请选择性别" :default="gender.default" title="选择性别" type="custom"></v-picker>
        </v-cell>
      </v-cell-group>
    </example-block>
  </div>
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
      },
      now_date: null,
      now_time: null,
      now_datetime: null // new Date().getTime()/1000
    }
  }
}
</script>
