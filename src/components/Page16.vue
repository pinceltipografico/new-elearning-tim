<template>
  <section class="page page16">
    <div class="effects"></div>
    <div class="image"></div>
    <div class="script1">
      <h1>Isso é possível quando toda a empresa e parceiros estão envolvidos nesse <span>propósito!</span></h1>
      <h1>É necessário evoluir sempre, e para a TIM, <span>evoluir é fazer diferente!</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var h1s = this.$el.querySelectorAll('h1')
      this.playAudio('scene17', 'static/subtitles/page16.json', function (pos) {
        if (pos === 47) {
          h1s[0].style.display = 'none'
          h1s[1].style.display = 'block'
        }
      }, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page1/07.png") no-repeat;
    background-size: cover;
  }
  
  .image {
    width: 100%;
    height: 600px;
    background: url("../assets/backgrounds/page16/02.png") no-repeat;
    bottom: 0;
    left: 5%;
    animation: imageAnimation 10s infinite ease-in-out alternate;
  }
  
  .effects {
    width: 100%;
    height: 30%;
    background-color: #1E3144;
    top: 50%;
    transform: translateX(-100%);
    animation: enterEffect 0.250s forwards;
    animation-delay: 2s;
  }
  
  .script1 {
    max-width: 35%;
    top: 52%;
    right: 2%;
    color: #fff;
    @include font-size(2);
    opacity: 0;
    animation: enterScript 0.250s forwards;
    animation-delay: 2.5s;
    @include responsive('laptopS') {
      @include font-size(1.6);
      top: 54%;
    }
    h1:nth-of-type(2) {
      display: none;
    }
  }
  
  @keyframes imageAnimation {
    0% {
      transform: translateX(-5%);
    }
    100% {
      transform: translateX(5%);
    }
  }
  
  @keyframes enterEffect {
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes enterScript {
    to {
      opacity: 1;
    }
  }
</style>
