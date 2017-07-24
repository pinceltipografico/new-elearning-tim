<template>
  <section class="page gradient">
    <div class="items">
      <div class="item">
        <h1>Satisfação</h1>
        <div class="icone">
          <i class="material-icons">&#xE815;</i>
        </div>
        <span>CSAT</span>
        <p><strong>Dê motivos</strong>para o cliente gostar de sua marca e querer falar bem dela</p>
      </div>
      <div class="item">
        <h1>Recomendação</h1>
        <div class="icone">
          <i class="material-icons">&#xE6DD;</i>
        </div>
        <span>NPS</span>
        <p><strong>Dê meios</strong>para o cliente compartilhar sua experiência e recompense-o por isso</p>
      </div>
      <div class="item">
        <h1>Esforço</h1>
        <div class="icone">
          <i class="material-icons">&#xEB43;</i>
        </div>
        <span>CES</span>
        <p><strong>Dê poder</strong>para o cliente escolher o que deseja e se resolver sozinho sem esforço ou atrito</p>
      </div>
      <div class="item">
        <h1>Valor</h1>
        <div class="icone">
          <i class="material-icons">&#xE1AC;</i>
        </div>
        <span>CLV</span>
        <p><strong>Dê valor</strong>para o cliente, sabendo o valor que ele gera para a sua marca</p>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {}
    },
    mounted () {
    },
    destroyed () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .items{
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
