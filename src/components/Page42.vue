<template>
  <section class="page">
    <div class="script1">
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
    background: url("../assets/backgrounds/page42/ref-287713304.jpg") no-repeat;
    background-size: cover;
    
    .script1{
      @include font-size(1.5);
      top:50%;
      transform: translateY(-50%);
      background: #fff;
      padding: 0 100px 0 25px;
      color:#666;
    }
  }
</style>
