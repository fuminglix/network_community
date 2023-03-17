<template>
  <div class="postbar-container">
    <div class="content">
        <div class="content-title">
            <img src="@/assets/community_y.png" alt="">
            <span @click="toPostbarMain('PostbarMain')"></span> 推荐社区
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
    },
    methods:{
        toPostbarMain(page){
            this.$router.push({
                name:page
            },()=>{})
        }
    }
}
</script>

<style scoped lang="less">
.postbar-container{
    /* width: 100%; */
    // margin: 0 10px;
}
.content{
    /* margin: 0 auto; */
    padding: 10px;
    border-radius: 5px;
    background-color: white;
}
.content-title{
    display: flex;
    align-items: center;
    font-size: 15px;
    span{
        font-size: 18px;
    }
    img{
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
}
.content-info{
    margin-top: 20px;
}
</style>