/**
 * Created by renatoalmeida on 05/07/17.
 */
// import json from 'json-loader!../../static/manifest.json'
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
    })
  }
}
