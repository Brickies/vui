import Vue from 'vue'

var ToastConstructor = Vue.extend(require('./index.vue').default)

var instance = new ToastConstructor().$mount(document.createElement('div'))

// 这里可以销毁组件实例，也能通过在Toast组件内部通过this.$el进行销毁
ToastConstructor.prototype.close = function () {
  var el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
  document.getElementsByTagName('html')[0].style.overflow = 'initial'
  typeof this.callback === 'function' && this.callback()
}

var Toast = function (options) {
  options = options || {}
  instance.msg = typeof options === 'string' ? options : options.msg
  instance.timeout = ~~options.timeout || 2000
  instance.icon = options.icon
  instance.callback = options.callback
  document.body.appendChild(instance.$el)
  document.getElementsByTagName('html')[0].style.overflow = 'hidden'

  typeof instance.during === 'function' && instance.during()
  var timer = setTimeout(function () {
    clearTimeout(timer)
    instance.close()
  }, instance.timeout)
}
export default Toast
