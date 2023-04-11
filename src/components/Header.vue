<template>
  <div class="header-container">
    <el-row type="flex" justify="space-between" :gutter="0">
      <el-col class="" :span="4" :offset="0">
      </el-col>
      <el-col class="nav-mid" :span="12" :offset="0">
        <el-col :span="6" :offset="0">
          <div class="nav-mid-text">
            <ul>
              <li @click="toOtherPages('index')">首页</li>
              <li @click="toOtherPages('discover')">发现</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12" :offset="1">
          <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
            <el-button type="primary" @click="search" native-type="submit" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-col>
      <el-col class="header-right" :span="8" :offset="0">
        <el-col :span="2" :offset="0">
          <el-popover
            placement="bottom"
            trigger="hover"
            :open-delay=50
            :close-delay=100>
              <el-menu
                v-if="isLogin"
                default-active=""
                class="el-menu-vertical-demo menu"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="1">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>我的主页</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="2">
                  <template slot="title">
                    <i class="el-icon-s-management"></i>
                    <span>内容管理</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-s-tools"></i>
                  <span slot="title">设置</span>
                </el-menu-item>
                <el-menu-item @click="userlogout" index="4">
                  <i class="el-icon-switch-button"></i>
                  <span slot="title">退出账号</span>
                </el-menu-item>
              </el-menu>
              <el-main v-else>
                <el-button type="primary" @click="toOtherPages('login')">马上去登录</el-button>
              </el-main>
          <div slot="reference" @click="toOtherPages('avatar')" class="user-icon">
            <el-avatar 
            :size="40" 
            :src="squareUrl"
            fit="contain"
            v-if="isLogin">
            </el-avatar>
            <el-avatar v-else> 登录 </el-avatar>
          </div>
          </el-popover>
        </el-col>
        <el-col class="header-right-around" :span="16" :offset="0">
          <el-popover
            placement="top-start"
            trigger="hover"
            :open-delay=50
            :close-delay=100>
            <div slot="reference" class="header-right-text">
              <button class="el-icon-message-solid icon-btn"></button>
              <div class="nav-text">
                  <el-link type="default" :underline="false" href="http://localhost:86/#/PostbarMain" target="_blank">通知</el-link>
              </div>
            </div>
          </el-popover>
          <div class="header-right-text">
            <button class="el-icon-s-promotion icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:86/#/buildMain/publishMenu/publishContent" target="_blank">发布</el-link>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-edit-outline icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:86/#/activityMain" target="_blank">动态</el-link>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-star-off icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:86/#/settingMain" target="_blank">收藏</el-link>
            </div>
          </div>
          <div class="header-right-text">
            <button class="el-icon-time icon-btn"></button>
            <div class="nav-text">
              <el-link type="default" :underline="false" href="http://localhost:86/#/Postbar" target="_blank">历史</el-link>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <!-- <div class="fixed">
      123
    </div> -->
  </div>
</template>

<script>
import {logout} from '@/api/user'
import {removeToken} from '@/utils/auth'
export default {
  name:'Header',
  data(){
    return{
      searchInput:'',
      flag:false,
      squareUrl:'',
      userInfo:{}
    }
  },
   methods:{
    getUserInfo(){ // 当用户登陆后从localStorage中获取用户信息
      // console.log("userInfo",)
      if(!this.$store.state.main.isLogin) return;
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.squareUrl = this.$store.state.main.defaultAvatar;
      if(this.userInfo.avatar != null) this.squareUrl = this.userInfo.avatar;
    },
    routeChange(){ // 路由改变时触发的事件
      this.getUserInfo()
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
		userlogout(){ // 用户退出登录
			var that = this;
      logout().then((response)=>{
        removeToken()
        localStorage.removeItem('userInfo');
        this.$store.commit('CHANGEISLOGIN',false);
        this.$store.commit('REMOVEUSERINFO');
        window.location.reload();
          that.$message({
            type: 'success',
            message: '退出成功!'
          });
        // if (that.$route.path == '/UserInfo') {
          that.$router.push({
            path: '/'
          });
        // }
      })
		},
    toOtherPages(page){ // 路由跳转页面
      if(page === 'avatar'){
        page='article'
        if(!this.isLogin) page='login'
      }
      this.$router.push({
        name:page
      },()=>{})
    },
    search(){
      console.log("this.$route.name",this.$route)
      if(this.$route.path.indexOf('searchMain') == -1 && this.searchInput.trim() != ''){
        this.$store.commit('CHANGESEARCH',this.searchInput)
        this.$router.push({
          name:'searchMain'
        },()=>{})
        console.log("1")
        return;
      }
      if(this.searchInput.trim() != ''){
        this.$store.commit('CHANGESEARCH',this.searchInput)
        this.$store.commit('CHANGEISSEARCH',true);
        console.log("2",this.$store.state.main.search)
      }
    }
   },
   watch: {
    // 如果路由有变化，会再次执行该方法
    '$route':'routeChange',
    '$store.state.keywords':'routeChange'
    },
    created(){ //生命周期函数
        var that = this;
        that.routeChange();
    },
    computed:{
      isLogin(){  //同步登录状态
        console.log("isLogin=>",this.$store.state.main.isLogin)
        return this.$store.state.main.isLogin
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
  cursor: pointer;
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
.menu{
  border: none;
  /* text-align: center; */
}
</style>