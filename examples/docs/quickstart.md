## Vui

一套基于 `Vue 2.0` 的移动端 `UI` 组件。

### 安装

```shell
npm i x-vui -S
```

### 引入组件

#### 完整引入

```javascript
import Vue from 'vue'
import vui from 'x-vui'
import 'x-vui/lib/vui-css/index.css';

Vue.use(vui)
```

#### 部分引入

```javascript
import Vue from 'vue'
import {
  Scroller,
  Select
  // ...
} from 'x-vui'
import 'x-vui/lib/vui-css/scroller.css';
import 'x-vui/lib/vui-css/select.css';

Vue.component(Scroller.name, Scroller)
Vue.component(Select.name, Select)
```

#### 引入插件

**注：完整引入了vui，则无需再注册插件**

```javascript
import Vue from 'vue';
import { 
  $Toast, 
  $Dialog 
  // ...
} from 'x-vui';

Vue.prototype.$toast = $Toast
Vue.prototype.$dialog = $Dialog
```
