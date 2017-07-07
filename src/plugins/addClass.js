/**
 * Created by renatoalmeida on 07/07/17.
 */
const AddClass = {}
AddClass.install = function (Vue, options) {
  'use strict'
  Vue.prototype.hasClass = function (ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
  }
  Vue.prototype.addClass = function (ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className = ele.className.trim() + ' ' + cls
  }
  Vue.prototype.removeClass = function (ele, cls) {
    if (this.hasClass(ele, cls)) {
      ele.className = ele.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), '')
    }
  }
}
export default AddClass
