<template>
  <div class="main-container">
    <router-view name="indexView"></router-view>
  </div>
</template>

<script>
export default {
    name:'Main',
    data(){
        return{

        }
    },
    mounted(){
    },  
    methods:{
    }
}
</script>

<style scoped> 
.main-container{
  /* width: 1000px; */
  margin: 0 auto;
  position: relative;
  /* overflow: hidden; */
  /* width: 100%; */
  /* height: 100%; */
  /* background-color: pink; */
}
</style>