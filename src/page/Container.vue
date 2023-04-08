<template>
    <div class="root">
        <el-container>
            <el-header class="header">
                <Header></Header>
            </el-header>
            <el-main>
              <Main></Main>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
export default {
    name:'Index',
    components:{
        Header,
        Main
    },
    data(){
      return{
      }
    },
    mounted(){
    },
    computed:{
    },
    methods:{
    }
}
</script>

<style scoped>
.root{
    width: 1536px;
    margin: 0 auto;
    height: 100%;
    overflow-x: hidden;
}
.el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    height: 40px;
  }
  
.el-main {
  width: 1536px;
  background-color: #E9EEF3;
  color: #333;
  padding: 0;
  position: relative;
  top: 60px;
  overflow-x: hidden;
}
.main{
  padding: 0 20px;
  background-color: white;
}
.header{
  border-bottom: 1px solid rgb(229, 229, 229);
  position: fixed;
  z-index: 10;
}
::v-deep .el-card__body{
  padding: 0;
}
.sideba{
  width: 240px;
}
.closeSidebar{
  background-color: pink;
  width: 140px;
}
</style>