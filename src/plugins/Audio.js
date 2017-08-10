/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
const Audio = {}
Audio.install = function (Vue, options) {
  'use strict'
  Vue.prototype.playAudio = function (spriteID, subtitles, timeUpdateCb, doneCb) {
    var subtitlesEl = document.querySelector('#subtitles > p')
    // var timer = document.querySelector('#timer')
    var soundid = this.$store.state.audio.play(spriteID)
    var duration = this.$store.state.audio.duration(soundid)
    var offset = this.sprites[spriteID][0]
    var pct = 100 / duration
    var vm = this
    var id = null
    var subtitlesObj
    
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
      var pos = (vm.$store.state.audio.seek(soundid) || 0) - (offset / 1000)
      // console.log(pos)
      var subtitleTime = convertTime(pos)
      // timer.innerHTML = subtitleTime
      var currentSubTitle = subtitlesObj[subtitleTime]
      if (currentSubTitle && subtitlesEl) {
        subtitlesEl.innerHTML = currentSubTitle
      }
      var progress = Math.ceil((pct * pos))
      vm.$store.commit('setPageProgress', progress)
      if (vm.$store.state.audio.playing(soundid) && progress <= 100) {
        if (timeUpdateCb) {
          timeUpdateCb(Math.floor(pos))
        }
        requestAnimationFrame(increase)
      } else {
        subtitlesEl.innerHTML = ''
        vm.$store.state.audio.stop(soundid)
        if (doneCb) {
          doneCb()
        }
      }
    }
    
    this.$http.get(subtitles)
      .then(function (res) {
        subtitlesObj = res.data
        requestAnimationFrame(increase)
      })
      .catch(function () {
        console.log('erro ao carregar a legenda')
      })
  }
}
export default Audio
