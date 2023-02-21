<template>
  <div class="container">
    <el-row type="flex" justify="space-between" :gutter="0">
      <el-col class="" :span="4" :offset="0">
        <!-- <button @click="isClose(flag)" class="el-icon-s-operation icon-btn"></button> -->
      </el-col>
      <el-col class="nav-mid" :span="12" :offset="0">
        <el-col :span="6" :offset="0">
          <div class="nav-mid-text">
            <ul>
              <li @click="show">首页</li>
              <li>分类</li>
              <li>发现</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="15" :offset="1">
          <el-input placeholder="请输入内容" v-model="msg" class="input-with-select">
            <el-button type="primary" native-type="submit" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-col>
      <el-col class="header-right" :span="8" :offset="0">
        <el-col :span="2" :offset="0">
          <div class="user-icon">
              <img class="user-img" src="@/assets/qiu2.jpg" alt="">
          </div>
        </el-col>
        <el-col class="header-right-around" :span="16" :offset="0">
          <div class="header-right-text">
            <button class="el-icon-message-solid icon-btn"></button>
            <div class="nav-text">
              <span>通知</span>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-s-promotion icon-btn"></button>
            <div class="nav-text">
              <span>发布</span>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-edit-outline icon-btn"></button>
            <div class="nav-text">
              <span>关注</span>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-star-off icon-btn"></button>
            <div class="nav-text">
              <span>收藏</span>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-time icon-btn"></button>
            <div class="nav-text">
              <span>历史</span>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
    
    <!-- <div class="left-icon">
      <button>
        <img class="menu-icon" src="../assets/menu.png">
      </button>
    </div>
    <div class="mid-search">
      <form action="" class="search">
        <div class="search-input-around">
          <input type="text" class="search-input">
          <button class="search-btn">
            <img class="search-logo" src="../assets/search.png"/>
          </button>
        </div>
      </form>
    </div>
    <div class="right">
      <div class="notice-around">
        <button>
          <img class="notice" src="../assets/notice.png" alt="">
        </button>
      </div>
      <div class="edit-around">
        <button>
          <img class="edit" src="../assets/edit.png" alt="">
        </button>
      </div>
      <div class="user-img-around">
        <button>
          <img class="user-img" src="../assets/qiu2.jpg" alt="">
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      msg:'',
      flag:false
    }
  },
   methods:{
    isClose(flag){
      this.$bus.$emit('closeSidebar',!flag);
      this.flag=!flag;
    },
    show(e){
            this.$router.push({
                name:'index',
            },()=>{})
        }
   }
}
</script>

<style scoped>
.container{
  width: 1536px;
  height: 60px;
  /* width: 100%;
  height: 56px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgb(206, 206, 206); */
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
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
}
.header-right{
  /* background-color: yellowgreen; */
  display: flex;
  /* align-items: center; */
}
.user-icon{
  width: 100%;
  height: 60px;
  display: flex;
  /* line-height: 60px; */
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
/* .icon-btn:hover{
  background-color: rgb(231, 231, 231);
} */
.header-right-around{
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
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
  /* display: flex;
  align-items: center; */
  border-radius: 18px;
}
::v-deep .el-input__inner{
  border-radius: 20px;
}
::v-deep .el-input-group__append{
  background-color: #449bf1;
  color: white;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
}
.nav-text{
  text-align: center;
  font-size: 12px;
  color: gray;
  font-weight: 600;
}
/*
.mid-search{
  height: 56px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.search-input-around{
  width: 400px;
  height: 34px;
  display: flex;
  padding-left: 17px;
  align-items: center;
  background-color: #fff;
  border-radius: 17px;
  border: 1px solid rgb(194, 193, 193);
}
.search-input{
  width: 90%;
  height: 24px;
  line-height: 24px;
  border: none;
  outline: none;
  background-color: #fff;
}
.search-btn{
  width: 8%;
  height: 100%;
  background-color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 7px;
}
.search-logo{
  width: 18px;
  height: 18px;
}
.right{
  display: flex;
  justify-content: space-between;
}
.notice-around button,.edit-around button,.user-img-around button{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #fff;
  border: none;
  cursor: pointer;
}
.notice-around button:hover,.edit-around button:hover{
  background-color: rgb(231, 231, 231);
}
.notice-around,.edit-around,.user-img-around{
  width: 40px;
  height: 40px;
  align-items: center;
  padding-right: 10px;
  display: flex;
}
.edit-around{
}
.user-img-around{
  padding-right: 20px;
}
.notice,.edit{
  width: 24px;
  height: 24px;
}
 */
</style>