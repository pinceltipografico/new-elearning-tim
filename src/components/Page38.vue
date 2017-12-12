<template>
  <section class="page gradient">
    <h1>O quarteto fantástico de <span>customer experience</span> monitoring & analytics</h1>
    <div class="items">
      <div class="item">
        <h1>Satisfação</h1>
        <div class="icone">
          <i class="material-icons">&#xE815;</i>
        </div>
        <span>CSAT</span>
        <p><strong>Dê motivos</strong>paraCliente gostar de sua marca e querer falar bem dela</p>
      </div>
      <div class="item">
        <h1>Recomendação</h1>
        <div class="icone">
          <i class="material-icons">&#xE6DD;</i>
        </div>
        <span>NPS</span>
        <p><strong>Dê meios</strong>paraCliente compartilhar sua experiência e recompense-o por isso</p>
      </div>
      <div class="item">
        <h1>Esforço</h1>
        <div class="icone">
          <i class="material-icons">&#xEB43;</i>
        </div>
        <span>CES</span>
        <p><strong>Dê poder</strong>paraCliente escolher o que deseja e se resolver sozinho sem esforço ou atrito</p>
      </div>
      <div class="item">
        <h1>Valor</h1>
        <div class="icone">
          <i class="material-icons">&#xE1AC;</i>
        </div>
        <span>CLV</span>
        <p><strong>Dê valor</strong>paraCliente, sabendo o valor que ele gera para a sua marca</p>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  import { EventBus } from '../events/index'
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      setTimeout(function () {
        this.addClass(this.$el.querySelector('.items'), 'active')
        EventBus.$emit('start-progress')
      }.bind(this), 500)
      setTimeout(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this), 3000)
    },
    destroyed () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page > h1 {
    max-width: 600px;
    @include font-size(2);
    color: #fff;
    text-align: center;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
  }
  
  .items {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
    display: flex;
    align-items: flex-start;
    background: $brand-details;
    padding: 20px;
    border-radius: 7px;
    border: 5px solid #fff;
    .item {
      position: relative;
      padding: 20px;
      min-width: 200px;
      background: darken($brand-details, 20%);
      margin-right: 5px;
      transition: transform $animationTime, opacity $animationTime;
      transform: translateY(-100%);
      opacity: 0;
      
      @for $i from 1 through 4 {
        &:nth-of-type(#{$i}) {
          transition-delay: #{(0.5 * $i)+'s'};
        }
      }
      h1 {
        color: #fff;
        @include font-size(1.8);
        border-bottom: 1px solid #fff;
        padding-bottom: 10px;
        margin-bottom: 0;
      }
      .icone,
      span {
        display: block;
        text-align: center;
        background: #fff;
      }
      span {
        @include font-size(3);
        color: #666;
      }
      .icone {
        i {
          @include font-size(5);
        }
        color: $brand-details;
        padding: 10px 0;
      }
      p {
        color: #fff;
        @include font-size(1.4);
        strong {
          margin-right: 5px;
          &:after {
            content: ':';
          }
        }
      }
      &:after {
        height: 100px;
        width: 1px;
      }
    }
    &.active {
      .item {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
