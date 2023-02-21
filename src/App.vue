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
  height: 100%;
  background-color: lightcyan;
  /* overflow-x: hidden;
  overflow-y: hidden; */
}
/*
.Sidebar{
}
.Main{
}
.content{
  width: 1490px;
  height: 100%;
  display: flex;
  background-color: rgb(209, 209, 209);
}
.container{
} */
</style>
