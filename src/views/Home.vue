<template>
  <div class="view-app">
    <Header 
      :step="step"
      @lastStep="step = $event"
    />
    <Main 
      :step="step"
      @changeStep="step = $event"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Footer
  },
  data: () => ({
    step: 0,
  })
}
</script>

<style lang="scss">
  .view-app {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    overflow: hidden;

    @media (min-width: 1281px) {
      padding: 70px 0 50px 100px;
    }

    @media (max-width: 1280px) {
      padding: 70px 0 50px 78px;
    }

    @include tablet {
      padding: 40px 100px 0 100px;
    }

    @include mobile {
      padding: 40px 40px 0 40px;
    }

    @media (max-width: 374px) {
      padding: 40px 20px 0 20px;
    }

    background: linear-gradient(180deg, #FFFFFF 0%, #F1FFFA 100%);
    overflow: hidden;

    &::after {
      z-index: 1;
      content: '';
      position: absolute;

      @include desktop {
        left: 100%;
        transform: translateX(-50%);
      }

      @include notebook {
        left: calc(100% - 578px);
      }

      @include laptop {
        left: calc(100% - 412px);
      }

      @include tablet {
        display: none;
      }

      @include mobile {
        display: none;
      }

      top: -217px;
      width: 1400px;
      height: 1400px;
      background: linear-gradient(180deg, #EDFFF9 48.77%, #FF758E 51.17%);
      border-radius: 100%;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 400ms;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
