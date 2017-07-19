/**
 * Created by renatoalmeida on 05/07/17.
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
var json = require('../manifest.json')
const Preloader = require('preloader')
export default class AssetsLoader {
  static loade (progress) {
    return new Promise((resolve, reject) => {
      var assets = []
      for (var i in json) {
        var item = json[i]
        var ext = item.slice(item.lastIndexOf('.') + 1) + '|'
        var canAdd = '|jpg|jpeg|png|gif'.indexOf(ext) !== -1
        if (canAdd) {
          assets.push(item)
        }
      }
      var total = assets.length
      var pct = 100 / total
      var counter = 0
      assets.forEach(function (item, index) {
        var img = new Image()
        img.onload = onImageLoad
        img.onerror = onImageError
        img.src = item
      })
      
      function onImageLoad (e) {
        counter++
        progress({progress: pct * counter})
        if (counter === total) {
          resolve()
        }
      }
      
      function onImageError () {
        counter++
        progress({progress: pct * counter})
        reject()
      }
    })
  }
}
