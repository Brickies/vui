<style>
@import '../assets/docs.css';
.picker-page .demo-title {
  padding: 20px 15px;
}
</style>
<template>
	<div class="picker-page">
    <h1 class="demo-title">Picker 选择器</h1>
		<ul class='v-list'>
      <li>
        <label>date 日期选择器</label>
        <div class="v-list-arrow">
          <v-picker title="选择日期" startYear="2016" startDate="2015-01-01" endDate="2019-12-01"  placeholder="请选择日期" v-model="now_date" type="date"></v-picker>
        </div>
      </li>
      <li>
        <label>time 时间选择器</label>
        <div class="v-list-arrow">
					<v-picker title="选择时间" placeholder="请选择时间" startMinute="2" endMinute="30" v-model="now_time" type="time"></v-picker>
        </div>
      </li>
      <li>
        <label>datetime 日期与时间选择器</label>
        <div class="v-list-arrow">
					<v-picker title="选择日期与时间" placeholder="请选择日期与时间" v-model="now_datetime" :timeStep="20" type="datetime"></v-picker>
        </div>
      </li>
      <li>
        <label>custom 普通选择器</label>
        <div class="v-list-arrow">
					<v-picker v-model="gender.value" placeholder="请选择性别" :default="gender.default" title="选择性别" type="custom"></v-picker>
        </div>
      </li>
    </ul>
	</div>
</template>
<script>
export default {
  data() {
    return {
      gender: {
        default: -1,
        value: [
          { name: "保密", value: 0 },
          { name: "男", value: 1 },
          { name: "女", value: 2 }
        ]
      },
      now_date: null,
      now_time: null,
      now_datetime: null // new Date().getTime()/1000
    };
  }
};
</script>
