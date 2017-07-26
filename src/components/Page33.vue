<template>
  <div class="outer-page diretrizes">
    <!-- SCENE MENU -->
    <section class="page gradient page-menu">
      <h1>Clique em cada uma das diretrizes pra visualizá-las</h1>
      <div class="menu">
        <div class="tim-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="items">
          <router-link to="/page34">
            <div>
              <span>COMUNICAÇÃO</span>
              <i class="material-icons">&#xE0BF;</i>
            </div>
          </router-link>
          <router-link to="/page35">
            <div>
              <span>INTERAÇÃO</span>
              <i class="material-icons">&#xE5D2;</i>
            </div>
          </router-link>
          <router-link to="/page36">
            <div>
              <span>MONITORAMENTO</span>
              <i class="material-icons">&#xE8B6;</i>
            </div>
          </router-link>
        </div>
        <div class="shadow"></div>
      </div>
    </section>
    <!-- SCENE MENU -->
  </div>
</template>
<script type="text/javascript">
  export default {
    /**
     | ----------------------------------------------
     * RETURN DATA
     | ----------------------------------------------
     **/
    data () {
      return {
        scene: -1
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENTS IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('setCanAdvance', true)
    },
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
    },
    /**
     | ----------------------------------------------
     * METHODOS
     | ----------------------------------------------
     **/
    methods: {
      startSceneOne () {
        this.scene = 0
      }
    }
  }
</script>
<style lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  div.outer-page.diretrizes {
    section.page-menu {
      h1 {
        top: 15%;
        left: 50%;
        color: #fff;
        max-width: 300px;
        transform: translateX(-50%);
        @include font-size(1.8);
        text-align: center;
        border-bottom: 1px solid $brand-details;
      }
    }
    
    .menu {
      width: 100%;
      top: 55%;
      left: 50px;
      transform: translateY(-50%);
      .shadow {
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
      }
      .tim-icon {
        width: 400px;
        div {
          position: relative;
          height: 70px;
          margin-bottom: 60px;
          width: 100%;
          
          &:nth-of-type(1) {
            background: $brand-secondary;
            border-radius: 7px;
          }
          &:nth-of-type(2),
          &:nth-of-type(3) {
            &:before,
            &:after {
              position: absolute;
              content: '';
              display: block;
              width: 40%;
              height: 70px;
              background: $brand-secondary;
            }
            &:after {
              right: 0;
              border-bottom-right-radius: 7px;
              border-top-right-radius: 7px;
            }
            &:before {
              border-top-left-radius: 7px;
              border-bottom-left-radius: 7px;
            }
          }
          
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      .items {
        position: absolute;
        width: 100%;
        top: 0;
        left: 440px;
        div {
          display: flex;
          width: 100%;
          height: 70px;
          background: $brand-secondary;
          margin-bottom: 60px;
          align-items: center;
          padding: 10px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: all $animationTime;
          transform: translateX(100%);
          animation: itemAnimation 0.5s forwards 1s;
          span {
            @include font-size(2.5);
          }
          i {
            @include font-size(4);
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid #fff;
          }
          &:hover {
            background: darken($brand-secondary, 30%);
          }
        }
      }
    }
    
    section.comunicacao {
      .title{
        background: $brand-secondary;
        color:#fff;
        top:18%;
        @include font-size(3);
        padding: 5px 15px;
        text-transform: uppercase;
        i{
          margin-right: 10px;
        }
      }
      h1 {
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        @include font-size(3);
        text-align: center;
        span {
          color: $brand-details;
        }
        small {
          font-size: 50%;
          border-top: 1px solid $brand-details;
          padding-top: 5px;
        }
      }
      .backButton {
        display: flex;
        left: 50%;
        bottom: 10%;
        align-items: center;
        background: $brand-secondary;
        padding: 0 20px;
        border-radius: 7px;
        color: #fff;
        animation: backButton 1s infinite ease-in-out alternate;
        @include font-size(1.8);
        font-weight: bold;
        transform: translateX(-50%);
      }
      .icones {
        width: 80%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -30%);
        display: flex;
        align-items: center;
        .icone {
          position: relative;
          width: 20%;
          cursor: pointer;
          text-align: center;
          padding: 0 10px;
          span {
            position: absolute;
            display: inline-block;
            background: $brand-details;
            color: #fff;
            padding: 4px;
            text-align: center;
            border-radius: 7px;
            top: 100%;
            left: 50%;
            font-weight: bold;
            transform: translateX(-50%);
            max-width: 90%;
            @include font-size(1.5);
          }
        }
      }
    }
    
    @keyframes itemAnimation {
      to {
        transform: translateX(0%);
      }
    }
    @keyframes backButton {
      to {
        background: #fff;
        color: $brand-secondary;
      }
    }
  }
</style>
