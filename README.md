# [vui](https://brickies.github.io/vui/)

[![Version](https://img.shields.io/npm/v/x-vui.svg)](https://www.npmjs.com/package/x-vui) [![Downloads](http://img.shields.io/npm/dm/x-vui.svg)](https://www.npmjs.com/package/x-vui) [![License](https://img.shields.io/npm/l/x-vui.svg?style=flat)](https://opensource.org/licenses/MIT) [![TravisCI](https://travis-ci.org/XadillaX/x-vui.svg)](https://travis-ci.org/XadillaX/x-vui)
<!-- [![Dependency](https://david-dm.org/XadillaX/x-vui.svg)](https://david-dm.org/XadillaX/x-vui) -->

> It's a A personal Vue UI component library .

## 安装

```shell
npm i x-vui -S
```

## 快速开始

### 完整引入

```javascript
import Vue from 'vue'
import vui from 'x-vui'
import 'vui/lib/vui-css/index.css';

Vue.use(vui)
```

### 部分引入

```javascript
import Vue from 'vue'
import {
  Scroller,
  Select
  // ...
} from 'x-vui'
import 'vui/lib/vui-css/scroller.css';
import 'vui/lib/vui-css/select.css';

Vue.component(Scroller.name, Scroller)
Vue.component(Select.name, Select)
```

### 引入插件

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
 
## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
