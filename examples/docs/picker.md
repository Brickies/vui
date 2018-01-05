## Picker 选择器

**包含常用的 4 种选择器，时间，日期，时间与日期，以及普通选择器**

### 基本用法

**1、时间类型选择器（切换 type 即可）**

```html
<template>
  <v-picker 
    title="选择日期"
    placeholder="请选择日期" 
    v-model="now_date" 
    type="date"
  ></v-picker>
</template>
<script>
export default {
  data() {
    return {
      now_date: null // new Date().getTime()/1000
    };
  }
};
</script>
```

**2、custom 普通选择器**

```html
<template>
  <v-picker 
    v-model="gender.value" 
    placeholder="请选择性别" 
    :default="gender.default" 
    title="选择性别" 
    type="custom"
  ></v-picker>
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
      }
    };
  }
};
</script>
```

### 高阶用法

**使用 timeStep 进行分钟的粒度选择**

```html
<template>
  <v-picker 
    title="选择日期"
    placeholder="请选择日期" 
    v-model="now_date" 
    type="date"
    :timeStep="20"
  ></v-picker>
</template>
<script>
export default {
  data() {
    return {
      now_date: null // new Date().getTime()/1000
    };
  }
};
</script>
```
**使用 startYear，endYear，startDate，endDate，startMinute，endMinute 进行时间的范围选择。（更多的可看实际情况进行搭配）**

```html
<template>
  <v-picker 
    title="选择日期"
    placeholder="请选择日期" 
    v-model="now_date" 
    type="date"
    startMinute="2" endMinute="30"
  ></v-picker>
</template>
<script>
export default {
  data() {
    return {
      now_date: null // new Date().getTime()/1000
    };
  }
};
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| default  | picker默认选中的值    | string/number   | — | — |
| type  | picker类型    | string   | date/time/datetime/custom | datetime |
| title  | 选择器弹窗标题    | string   | — | —   |
| placeholder  | placeholder    | string   | — | 请选择时间   |
| timeStep  | 时间选择粒度(有分钟的选择器)   | number   | — | 1 |
| startYear  | 起始年份    | number/string   | — | 今年 |
| endYear  | 结束年份    | number/string   | — | 10年的范围 |
| startDate  | 起始日期    | string   | — | — |
| endDate  | 结束日期    | string   | — | — |
| startHour  | 起始时间    | number/string   | — | 0 |
| endHour  | 结束时间    | number/string   | — | 23 |
| startMinute  | 起始分钟    | number/string   | — | 0 |
| endMinute  | 结束分钟    | number/string   | — | 59 |
| yearFormat  | “年“的格式化    | string   | — | {value}年 |
| monthFormat  | “月“的格式化    | string   | — | {value}月 |
| dayFormat  | “日“的格式化    | string   | — | {value}日 |
| hourFormat  | “时“的格式化    | string   | — | {value}时 |
| minuteFormat  | “分“的格式化    | string   | — | {value}分 |
