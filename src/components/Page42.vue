<template>
  <section class="page">
    <div class="script1 end-tag show">
      <logo></logo>
      <h1>somos todos <span>geração cx</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  import Logo from '../assets/svgs/logo-01.svg'
  
  export default {
    data () {
      return {}
    },
    components: {
      Logo
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      this.playAudio('scene25', 'static/subtitles/page25.json', null, null)
      var logo = document.querySelector('.logo')
      if (logo) {
        logo.style.opacity = 0
      }
      this.setStatus('completed')
    },
    destroyed () {
      this.stopAudio()
      var logo = document.querySelector('.logo')
      if (logo) {
        logo.style.opacity = 1
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page2/shutterstock_371017109.jpg") no-repeat;
    background-size: cover;
    
    .script1 {
      transition-delay: 1s;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 200px;
        margin-right: 20px;
        display: inline-block;
      }
      h1 {
        margin: 0;
      }
    }
  }
</style>
