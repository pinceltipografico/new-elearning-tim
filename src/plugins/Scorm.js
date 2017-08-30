/* eslint-disable no-trailing-spaces */
import ScormConnect from '../scorm/scorm.connection'

window.connected = false
var VueScorm = {}
VueScorm.install = function (Vue, options) {
  'use strict'
  Vue.prototype.saveStatus = function () {
    try {
      ScormConnect.LMSCommit()
      ScormConnect.doQuit()
      window.close()
      window.top.close()
      window.parent.close()
    } catch (e) {
      console.log(e)
    }
  }
  
  /**
   * CALL DO QUIT METHOD
   */
  Vue.prototype.doQuit = function () {
    alert('sair do curso')
    ScormConnect.doQuit()
  }
  
  /**
   | ----------------------------------------------
   * SET LESSONS STATUS
   | ----------------------------------------------
   **/
  Vue.prototype.setStatus = function (status) {
    if (window.connected) {
      console.log('saving status: ' + status)
      ScormConnect.LMSSetValue('cmi.core.lesson_status', status)
      ScormConnect.LMSSetValue('cmi.core.score.raw', 100)
      ScormConnect.LMSCommit()
    }
  }
  
  Vue.prototype.setLasPageViewed = function (page) {
    this.$store.commit('setLastPageViewed', page)
    if (window.connected) {
      console.log('store last page: ' + page)
      ScormConnect.LMSSetValue('cmi.core.lesson_location', page)
      ScormConnect.LMSCommit()
    }
  }
  
  /**
   | ----------------------------------------------
   * PREENCHE O QUE RECEBE DO SCORM
   | ----------------------------------------------
   **/
  Vue.prototype.fillDefaults = function () {
    var suspendData = ScormConnect.LMSGetValue('cmi.suspend_data')
    var status = ScormConnect.LMSGetValue('cmi.core.lesson_status')
    var location = ScormConnect.LMSGetValue('cmi.core.lesson_location')
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
      ScormConnect.LMSSetValue('cmi.suspend_data', 'pages:Hello;|modules:0;')
      ScormConnect.LMSCommit()
    }
    //
    // fill location
    if (location) {
      this.$store.commit('setLastPageViewed', location)
    } else {
      this.$store.commit('setLastPageViewed', 'Hello')
      ScormConnect.LMSSetValue('cmi.core.lesson_location', 'Hello')
    }
    // fill status
    if (status === 'not attempted') {
      ScormConnect.LMSSetValue('cmi.core.lesson_status', 'incomplete')
      ScormConnect.LMSCommit()
    } else if (status === 'passed') {
      this.$store.commit('setCourseComplete', true)
    }
  }
  
  /**
   | ----------------------------------------------
   * CONECTA O SCORM
   | ----------------------------------------------
   **/
  Vue.prototype.connect = function (callback) {
    var vm = this
    ScormConnect.Init(function () {
      console.log('scorm connected')
      vm.$store.commit('setScormConnected', true)
      vm.fillDefaults()
      window.connected = true
      if (callback) {
        callback(null)
      }
    }, function () {
      console.log('scorm not connected')
      vm.$store.commit('setScormConnected', false)
      if (callback) {
        callback('Houve um erro ao se conectar')
      }
    })
  }
}
export default VueScorm
