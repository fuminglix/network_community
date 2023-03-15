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
import Sidebar from '@/components/Sidebar.vue'
import Main from '@/components/Main.vue'
export default {
    name:'Index',
    components:{
        Header,
        Sidebar,
        Main
    },
    data(){
      return{
        isClose:false,
        closeSidebar:'closeSidebar',
        sideba:'sideba'
      }
    },
    mounted(){
      this.$bus.$on("closeSidebar",(flag)=>{
        this.isClose=flag;
        console.log(this.isClose)
      })
    },
    computed:{
      asideWidth(){
        if(this.isClose)return "55px";
          return "240px";
      }
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
    overflow: hidden;
}
.el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    height: 40px;
    /* text-align: center; */
    /* line-height: 60px; */
  }
  
/* .el-aside {
  background-color: #D3DCE6;
  color: #333;
  transition: width 0.3s;
  height: 100%;
} */

.el-main {
  width: 1536px;
  background-color: #E9EEF3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px;   */
  padding: 0;
  /* height: 100vh;
  overflow-y: auto; */
}

body > .el-container {
  /* margin-bottom: 40px; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  /* line-height: 260px; */
}

.el-container:nth-child(7) .el-aside {
  /* line-height: 320px; */
}
.main{
  padding: 0 20px;
  background-color: white;
}
.header{
  border-bottom: 1px solid rgb(229, 229, 229);
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