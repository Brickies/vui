/* eslint-disable */
let rawData = ''
const __DEFAULTCONFIG__ = {
  width: '100%',
  height: '100%',
  background: '#eee',
  transition: 'all .3s'
}

exports.install = Vue => {
  Vue.directive('placeholder', {
    bind (el, binding, vnode) {
      rawData = binding.value.data
      if (!binding.value.data) {
        let bindConfig = binding.value.config
        let placeholder = '<div style="'
        const configObj = Object.assign(__DEFAULTCONFIG__, bindConfig)
        Object.keys(configObj).forEach((style) => {
          placeholder += `${style}: ${configObj[style]};`
        })
        placeholder += '"></div>'
        el.innerHTML = placeholder
      } else {
        el.innerHTML = binding.value.data
      }
    },
    update (el, binding) {
      if (el.children[0] && binding.value.data !== rawData) {
        el.children[0].style.opacity = 0
        setTimeout(() => {
          el.innerHTML = binding.value.data
        }, 300)
      }
    }
  })
}
