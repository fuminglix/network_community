<template>
    <Common>
        <template slot="content-left">
            <div class="content">
                <div class="content-left">
                    <div class="title">
                        <span>
                            <el-link type="default" :underline="false" href="http://localhost:8080/#/ArticleMain" target="_blank">文章标题</el-link>
                        </span>
                    </div>
                    <div class="article">
                        <span>
                            <p class="article-text">
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222
                            </p>
                        </span>
                    </div>
                    <Comment></Comment>
                </div>
            </div>
        </template>
        <template slot="content-right">
            <div class="author-around">
                <div class="author-info">
                    <el-avatar :size="70" :src="circleUrl"></el-avatar>
                    <div class="author-introduce">
                        <div>
                            <el-link 
                            type="default" 
                            :underline="false" 
                            href="http://localhost:8080/#/ArticleMain" 
                            target="_blank">浮名里</el-link>
                        </div>
                        <div class="author-profile-around">
                            <span class="author-profile">简介222222222222222222222222222222222222222222222</span>
                        </div>
                    </div>
                </div>
                <div class="author-regard-around">
                    <div class="author-regard">
                        <span>99</span>
                        <div>
                            <span>关注</span>
                        </div>
                    </div>
                    <div class="author-fans">
                        <span>5</span>
                        <div>
                            <span>粉丝</span>
                        </div>
                    </div>
                    <div class="author-Articles">
                        <span>58</span>
                        <div>
                            <span>文章</span>
                        </div>
                    </div>
                </div>
                <div class="other-article">
                    <span>其他文章</span>
                    <SideItem></SideItem>
                </div>
            </div>
            <div class="recommend-article-around">
                <span>相似文章</span>
                <SideItem></SideItem>
            </div>
        </template>
    </Common>
</template>

<script>
export default {
    components: { },
    data(){
        return{
            circleUrl:'',
            textarea1:''
        }
    }
}
</script>

<style scoped lang="less">
.content{
    width: 100%;
    display: flex;
    align-items: top;
    background-color: white;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgb(237, 237, 237);
}
.content-left{
    width: 100%;
    margin: 20px 20px;
}
.title span{
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.title span a{
    font-size: 18px;
    color: black;
}
.article{
    width: 100%;
    display: flex;
    margin-top: 10px;
    align-items: top;
    font-size: 15px;
}
.article-text{
    line-height: 1.6;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
}
.article-text-img{
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    background-color: white;
}
.article img{
    width: 190px;
    height: 105px;
    float: left;
    vertical-align: top;
}
.article-around{
    float: left;
    margin-right: 10px;
}
.author-around{
    margin-left: 10px;
    /* height: 60px; */
    // padding-left: 10px;
    padding: 10px 0;
    border-radius: 5px;
    background-color: white;
}
.author-info{
    // display: flex;
    // align-items: center;
    // height: 60px;
    text-align: center;
}
.author-introduce{
    width: 100%;
    // margin-left: 15px;
}
.author-introduce a{
    /* width: 100%; */
}
.author-introduce span{
    font-size: 13px;
}
.author-profile-around{
    width: 60%;
    margin: 0 auto;
}
.author-profile{
    width: 100%;
    color: gray;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.author-regard-around{
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
}
.author-regard,.author-fans,.author-Articles{
    text-align: center;
    :first-of-type span{
        font-size: 13px;
        color: gray;
    }
}
.other-article{
    margin: 20px 20px 0 20px;
}
.recommend-article-around{
    margin: 10px 0 0 10px;
    border-radius: 5px;
    background-color: white;
    padding: 10px 20px;
}
</style>