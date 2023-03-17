<template>
  <div class="header-container">
    <el-row type="flex" justify="space-between" :gutter="0">
      <el-col class="" :span="4" :offset="0">
      </el-col>
      <el-col class="nav-mid" :span="12" :offset="0">
        <el-col :span="6" :offset="0">
          <div class="nav-mid-text">
            <ul>
              <li @click="show('index')">首页</li>
              <!-- <li @click="show('category')">分类</li> -->
              <li @click="show('discover')">发现</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12" :offset="1">
          <el-input placeholder="请输入内容" v-model="msg" class="input-with-select">
            <el-button type="primary" native-type="submit" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-col>
      <el-col class="header-right" :span="8" :offset="0">
        <el-col :span="2" :offset="0">
          <div @click="show('activity')" class="user-icon">
              <!-- <img class="user-img" src="@/assets/qiu2.jpg" alt=""> -->
              <el-avatar :size="40" :src="squareUrl"></el-avatar>
          </div>
        </el-col>
        <el-col class="header-right-around" :span="16" :offset="0">
          <div class="header-right-text">
            <button class="el-icon-message-solid icon-btn"></button>
            <div class="nav-text">
                <el-link type="default" :underline="false" href="http://localhost:8080/#/messageMain/reply" target="_blank">通知</el-link>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-s-promotion icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:8080/#/buildMain/publishContent" target="_blank">发布</el-link>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-edit-outline icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:8080/#/activityMain" target="_blank">动态</el-link>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-star-off icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:8080/#/settingMain" target="_blank">收藏</el-link>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-time icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:8080/#/Postbar" target="_blank">历史</el-link>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <div class="fixed">
      123
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      msg:'',
      flag:false,
      squareUrl:''
    }
  },
   methods:{
    isClose(flag){
      this.$bus.$emit('closeSidebar',!flag);
      this.flag=!flag;
    },
    show(page){
            this.$router.push({
                name:page,
            },()=>{})
        }
   }
}
</script>

<style scoped>
.header-container{
  width: 1536px;
  height: 60px;
  overflow: hidden;
}
.nav-mid{
  display: flex;
  align-items: center;
  line-height: 60px;
}
.nav-mid-text{
  text-align: center;
}
.nav-mid-text ul{
  display: flex;
}
.nav-mid-text li{
  width: 100px;
  font-size: 16px;
  color: gray;
  cursor: pointer;
}
.nav-mid-text li:hover{
  font-weight: 500;
  color: black;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: rgb(153, 55, 55);
}
.header{
  background-color: pink;
  display: flex;
  align-items: center;
}
.serach-input{
  display: flex;
  align-items: center;
}
.header-right{
  display: flex;
}
.user-icon{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
.icon-btn{
  font-size: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: white;
  border-radius: 20px;
  color: gray;
  cursor: pointer;
}
.header-right-around{
  display: flex;
  align-items: center;
}
.header-right-text{
  margin-left: 5px;
  text-align: center;
  width: 50px;
}
.header-right-text:hover{
  cursor: pointer;
}
.menu-icon{
  width: 24px;
  height: 24px;
}
.search-btn{
}
.user-img{
  width: 36px;
  height: 36px;
  border-radius: 18px;
}
::v-deep .el-input__inner{
  border-radius: 20px 0 0 20px;
}
::v-deep .el-input-group__append{
  background-color: #449bf1;
  color: white;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
}
.nav-text{

}
.nav-text a{
  /* text-align: center; */
  font-size: 12px;
  color: gray;
  font-weight: 600;
}
.fixed{
  display: none;
  width: 200px;
  height: 400px;
  position: fixed;
  top: 64px;
  right: 200px;
  background-color: white;
  border-radius: 5px;
  z-index: 10;
}
</style>