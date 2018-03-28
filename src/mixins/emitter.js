/**
 * [broadcast 向下传递]
 * @param  {[type]} componentName [组件别名]
 * @param  {[type]} eventName     [事件别名]
 * @param  {[type]} params        [事件回调参数]
 */
function broadcast (componentName, eventName, params) {
  // 遍历当前实例的children节点
  this.$children.forEach((child) => {
    var name = child.$options.componentName
    // 如果子节点名称和组件别名相同，则当前子节点为目标节点
    if (name === componentName) {
      // 找到目标节点后，触发事件别名对应的回调，并将参数传入
      child.$emit.apply(child, [eventName].concat(params))
      // 如果子节点名称和组件别名不相同，继续遍历子节点的子节点，以此类推，直到找到目标节点
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

/**
* [dispatch 向上传递]
* @param  {[type]} componentName [组件别名]
* @param  {[type]} eventName     [事件别名]
* @param  {[type]} params        [事件回调参数]
*/
function dispatch (componentName, eventName, params) {
  var parent = this.$parent || this.$root
  var name = parent.$options.name
  // 向上找目标父节点，如果上一级父节点不符合，则继续往上查询
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent

    if (parent) {
      name = parent.$options.name
    }
  }
  // 找到目标父节点后，触发事件别名对应的回调，并将参数传入
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}
export default {
  methods: {
    broadcast (componentName, eventName, params) {
      broadcast.apply(this, [componentName, eventName, params])
    },
    dispatch (componentName, eventName, params) {
      dispatch.apply(this, [componentName, eventName, params])
    }
  }
}
