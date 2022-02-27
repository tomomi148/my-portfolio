<template>
  <div>
    <Header />
    <router-view class="main-contener"/>
  </div>
</template>

<script>
import Header from './views/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background: #fbe4e2;
  overflow-y: scroll;
  padding: 69px 0 0 0;
}

#app {
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  text-align: center;
  color: #0065b2;
  height: 100%;
}

.main-contener {
  padding: 32px 0 0 0;
}

</style>
