/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import { EventBus } from '../events/index'

const Audio = {}
Audio.install = function (Vue, options) {
  'use strict'
  var currentAudioId = null
  Vue.prototype.playAudio = function (spriteID, subtitles, timeUpdateCb, doneCb) {
    var subtitlesEl = document.querySelector('#subtitles > p')
    // var timer = document.querySelector('#timer')
    var duration
    var offset
    var pct
    var vm = this
    var subtitlesObj
    
    function startAudio (res) {
      subtitlesObj = res || {}
      currentAudioId = vm.$store.state.audio.play(spriteID)
      duration = vm.$store.state.audio.duration(currentAudioId)
      offset = vm.sprites[spriteID][0]
      pct = 100 / duration
      
      //
      // quando o audio terminar
      vm.$store.state.audio.once('end', function () {
        if (doneCb) {
          doneCb()
        }
      }, currentAudioId)
      
      //
      // quando for pausado
      vm.$store.state.audio.on('pause', function () {
      }, currentAudioId)
      
      // quando der o play
      vm.$store.state.audio.on('play', function () {
        requestAnimationFrame(increase)
      }, currentAudioId)
      
      EventBus.$emit('audio-started')
    }
    
    /**
     | ----------------------------------------------
     * CONVERT ATUAL SECOND TO DATE FORMAT
     | ----------------------------------------------
     **/
    function convertTime (secs) {
      var minute = Math.floor(secs / 60) || 0
      var seconds = Math.floor(secs - minute * 60) || 0
      return '00:' + ((minute < 10 ? '0' : '') + minute) + ':' + (seconds < 10 ? '0' : '') + seconds
    }
    
    /**
     | ----------------------------------------------
     * GET ATUAL TIME AND ANIMATE ELEMENTS
     | ----------------------------------------------
     **/
    function increase () {
      var pos = (vm.$store.state.audio.seek(currentAudioId) || 0) - (offset / 1000)
      var subtitleTime = convertTime(pos)
      var progress = Math.ceil((pct * pos))
      var currentSubTitle = subtitlesObj[subtitleTime]
      // timer.innerHTML = subtitleTime
      
      // set page progress
      vm.$store.commit('setPageProgress', progress)
      
      if (currentSubTitle && subtitlesEl) {
        subtitlesEl.innerHTML = currentSubTitle
      }
      if (vm.$store.state.audio.playing(currentAudioId) && progress <= 100) {
        if (timeUpdateCb) {
          timeUpdateCb(Math.floor(pos))
        }
        requestAnimationFrame(increase)
      }
    }
    
    //
    // FETCH SUBTITLES
    //
    this.$http.get(subtitles)
      .then(function (res) {
        startAudio(res.data)
      })
      .catch(function () {
        console.log('erro ao carregar a legenda')
        startAudio(null)
      })
  }
  
  /**
   | ----------------------------------------------
   * GET THE CURRENT AUDIO ID
   | ----------------------------------------------
   **/
  Vue.prototype.getCurrentAudioId = function () {
    return currentAudioId
  }
}
export default Audio
