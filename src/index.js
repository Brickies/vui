import { version } from '../package.json'
import Switch from '../packages/switch/index.js';
import Select from '../packages/select/index.js';
import Search from '../packages/search/index.js';
import SearchList from '../packages/search-list/index.js';
import Swipe from '../packages/swipe/index.js';
import SwipeItem from '../packages/swipe-item/index.js';
import Swiper from '../packages/swiper/index.js';
import Scroller from '../packages/scroller/index.js';
import Dialog from '../packages/dialog/src/dialog.vue';
import Picker from '../packages/picker/index.js';
import ContentPlaceholder from '../packages/content-placeholder/index.js';
import $Toast from '../packages/toast/index.js';
import $Dialog from '../packages/dialog/index.js';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Switch.name, Switch);
  Vue.component(Select.name, Select);
  Vue.component(Search.name, Search);
  Vue.component(SearchList.name, SearchList);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Swiper.name, Swiper);
  Vue.component(Scroller.name, Scroller);
  Vue.component(Dialog.name, Dialog);
  Vue.component(Picker.name, Picker);
  Vue.component(ContentPlaceholder.name, ContentPlaceholder);

  Vue.prototype.$toast = $Toast;
  Vue.prototype.$dialog = $Dialog;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  version,
  Switch,
  Select,
  Search,
  SearchList,
  Swipe,
  SwipeItem,
  Swiper,
  Scroller,
  Dialog,
  Picker,
  ContentPlaceholder,
  $Toast,
  $Dialog
};
