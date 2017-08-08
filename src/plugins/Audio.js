/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
const Audio = {}
Audio.install = function (Vue, options) {
  'use strict'
  Vue.prototype.playAudio = function (spriteID, subtitles, timeUpdateCb, doneCb) {
    var subtitlesEl = document.querySelector('#subtitles > p')
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
      var pos = (vm.$store.state.audio.seek(spriteID) || 0) - (offset / 1000)
      var subtitleTime = convertTime(pos)
      var currentSubTitle = subtitlesObj[subtitleTime]
      console.log(subtitleTime)
      if (currentSubTitle && subtitlesEl) {
        subtitlesEl.innerHTML = currentSubTitle
      }
      vm.$store.commit('setPageProgress', Math.ceil((pct * pos)))
      if (vm.$store.state.audio.playing()) {
        if (timeUpdateCb) {
          timeUpdateCb(pos)
        }
        id = requestAnimationFrame(increase)
      }
      if (doneCb) {
        doneCb()
      }
    }
    
    //
    // WHEN AUDIO STOPS
    this.$store.state.audio.once('stop', function () {
      cancelAnimationFrame(id)
    })
    
    this.$http.get(subtitles)
      .then(function (res) {
        subtitlesObj = res.data
        id = requestAnimationFrame(increase)
      })
      .catch(function () {
        console.log('erro ao carregar a legenda')
      })
  }
}
export default Audio
