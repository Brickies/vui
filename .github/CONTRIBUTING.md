# Vui Contributing Guide

## 开发环境

当你克隆好仓库后，运行：

```shell
yarn || npm i
```

### 常用的npm scripts

```shell
# watch和自动build，并启动一个静态服务器
$ npm run dev

# 代码规范校验
$ npm run lint

# unit test watch
$ npm run test:watch

# test
$ npm run test

# 打包
$ npm run dist

# gh-pages分支deploy
$ npm run deploy
```

### 项目目录结构

- build：打包配置
- examples：文档目录
  - pages：手机端md文件，自动生成，请勿改动
  - docs：PC端文档md文件
  - src：文档页项目代码
- lib：打包后生成的文件
- packages：组件目录，每个组件是一个目录
- src：主文件`index.js`以及一些公用的`mixins`和`utils`
- test：测试用例

### 开发

#### 1. 新建一个组件

**请使用 Makefile 进行组件的创建，先通过 make new 命令创建好组件所需文件**

```shell
make new component-name <component-name>
```

#### 2. 示例预览

- 在`examples/nav.config.json`文件里合适的地方写入组件声明，根据组件类型（JS组件，CSS组件，Form等）进行区分 
- 在`examples/docs`目录里新建同名的md文件，如`hello.md`
- 在`src/index.js`里面进行组件注册，或者使用`make build:file`进行组件注册
- 在`package/vui-css/index.css`里面进行组件css注册
- 在项目的根目录下执行以下命令，启动server：

```shell
npm run dev
```

浏览器访问[http://localhost:8085](http://localhost:8085)就可以看到所有组件的示例了。

手机端直接切换到手机调试模式即可
