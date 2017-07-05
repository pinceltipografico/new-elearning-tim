/**
 * Created by renatoalmeida on 05/07/17.
 */
const json = require('../../dist/manifest.json')
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
      loader.on('complete', resolve)
      for (var i in json) {
        var canLoad = json[i].indexOf('.css') === -1 && json[i].indexOf('.js') === -1
        if (canLoad) {
          loader.add(json[i])
        }
      }
      loader.load()
    })
  }
}
