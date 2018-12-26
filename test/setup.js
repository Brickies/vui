const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dom = new JSDOM('', { url: 'http://localhost' })
Object.assign(global, {
  document: dom.window.document,
  window: dom.window,
  navigator: {
    userAgent: `node.js`
  }
})

window.console = global.console

Object.getOwnPropertyNames(window)
  .forEach(property => {
    if (typeof global[property] === 'undefined') {
      global[property] = window[property]
    }
  })
