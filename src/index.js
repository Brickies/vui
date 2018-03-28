import { version } from '../package.json'
import Button from '../packages/button'
import Cell from '../packages/cell'
import CellGroup from '../packages/cell-group'
import Icon from '../packages/icon'
import Dialog from '../packages/dialog'
import Picker from '../packages/picker'
import Scroller from '../packages/scroller'
import Search from '../packages/search'
import SearchList from '../packages/search-list'
import Select from '../packages/select'
import Swipe from '../packages/swiper/swipe'
import SwipeItem from '../packages/swiper/swipe-item'
import Swiper from '../packages/swiper'
import Switch from '../packages/switch'
import Skeleton from '../packages/skeleton'
import $Dialog from '../packages/dialog/dialog.js'
import $Toast from '../packages/toast/toast.js'

const install = function (Vue) {
  if (install.installed) return

  Vue.component(Button.name, Button)
  Vue.component(Cell.name, Cell)
  Vue.component(CellGroup.name, CellGroup)
  Vue.component(Icon.name, Icon)
  Vue.component(Dialog.name, Dialog)
  Vue.component(Picker.name, Picker)
  Vue.component(Scroller.name, Scroller)
  Vue.component(Search.name, Search)
  Vue.component(SearchList.name, SearchList)
  Vue.component(Select.name, Select)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Swiper.name, Swiper)
  Vue.component(Switch.name, Switch)
  Vue.component(Skeleton.name, Skeleton)

  Vue.prototype.$dialog = $Dialog
  Vue.prototype.$toast = $Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  Button,
  Cell,
  CellGroup,
  Icon,
  Dialog,
  Picker,
  Scroller,
  Search,
  SearchList,
  Select,
  Switch,
  Skeleton,
  $Dialog,
  $Toast
}
