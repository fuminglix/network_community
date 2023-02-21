<template>
  <div class="container">
    <router-view name="index"></router-view>
  </div>
</template>

<script>
export default {
    name:'Main',
    data(){
        return{

        }
    }
}
</script>

<style scoped> 
.container{
  width: 1000px;
  margin: 0 auto;
  position: relative;
  /* width: 100%; */
  height: 100%;
  /* background-color: pink; */
}
</style>