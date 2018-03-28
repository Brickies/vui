'use strict'

console.log()
process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const chineseName = process.argv[3] || componentname
const ComponentName = uppercamelcase(componentname)
const { version } = require('../../package')

// 文件路径
const examplesPath = path.resolve(__dirname, '../../examples')
const packagesPath = path.resolve(__dirname, '../../packages')
const testPath = path.resolve(__dirname, '../../test/unit/specs')

// 文件内容及其详细路径
const examplesFiles = [
  {
    filename: `docs/${componentname}.md`,
    content: `## ${ComponentName} ${chineseName}

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| —  | —    | —   | — | — |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| —  | —    | — |`
  },
  {
  	filename: `pages/${componentname}.vue`,
    content: `
<template>
  <section class="demo-${componentname}">
      <v-${componentname}></v-${componentname}>
  </section>
</template>`
  }
]
const packagesFiles = [
  {
    filename: `${componentname}/index.vue`,
    content: `<template>
  <div class="v-${componentname}">
    hello ${componentname}~~~
  </div>
</template>
<script>
export default {
  name: 'v-${componentname}'
}
</script>`
  },
  {
    filename: `vui-css/src/${componentname}.css`,
    content: `.v-${componentname} {

}`
  }
]

const testFiles = [
  {
    filename: `${componentname}.spec.js`,
    content: `import { createTest, destroyVM } from '../util'
import ${ComponentName} from 'packages/${componentname}'

describe('${ComponentName}', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create a ${componentname}', () => {
    vm = createTest(${ComponentName})

    expect(vm.$el.classList.contains('v-${componentname}')).to.be.true
  })
})`
  }
]

// 组件写入 components.json
const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`)
  process.exit(1)
}

componentsFile[componentname] = `./packages/${componentname}/index.js`

fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n')

// 创建组件 example 文件
examplesFiles.forEach(file => {
  fileSave(path.join(examplesPath, file.filename))
  .write(file.content, 'utf8')
  .end('\n')
})

console.log('')
console.log('examples 文件创建完成')

// 创建组件 package 文件
packagesFiles.forEach(file => {
  fileSave(path.join(packagesPath, file.filename))
  .write(file.content, 'utf8')
  .end('\n')
})

console.log('')
console.log('packages 文件创建完成')

// 创建组件 test 文件
testFiles.forEach(file => {
  fileSave(path.join(testPath, file.filename))
  .write(file.content, 'utf8')
  .end('\n')
})

console.log('')
console.log('test 文件创建完成')

// 组件写入 nav 导航
const navPath = path.resolve(__dirname, '../../examples/src')
const navConfig = require('../../examples/src/nav.config.json')

for (var key in navConfig) {
  let langItem = navConfig[key][1]
  langItem.groups[0].list.push({
    "path": `/${componentname}`,
    "title": `${ComponentName} ${chineseName}`
  })
}

fileSave(path.join(navPath, 'nav.config.json'))
  .write(JSON.stringify(navConfig, null, '  '), 'utf8')
  .end('\n')

console.log('')
console.log('nav导航创建完成')

console.log('')
console.log('===组件创建成功===')
console.log('')
