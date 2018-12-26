<template>
  <div @click.stop="open" class="datetime-input">
    <span v-if='isShowHolder' class="placeholder" :class="{'error':error}">
      {{placeholder}}
    </span>
    <span v-if='!isShowHolder'>
      <span v-if="type === 'custom'" :class="{'placeholder':value==-1, 'error':error }">
        {{showName}}
      </span>
      <span v-if="type !== 'custom'">
        {{value}}
      </span>
    </span>
    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable no-multi-assign */
import Vue from 'vue'
import Utils from 'src/utils/utils'
import Datetime from './datetime'
import Custom from './custom'

export default {
  name: 'v-picker',
  data () {
    return {
      picker: null,
      currentValue: this.value,
      isShowHolder: true,
      showName: ''
    }
  },
  props: {
    default: {
      type: [String, Number]
    },
    title: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator (value) {
        return ['datetime', 'date', 'time', 'custom'].indexOf(value) > -1
      },
      default: 'datetime'
    },
    timeStep: {
      type: Number,
      default: 1
    },
    startYear: {
      validator (val) {
        return /^\d{4}|0$/.test(val)
      },
      default: 0
    },
    endYear: {
      validator (val) {
        return /^\d{4}|0$/.test(val)
      },
      default: 0
    },
    startDate: {
      type: String,
      validator (value) {
        if (!value) return true
        return Utils.isDateTimeString(value)
      }
    },
    endDate: {
      type: String,
      validator (value) {
        if (!value) return true
        return Utils.isDateTimeString(value)
      }
    },
    startHour: {
      validator (val) {
        return /^(0|[1-9]|1[0-9]|2[0-3])?$/.test(val)
      },
      default: 0
    },
    endHour: {
      validator (val) {
        return /^([1-9]|1[0-9]|2[0-3])?$/.test(val)
      },
      default: 23
    },
    startMinute: {
      validator (val) {
        return /^(0|[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])?$/.test(val)
      },
      default: 0
    },
    endMinute: {
      validator (val) {
        return /^([1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])?$/.test(val)
      },
      default: 59
    },
    yearFormat: {
      type: String,
      default: '{value}年'
    },
    monthFormat: {
      type: String,
      default: '{value}月'
    },
    dayFormat: {
      type: String,
      default: '{value}日'
    },
    hourFormat: {
      type: String,
      default: '{value}时'
    },
    minuteFormat: {
      type: String,
      default: '{value}分'
    },
    placeholder: {
      type: String,
      default: '请选择时间'
    },
    error: Boolean,
    value: {
      type: [String, Array, Number]
    },
    selectData: {
      type: Array
    },
    setValueFn: {
      type: Function,
      default: () => {}
    },
    step: {
      type: Number,
      default: 1,
      require: false
    }
  },
  watch: {
    value (val) {
      if (this.currentValue !== val) {
        this.render()
      }
    },
    startDate () {
      this.render()
    },
    endDate () {
      this.render()
    }
  },
  methods: {
    open () {
      if (this.readonly || this.disabled) return
      this.picker.open()
    },
    close () {
      this.picker.close()
    },
    removeElement () {
      if (this.picker && this.picker.$el) document.body.removeChild(this.picker.$el)
    },
    render () {
      this.removeElement()
      const Picker = this.type === 'custom' ? Vue.extend(Custom) : Vue.extend(Datetime)
      const props = this._props
      props.parentEL = this.$el
      this.picker = new Picker({
        el: document.createElement('div'),
        data: props
      })
      document.body.appendChild(this.picker.$el)
      this.picker.$on('pickerConfirm', (value, show, name) => {
        this.showName = name || ''
        this.currentValue = value
        this.isShowHolder = show
        this.$emit('input', value)
      })
    }
  },
  mounted () {
    this.render()
  },
  beforeDestroy () {
    this.removeElement()
  }
}
</script>
