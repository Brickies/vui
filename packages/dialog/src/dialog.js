import Vue from 'vue';

const DialogConstructor = Vue.extend(require('./dialog.vue').default);

const instance = new DialogConstructor({
  el: document.createElement('div')
});
DialogConstructor.prototype.closeDialog = function (stay, callback) {
  typeof callback === 'function' && callback();
  if (stay) return;
  this.$emit('update:show', false);
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  document.getElementsByTagName('html')[0].style.overflow = 'initial'
};

const Dialog = (options = {}) => {
  instance.title = options.title;
  instance.content = options.content;
  instance.cancelText = options.cancelText;
  instance.okText = options.okText;
  instance.onCancel = options.onCancel;
  instance.onOk = options.onOk;
  instance.showCloseIcon = options.showCloseIcon || true;
  instance.show = true;
  document.body.appendChild(instance.$el);
  document.getElementsByTagName('html')[0].style.overflow = 'hidden'
};

export default Dialog;
