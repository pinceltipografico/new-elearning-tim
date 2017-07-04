/**
 * Created by renatoalmeida on 04/07/17.
 */
var AnimationUtils;
(function (AnimationUtils) {
  var animations = []
  var _callback = null
  var reverse = false
  var currentAnimations = []
  /**
   * RODA A ANIMAÇÃO
   * @param i
   * @param timeline
   */
  function runAnimation (i, timeline) {
    var animation = setTimeout(function () {
      var element = document.querySelector(animations[i].selector)
      reverse = animations[i].reverse
      if (element) {
        if (!reverse) {
          element.classList.add(animations[i].step)
        } else {
          element.classList.remove(animations[i].step)
        }
      }
      if (i === animations.length - 1) {
        _callback()
      }
    }, timeline)
    currentAnimations.push(animation)
  }
  /**
   * DEFAULT CALLBACK
   */
  function defaultCallback () {
  }
  /**
   * Monta a timeline
   * @param callback
   */
  function animationTimeline (callback) {
    if (callback === void 0) { callback = null }
    var timeline = 0
    _callback = (typeof callback === 'function' && callback) ? callback : defaultCallback
    for (var i = 0; i < animations.length; i++) {
      timeline = parseInt(animations[i].time, 10) + parseInt(timeline, 10)
      runAnimation(i, timeline)
    }
  }
  AnimationUtils.animationTimeline = animationTimeline
  /**
   * SETA AS ANIMAÇÕES
   * @param a
   * @param r
   */
  function setAnimations (a, r) {
    if (r === void 0) { r = false }
    destroyAnimations()
    animations = a
    reverse = r
  }
  AnimationUtils.setAnimations = setAnimations
  function destroyAnimations () {
    var id = window.setTimeout(function () { }, 0)
    while (id--) {
      window.clearTimeout(id) // will do nothing if no timeout with id is present
    }
  }
  AnimationUtils.destroyAnimations = destroyAnimations
})(AnimationUtils || (AnimationUtils = {}))
module.exports = AnimationUtils
