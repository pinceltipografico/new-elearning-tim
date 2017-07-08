/**
 * Created by renatoalmeida on 07/07/17.
 */
const LoadSvg = {install: null}
LoadSvg.install = function (Vue, options) {
  'use strict'
  Vue.component('VueSvg', {
    template: `
      <svg :class="className" :width="width" :height="height">
        <use :xlink:href="svg" />
      </svg>
    `,
    props: ['width', 'height', 'svg', 'class']
  })
}
