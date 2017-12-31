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
        let _placeHolder = '<div style="'
        let _configObj = {}
        for (let i in __DEFAULTCONFIG__) {
          bindConfig && bindConfig.hasOwnProperty(i) ?
            _configObj[i] = bindConfig[i] :
            _configObj[i] = __DEFAULTCONFIG__[i]
        }
        Object.keys(_configObj).forEach((style) => {
          _placeHolder += `${style}: ${_configObj[style]};`
        })
        _placeHolder += '"></div>'
        el.innerHTML = _placeHolder
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
