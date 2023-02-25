<template>
  <div class="postbar-container">
    <div class="content">
        <div class="content-title">
            <span class="el-icon-chat-line-round">推荐贴吧</span>
        </div>
        <div class="content-info">
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Postbar',
    data(){
        return{
            url:''
        }
    }
}
</script>

<style>
.postbar-container{
    /* width: 100%; */
    margin: 0 10px;
}
.content{
    /* margin: 0 auto; */
    padding: 10px;
    background-color: pink;
}
.content-title{

}
.content-info-around{
    height: 30px;
}
</style>