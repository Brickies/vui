<template>
  <div>
    <div class="mask-datetime" v-show="show" @click.stop="close"></div>
    <div class="m-datetime" :class="show ? 'datetime-active' : ''">
      <div class="datetime-head">
        <a href="javascript:;" @click.stop="close">取消</a>
        <span class="datetime-title">{{title||''}}</span>
        <a href="javascript:;" @click.stop="setValue">确定</a>
      </div>
      <div class="datetime-content">
        <div class="datetime-item" v-for="(column,index) in columns" :key="index">
          <div class="datetime-item-box" :ref="'Component_' + column">
            <div class="datetime-item-content" :ref="'Content_' + column">
              <span v-for="(item,index) in items[column]" :data-value="item.value" v-html="item.name" :key="index"></span>
            </div>
          </div>
        </div>
        <div class="datetime-mask"></div>
        <div class="datetime-indicator">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroller from 'src/utils/scroller'
import Utils from 'src/utils/utils'

export default {
  data () {
    return {
      selectedIndex: '',
      value: '',
      show: false,
      parentEL: null,
      columns: [],
      scroller: [],
      type: '',
      title: '',
      items: {
        Year: [],
        Month: [],
        Day: [],
        Hour: [],
        Minute: []
      },
      scrolling: {
        Year: false,
        Month: false,
        Day: false,
        Hour: false,
        Minute: false
      },
      readonly: false,
      currentYear: '',
      currentMonth: '',
      currentDay: '',
      currentHour: '',
      currentMinute: '',
      currentValue: '',
      yearFormat: '{value}年',
      monthFormat: '{value}月',
      dayFormat: '{value}日',
      hourFormat: '{value}时',
      minuteFormat: '{value}分',
      startYear: 0,
      endYear: 0,
      startHour: 0,
      endHour: 23,
      startMinute: 0,
      endMinute: 59,
      isShowHolder: false
    }
  },

  watch: {
    currentYear (val) {
      this.setMonths(val)
    },
    currentMonth (val) {
      this.setDays(val)
    },
    currentDay (val) {
      this.setHours(val)
    },
    currentHour (val) {
      this.setMinutes(val)
    }
  },
  methods: {
    init () {
      const _this = this
      let currentValue
      if (isNaN(_this.value)) {
        /* eslint-disable no-multi-assign */
        currentValue = _this.currentValue = _this.value ? _this.value.replace(/-/g, '/') : ''
      } else {
        currentValue = _this.currentValue = (_this.value * 1000)
      }
      if (_this.startDate && new Date(currentValue).getTime() < new Date(_this.startDate).getTime()) {
        currentValue = _this.currentValue = _this.startDate
      }
      if (_this.endDate && new Date(currentValue).getTime() > new Date(_this.endDate).getTime()) {
        currentValue = _this.currentValue = _this.endDate
      }
      if (_this.type !== 'time') {
        const yearItems = _this.items.Year = Utils.getYearItems({
          format: _this.yearFormat,
          startDate: _this.startDate,
          endDate: _this.endDate,
          startYear: _this.startYear,
          endYear: _this.endYear
        })

        const monthItems = Utils.getMonthItems({
          format: _this.monthFormat,
          currentYear: _this.currentYear,
          startDate: _this.startDate,
          endDate: _this.endDate
        })

        const dayItems = Utils.getDateItems({
          format: _this.dayFormat,
          currentYear: _this.currentYear,
          currentMonth: _this.currentMonth,
          startDate: _this.startDate,
          endDate: _this.endDate
        })

        if (currentValue) {
          const currentDate = new Date(currentValue)
          _this.currentYear = currentDate.getFullYear()
          if (!_this.inDatas(yearItems, _this.currentYear)) {
            _this.currentYear = yearItems[0].value
          }
          _this.currentMonth = Utils.mentStr(currentDate.getMonth() + 1)
          if (!_this.inDatas(monthItems, _this.currentMonth)) {
            _this.currentMonth = monthItems[0].value
          }
          _this.currentDay = Utils.mentStr(currentDate.getDate())
          if (!_this.inDatas(dayItems, _this.currentDay)) {
            _this.currentDay = dayItems[0].value
          }
          _this.isShowHolder = false
        } else {
          _this.currentYear = yearItems[0].value
          _this.currentMonth = monthItems[0].value
          _this.currentDay = dayItems[0].value
          _this.isShowHolder = true
        }
      }
      if (_this.type === 'datetime' || _this.type === 'time') {
        const hourItems = Utils.getHourItems({
          format: _this.hourFormat,
          currentYear: _this.currentYear,
          currentMonth: _this.currentMonth,
          currentDay: _this.currentDay,
          startDate: _this.startDate,
          endDate: _this.endDate,
          startHour: _this.startHour,
          endHour: _this.endHour
        })

        const minuteItems = Utils.getMinuteItems({
          startMinute: _this.startMinute,
          endMinute: _this.endMinute,
          timeStep: _this.timeStep,
          format: _this.minuteFormat,
          currentYear: _this.currentYear,
          currentMonth: _this.currentMonth,
          currentDay: _this.currentDay,
          currentHour: _this.currentHour,
          startDate: _this.startDate,
          endDate: _this.endDate
        })

        if (_this.type === 'time') {
          _this.items.Hour = hourItems
        }

        if (currentValue) {
          if (Utils.isDateTimeString(currentValue)) {
            const currentDate = new Date(currentValue)
            _this.currentHour = Utils.mentStr(currentDate.getHours())
            _this.currentMinute = Utils.mentStr(currentDate.getMinutes())
          } else {
            let timeArr
            if (isNaN(currentValue)) {
              timeArr = currentValue.split(':')
            } else {
              let nDate = new Date(currentValue)
              timeArr = [nDate.getHours(), nDate.getMinutes()]
            }
            // const timeArr = currentValue.split(':');
            _this.currentHour = Utils.mentStr(timeArr[0])
            _this.currentMinute = Utils.mentStr(timeArr[1])
          }
          if (!_this.inDatas(hourItems, _this.currentHour)) {
            _this.currentHour = hourItems[0].value
          }
          if (!_this.inDatas(minuteItems, _this.currentMinute)) {
            _this.currentMinute = minuteItems[0].value
          }
          _this.isShowHolder = false
        } else {
          _this.currentHour = hourItems[0].value
          _this.currentMinute = minuteItems[0].value
          _this.isShowHolder = true
        }
      }

      if (_this.type === 'datetime') {
        _this.columns = ['Year', 'Month', 'Day', 'Hour', 'Minute']
      } else if (_this.type === 'date') {
        _this.columns = ['Year', 'Month', 'Day']
      } else if (_this.type === 'time') {
        _this.columns = ['Hour', 'Minute']
      }
    },
    render () {
      const self = this
      self.columns.forEach((item) => {
        const component = self.$refs[`Component_${item}`][0]
        const content = self.$refs[`Content_${item}`][0]
        self.scroller[item] = new Scroller(component, content, {
          itemHeight: 38,
          onSelect (value) {
            self[`current${item}`] = value
            self.scrolling[item] = false
          },
          callback (top, isDragging) {
            if (isDragging) {
              self.scrolling[item] = true
            }
            content.style.webkitTransform = `translate3d(0, ${-top}px, 0)`
          }
        })
        self.scroller[item].setDimensions(component.clientHeight, content.offsetHeight, self.items[item].length)
        self.scroller[item].select(self[`current${item}`], false)
        self.scrolling[item] = false
      })
      self.setValue()
    },
    setMonths (currentYear) {
      const _this = this
      /* eslint-disable object-shorthand */
      /* eslint-disable dot-notation */
      const allMonths = _this.items['Month'] = Utils.getMonthItems({
        format: _this.monthFormat,
        currentYear: currentYear,
        startDate: _this.startDate,
        endDate: _this.endDate
      })

      _this.scrolloToPosition('Month', allMonths, () => {
        _this.setDays(_this.currentMonth)
      })
    },
    setDays (currentMonth) {
      const _this = this
      const allDays = _this.items.Day = Utils.getDateItems({
        format: _this.dayFormat,
        currentYear: _this.currentYear,
        currentMonth: currentMonth,
        startDate: _this.startDate,
        endDate: _this.endDate
      })

      _this.scrolloToPosition('Day', allDays, () => {
        _this.setHours(_this.currentDay)
      })
    },
    setHours (currentDay) {
      const _this = this
      /* eslint-disable object-shorthand */
      const allHour = _this.items.Hour = Utils.getHourItems({
        format: _this.hourFormat,
        currentYear: _this.currentYear,
        currentMonth: _this.currentMonth,
        currentDay: currentDay,
        startDate: _this.startDate,
        endDate: _this.endDate,
        startHour: _this.startHour,
        endHour: _this.endHour
      })

      _this.scrolloToPosition('Hour', allHour, () => {
        _this.setMinutes(_this.currentHour)
      })
    },
    setMinutes (currentHour) {
      const _this = this

      /* eslint-disable object-shorthand */
      const allMinute = _this.items.Minute = Utils.getMinuteItems({
        startMinute: _this.startMinute,
        endMinute: _this.endMinute,
        timeStep: _this.timeStep,
        format: _this.minuteFormat,
        currentYear: _this.currentYear,
        currentMonth: _this.currentMonth,
        currentDay: _this.currentDay,
        currentHour: currentHour,
        startDate: _this.startDate,
        endDate: _this.endDate
      })

      _this.scrolloToPosition('Minute', allMinute)
    },
    scrolloToPosition (type, allDatas, callback) {
      const _this = this

      const scroller = _this.scroller[type]
      if (!scroller) return

      scroller.setDimensions(_this.$refs[`Component_${type}`][0].clientHeight, _this.$refs[`Content_${type}`][0].offsetHeight, allDatas.length)

      setTimeout(() => {
        const indatas = _this.inDatas(allDatas, _this[`current${type}`])
        if (!_this.scrolling[type]) {
          scroller.select(indatas ? _this[`current${type}`] : allDatas[0].value, false)
        }
        typeof callback === 'function' && callback()
      }, 0)
    },
    setValue (e) {
      let value = ''
      if (this.type === 'datetime') {
        value = `${this.currentYear}-${this.currentMonth}-${this.currentDay} ${this.currentHour}:${this.currentMinute}`
      } else if (this.type === 'date') {
        value = `${this.currentYear}-${this.currentMonth}-${this.currentDay}`
      } else {
        value = `${this.currentHour}:${this.currentMinute}`
      }

      this.currentValue = value
      if (e) {
        this.isShowHolder = false
      }
      this.$emit('pickerConfirm', value, this.isShowHolder)
      this.close()
    },
    inDatas (items, key) {
      let b = false
      items.forEach((item) => {
        if (item.value === key) b = true
      })
      return b
    },
    open () {
      if (this.readonly) return
      this.show = true
    },
    close () {
      this.show = false
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.scrollView = ''

    this.$nextTick(this.render)
  },
  beforeDestroy () {
    this.columns.forEach((item) => {
      this.scroller[item] = null
    })
  }
}
</script>
