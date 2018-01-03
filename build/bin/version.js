const fs          = require('fs');
const path        = require('path');
const fileSave    = require('file-save');
const { version } = require('../../packages/vui-css/package.json')
const components  = require('../../components.json')

Object.keys(components).forEach((item) => {
  let jsonPath    = components[item].split('./')[1].split('/index.js')[0]
  let filePath    = path.resolve(__dirname, `../../${jsonPath}`);
  let fileContent = require(`${filePath}/package.json`);

  fileContent.version = version

  fileSave(path.join(__dirname, `../../${jsonPath}/package.json`))
    .write(JSON.stringify(fileContent, null, '  '), 'utf8')
    .end('\n\n');
});
