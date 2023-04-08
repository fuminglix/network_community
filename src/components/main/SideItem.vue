<template>
  <div>
    <div v-for="item in hotArticleList" :key="item.id" class="other-article-list">
        <!-- <span class="el-icon-tickets tickets-icon"></span> -->
        <img src="@/assets/at2.png" alt="">
        <div class="other-article-list-title">
            <el-link :underline="false">{{ item.title }}</el-link>
            <!-- <span></span> -->
            <div class="other-article-list-data">
                <span>{{ item.viewCount }}</span> 次浏览
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'SideItem',
    data(){
        return{
        }
    },
    props:{
        hotArticleList:[]
    },
    methods:{
        
    },
    created(){
    }
}
</script>

<style scoped lang="less">
.other-article-list{
    padding: 10px;
    display: flex;
    align-items: self-start;
    cursor: pointer;
    img{
        width: 20px;
        height: 20px;
    }
}
.other-article-list:hover{
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
}
.other-article-list-title{
    margin-left: 5px;
    font-size: 14px;
}
.other-article-list-data{
    color: gray;
    font-size: 12px;
}
</style>