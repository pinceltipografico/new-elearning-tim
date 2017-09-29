/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */

window.connected = false
var VueScorm = {}
VueScorm.install = function (Vue, options) {
  'use strict'
  
  Vue.prototype.saveStatus = function () {
    try {
      window.close()
      window.top.close()
      window.parent.close()
    } catch (e) {
      console.log(e)
    }
  }
  
  /**
   | ----------------------------------------------
   * SET LESSONS STATUS
   | ----------------------------------------------
   **/
  Vue.prototype.setStatus = function (status) {
    if (window.connected) {
      console.log('saving status: ' + status)
      doLMSSetValue('cmi.core.lesson_status', status)
      doLMSSetValue('cmi.core.score.raw', 100)
      doLMSCommit()
    }
  }
  
  /**
   | ----------------------------------------------
   * SET LAST PAGE VIEW
   | ----------------------------------------------
   **/
  Vue.prototype.setLasPageViewed = function (page) {
    this.$store.commit('setLastPageViewed', page)
    console.log('store last page: ' + page)
    doLMSSetValue('cmi.core.lesson_location', page)
    doLMSCommit()
  }
  
  /**
   | ----------------------------------------------
   * PREENCHE O QUE RECEBE DO SCORM
   | ----------------------------------------------
   **/
  Vue.prototype.fillDefaults = function () {
    var suspendData = doLMSGetValue('cmi.suspend_data')
    var status = doLMSGetValue('cmi.core.lesson_status')
    var location = doLMSGetValue('cmi.core.lesson_location')
    //
    // fill suspend data
    if (suspendData) {
      var pages = suspendData.split('|')[0].split(':')[1].split(';')
      pages = pages.slice(0, pages.length - 1)
      var modules = suspendData.split('|')[1].split(':')[1].split(';')
      modules = modules.slice(0, modules.length - 1)
      this.$store.commit('setPagesViewed', pages)
      this.$store.commit('setModuleAllowed', modules)
    } else {
      doLMSSetValue('cmi.suspend_data', 'pages:Hello;|modules:0;')
      doLMSCommit()
    }
    //
    // fill location
    if (location) {
      this.$store.commit('setLastPageViewed', location)
    } else {
      this.$store.commit('setLastPageViewed', 'Hello')
      doLMSSetValue('cmi.core.lesson_location', 'Hello')
    }
    // fill status
    if (status === 'not attempted') {
      doLMSSetValue('cmi.core.lesson_status', 'incomplete')
      doLMSCommit()
    } else if (status === 'passed') {
      this.$store.commit('setCourseComplete', true)
    }
  }
  
  /**
   | ----------------------------------------------
   * CONECTA O SCORM
   | ----------------------------------------------
   **/
  Vue.prototype.checkConnection = function (callback) {
    var vm = this
    vm.$store.commit('setScormConnected', true)
    vm.fillDefaults()
    if (callback) {
      callback(null)
    }
  }
}
export default VueScorm
