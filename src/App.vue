<template>
  <div id="app">
    <router-view name="container"></router-view>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  mounted(){
    console.log('App',this);
  }
}
</script>

<style scoped>

 #app {
  width: 100%;
  height: 100vh;
  background-color: lightcyan;
  overflow: hidden;
}
</style>
