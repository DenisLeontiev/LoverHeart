<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  @import '@/scss/reset.scss';

  html {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    line-height: 140%;
    min-height: -webkit-fill-available;
    overflow: hidden;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    height: 100vh;
  }

  #app {
    height: 100%;
  }
</style>
