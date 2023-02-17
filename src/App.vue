<template>
  <div id="app">
    <Header></Header>
    <Sidebar class="Sidebar"></Sidebar>
    <Main class="Main"></Main>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import axios from 'axios'
export default {
  name: 'App',
  components: {
   Header,
   Sidebar,
   Main
  },
  mounted(){
    console.log('App',this);
  }
}
</script>

<style scoped>
#app {
  width: 97%;
  height: 100%;
  margin: 0 auto;
}
.Sidebar{
  /* width: 240px;
  height: 100%;
  display: inline-block;
  vertical-align: top; */
  float: left;
}
.Main{
  /* width: 200px;
  height: 100px;
  display: inline-block;
  vertical-align: top; */
  overflow: auto;
}
.container{
  /* justify-content:baseline; */
  /* display: flex; */
}
</style>
