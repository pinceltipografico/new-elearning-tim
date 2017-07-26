<template>
  <section class="page">
    <div class="script1 end-tag show">
      <h1>somos todos <span>geração cx</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 7000)
      this.$store.commit('setCanAdvance', false)
    },
    destroyed () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page{
    background: url("../assets/backgrounds/page2/06.jpg") no-repeat;
    background-size: cover;
    
    .script1{
      transition-delay: 1s;
    }
  }
</style>
