/* eslint-disable */
'use strict';

const fs = require('fs');
const path = require('path');
const fileSave = require('file-save');
const rimraf = require('rimraf');
const chalk = require('chalk');
const { prompt } = require('inquirer');
const { exec } = require('child_process');

const componentname = process.argv[2]

// 文件路径
const examplesPath = path.resolve(__dirname, '../../examples');
const packagesPath = path.resolve(__dirname, '../../packages');
const testPath = path.resolve(__dirname, '../../test/unit/specs');

const files = {
  page_file: `examples/pages/${componentname}.vue`,
  md_file: `examples/docs/${componentname}.md`,
  css_file: `packages/vui-css/src/${componentname}.css`,
  test_file: `test/unit/specs/${componentname}.spec.js`
}

prompt([{
  type: 'confirm',
  name: 'cmd',
  message: `Are you sure delete this ${componentname} component file →`,
}]).then(function (ans) {
  console.log(ans.cmd);
  if (ans.cmd) {
    deleteFile()
    deleteJson()
    console.log("delete begins...");
    deletePackage()
    setTimeout(() => {
      console.log('delete finished...');
      console.log('');
    }, 200)
  }
  else {
    process.exit(0)
  }
});

function deletePackage () {
  let componentPackage = path.join(packagesPath, `${componentname}`)
  rimraf(componentPackage, err => {
    if (err) throw err
    console.log(chalk.red(`项目已删除 ${componentPackage} package 文件`));
   })

}

function deleteFile (file) {
  Object.keys(files).forEach(key => {
    fs.exists(`${files[key]}`, function (exists) {
      if (exists) {
        console.log(files[key])
        let existFile = chalk.green(`项目中存在 ${files[key]}文件`)
        let delFile = chalk.red(`项目已删除 ${files[key]}文件`)
        console.log();
        console.log(existFile + '\n');
        console.log("delete begins...");
        // fs.unlink(files[key])
        exec(`rm ${files[key]}`, function (error, stdout, stderr) {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(delFile);
        })
      }
    })
  });
}

function deleteJson () {
  const componentsFile = require('../../components.json');
  if (componentsFile[componentname]) {
    delete componentsFile[componentname]
    console.log(`${componentname} json 配置已删除.`);
  }

  fileSave(path.join(__dirname, '../../components.json'))
    .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
    .end('\n');

  const navPath = path.resolve(__dirname, '../../examples/src');
  const navConfig = require('../../examples/src/nav.config.json');

  for (var key in navConfig) {
    let langItem = navConfig[key][1]
    langItem.groups[0].list.forEach((item, index) => {
      if (item.path.split('/')[1] === componentname) {
        langItem.groups[0].list.splice(index, 1)
        console.log(`${componentname} nav.config.json 配置已删除.`);
      }
    })
  }

  fileSave(path.join(navPath, 'nav.config.json'))
    .write(JSON.stringify(navConfig, null, '  '), 'utf8')
    .end('\n');
}

