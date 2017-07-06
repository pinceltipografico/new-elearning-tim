/**
 * Created by renatoalmeida on 05/07/17.
 */
/* eslint-disable no-unused-vars */
var json = require('../manifest.json')
const Preloader = require('preloader')
/* eslint-disable no-trailing-spaces */
export default class AssetsLoader {
  static loade (progress) {
    return new Promise((resolve, reject) => {
      var loader = new Preloader({
        xhrImages: false
      })
      loader.on('progress', function (p) {
        progress({progress: p * 100})
      })
      for (var i in json) {
        var item = json[i]
        var canAdd = item.indexOf('.css') === -1 && item.indexOf('.js') === -1
        if (canAdd) {
          loader.add(item)
        }
      }
      loader.on('complete', resolve)
      loader.load()
    })
  }
}
