<template>
    <div class="index-container">
        <div class="content-around">
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
                    <div class="comment">
                        <div class="comment-order">
                            <div class="order-by-hot">
                                <span>按热度排序</span>
                            </div>
                            <div class="order-by-time">
                                <span>按时间排序</span>
                            </div>
                        </div>
                        <div class="edit-comment">
                            <div class="edit-avatar">
                                <el-avatar :size="large" :src="circleUrl"></el-avatar>
                            </div>
                            <div class="edit-input">
                                <el-input
                                    style="width: 100%"
                                    type="textarea"
                                    :autosize="{ minRows: 2, maxRows: 4}"
                                    placeholder="请输入内容"
                                    v-model="textarea1">
                                </el-input>
                            </div>
                        </div>
                        <Comment></Comment>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-right">
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
                    <div v-for="item in 5" class="other-article-list">
                        <span class="el-icon-tickets tickets-icon"></span>
                        <div class="other-article-list-title">
                            <span>第一篇文章</span>
                            <div class="other-article-list-data">
                                <span>数据</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend-article-around">
                <span>相似文章</span>
                <div v-for="item in 2" class="other-article-list">
                    <span class="el-icon-tickets tickets-icon"></span>
                    <div class="other-article-list-title">
                        <span>第一篇文章</span>
                        <div class="other-article-list-data">
                            <span>数据</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from './Comment.vue';
export default {
    components: { Comment },
    data(){
        return{
            circleUrl:'',
            textarea1:''
        }
    }
}
</script>

<style scoped lang="less">
.index-container{
    width: 1000px;
    height: 100%;
    margin: 10px auto;
    display: flex;
}
.content-around{
    width: 70%;
    border-radius: 10px;
    background-color: aquamarine;
}
.content-right{
    width: 30%;
    padding-left: 10px;
    background-color: yellowgreen;
}
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
    background-color: green;
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
.comment{
    margin-top: 30px;
}
.comment-order{
    display: flex;
    border-bottom: 1px solid rgb(220, 220, 220);
}
.order-by-hot,.order-by-time{
    /* width: 100px; */
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.order-by-hot{
    /* background-color: pink; */

}
.order-by-time{
    margin-left: 40px;
    /* background-color: aqua; */
}
.edit-comment{
    display: flex;
    align-items: center;
    margin: 20px 0;
}
.edit-input{
    margin-left: 20px;
    width: 80%;
}
.author-around{
    /* margin-left: 10px; */
    /* height: 60px; */
    // padding-left: 10px;
    padding: 10px 0;
    border-radius: 5px;
    background-color: aqua;
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
.other-article-list{
    margin: 10px 0 20px 0;
    display: flex;
}
.tickets-icon{
    font-size: 20px;
}
.other-article-list-title{
    margin-left: 5px;
    font-size: 14px;
    // display: flex;
    // align-items: center;
}
.other-article-list-data{
    // margin-left: 10px;
    color: gray;
}
.recommend-article-around{
    margin-top: 10px;
    border-radius: 5px;
    background-color: pink;
    padding: 10px 20px;
}
</style>