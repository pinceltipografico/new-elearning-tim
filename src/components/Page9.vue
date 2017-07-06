<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="script1">
      <h1 v-on:click="newHtml('1')">- Nova abordagem de relacionamento,</h1>
      <h1 v-on:click="newHtml('2')">- ser surpreendido onde estiver,</h1>
      <h1 v-on:click="newHtml('3')">- previsão de seus comportamentos</h1>
      <h1 v-on:click="newHtml('4')">- fluxo contínuo, sem quebra na jornada de relacionamento</h1>
      <h1 v-on:click="newHtml('5')">- garantia de seu valor.</h1>
    </div>
    <div class="script2">
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */

  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  export default {
    created () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1 h1:first-of-type'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(2)'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(3)'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(4)'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(5)'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    },
    methods: {
      newHtml (value) {
        function hasClass (ele, cls) {
          return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        }

        function addClass (ele, cls) {
          if (!hasClass(ele, cls)) ele.className = ele.className.trim() + ' ' + cls;
        }
        addClass(this.$el.querySelector('.script2'), 'show');
        this.$el.querySelector('.script2').innerHTML = this.$data.texts[value];
      }
    },
    data: function () {
      return {
        texts: {
          '1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis ligula vel urna finibus, at ullamcorper ipsum viverra. Vivamus vel est dui. Nulla porta condimentum efficitur. Duis imperdiet massa sapien, et molestie ligula ultrices a. Donec vitae pretium lectus. Donec euismod porta leo, luctus porta nunc tempus eget. Phasellus blandit nunc et congue dictum. Praesent erat libero, rutrum a facilisis viverra, vehicula sed mauris.',
          '2': 'Ut nec mi vel magna sagittis efficitur. Maecenas turpis arcu, ornare eu varius facilisis, laoreet non sem. Fusce sed ante consectetur, porttitor orci posuere, vehicula nisi. Nam vel cursus nunc. Quisque tempor tortor metus, vel elementum nisl blandit sed. Aliquam eget dapibus libero. Etiam feugiat lobortis condimentum.',
          '3': 'Duis non volutpat felis. Duis eu interdum neque. Aenean dapibus libero quis lectus aliquet, quis sollicitudin ex ultricies. Integer tincidunt tristique ex, non cursus urna. Nulla id metus ac lectus bibendum viverra nec sit amet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pharetra neque eget ligula ultricies, et dignissim tortor semper. Aliquam convallis libero vitae diam tincidunt, quis lobortis ex elementum. Proin a ipsum ipsum. Duis cursus, nisi eu ornare suscipit, sem enim rutrum velit, nec lacinia lacus sem quis velit.',
          '4': 'Aenean suscipit est sollicitudin, commodo nulla sed, dapibus risus. Cras vel enim aliquet diam iaculis lacinia ut ut purus. Suspendisse potenti. Vestibulum convallis vestibulum nibh. Fusce blandit sed nulla vitae pharetra. Vivamus nec erat enim. Vestibulum ut sagittis libero. Pellentesque in ex eget justo imperdiet fringilla. Duis aliquam commodo metus imperdiet vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          '5': 'Sed eu rutrum purus, ac rutrum quam. Sed posuere neque ut elementum efficitur. Aliquam mollis et nibh vel pretium. Ut in nunc ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ornare interdum sapien et euismod. Duis lobortis turpis lorem, quis lacinia nisl tincidunt ornare. Nulla aliquet magna odio, eu tristique urna consequat sit amet.'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page-1.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    
    * {
      transition: all $animationTime;
    }
  }
  
  .script1{
    z-index: 4;
    position: absolute;
    top: 20%;
    left: 100px;
  }

  .script1 h1 {
    padding: 10px;
    cursor: pointer;
    max-width: 700px;
    @include font-size(2.5);
    color: #fff;
    text-transform: uppercase;
    transform: translate(100%, -50%) scale(1) rotate(0deg);
    opacity: 0;

    &.show {
      transform: translate(0%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
    &.hide {
      transform: translate(0, -50%) scale(0) rotate(180deg);
    }
  }

  .script2{
    z-index: 4;
    position: absolute;
    top: 40%;
    left: 60%;
    width: 30%;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
    padding: 20px;
    background-color: #2eb1e8;
    text-align: justify;
    transform: translate(100%, -50%) scale(1) rotate(0deg);
    opacity: 0;

    &.show {
      transform: translate(0%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
  }

</style>
