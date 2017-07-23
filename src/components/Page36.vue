<template>
  <div class="outer-page">
    <section class="page gradient" v-if="scene === 0">
      <div class="start">
        <h1>
          O Monitoramento em uma abordagem de CX vai muito além de relatórios e KPIs que já são utilizados pelas diferentes áreas da <span>TIM</span>
          para fazer a gestão de suas atividades.</h1>
        <div class="buttons" @click="startAnim">
          <span>Ver como funciona</span>
          <i class="material-icons">&#xE038;</i>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        scene: 0
      }
    },
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      this.$store.commit('setCanAdvance', false)
    },
    destroyed () {
    },
    methods: {
      startAnim () {
        this.scene = 1
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .start {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      color: #fff;
      @include font-size(2.5);
      text-align: center;
    }
  }
</style>
