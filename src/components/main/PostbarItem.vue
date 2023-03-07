<template>
  <div class="postbar-container">
    <div class="content">
        <div class="content-title">
            <span class="el-icon-chat-line-round">推荐贴吧</span>
        </div>
        <div class="content-info">
            <SideItem></SideItem>
        </div>
    </div>
  </div>
</template>

<script>
import SideItem from './SideItem.vue'
export default {
    name:'Postbar',
    components:{
        SideItem
    },
    data(){
        return{
            url:''
        }
    }
}
</script>

<style scoped>
.postbar-container{
    /* width: 100%; */
    margin: 0 10px;
}
.content{
    /* margin: 0 auto; */
    padding: 10px 20px;
    border-radius: 5px;
    background-color: pink;
}
.content-title{

}
.content-info-around{
    height: 30px;
}
</style>