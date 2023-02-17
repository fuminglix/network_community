<template>
    <div class="container">
        <div class="content">
            <div class="content-left">
                <div class="title">
                    <span>
                        <a href="">文章标题</a>
                    </span>
                </div>
                <div class="summary">
                    <div v-if="0" class="summary-around">
                        <img src="../App.vue" alt=""></img>
                    </div>
                    <span>
                        <p class="summary-text">
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        111111111111111111111111111111111111111111111111111111

                        </p>
                    </span>
                </div>
                <div class="interaction">
                    <div class="interaction-left">
                        <div class="thumbs-up">
                        <img src="../assets/thumbs-up.png" alt="">
                        <span>点赞</span>
                        </div>
                        <div class="comment">
                            <img src="../assets/thumbs-up.png" alt="">
                            <span>100</span> 条评论
                        </div>
                        <div class="share">
                            <img src="../assets/thumbs-up.png" alt="">
                            <span>收藏</span>
                        </div>
                        <div class="Collection">
                            <img src="../assets/thumbs-up.png" alt="">
                            <span>分享</span>  
                        </div>
                        <div class="report">
                            <img src="../assets/thumbs-up.png" alt="">
                            <span>举报</span>
                        </div>
                    </div>
                    <div class="interaction-mid">
                        <div class="views">
                            <span>100</span>  次浏览 · <span>1小时前</span>
                        </div>
                    </div>
                    <div class="interaction-right">
                        <span>阅读全文</span>
                        <img src="../assets/thumbs-up.png" alt="">
                    </div>
                </div>
            </div>
            <div class="author">
                <div class="author-info">
                    <img src="../assets/qiu2.jpg" alt="">
                    <div class="author-info-detail">
                        <p>
                            <span class="author-name">fumingli</span>
                        </p>
                        <p>
                            <span class="author-introduce">简介 </span>
                        </p>
                    </div>
                </div>
                <div class="author-regard-around">
                    <div class="author-regard">
                        <button class="author-regard-btn">关注</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.container{
    /* background-color: blue; */
}
.content{
    width: 100%;
    display: flex;
    align-items: top;
    background-color: pink;
    border-bottom: 1px solid rgb(209, 209, 209);
}
.content-left{
    width: 80%;
    /* height: 130px; */
    margin: 20px 10px 20px 20px;
    background-color: lightcyan;
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
    color: black;
}
.summary{
    width: 100%;
    display: flex;
    align-items: top;
    font-size: 15px;
    /* height: 105px; */
}
.summary-text{
    /* width: 100%; */
    /* height:105px; */
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    background-color: green;
}
.summary-text-img{
    /* width: 300px; */
    /* height:100px; */
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
.summary img{
    width: 190px;
    height: 105px;
    float: left;
    vertical-align: top;
}
.summary-around{
    float: left;
    margin-right: 10px;
}
.interaction{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
.interaction-left{
    width: 60%;
    display: flex;
    align-content: center;
    margin: 10px 0;
    /* padding: 10px 20px; */
    background-color: yellow;
    justify-content: space-between;
}
.interaction-mid{
    font-size: 12px;
    color: rgb(132, 127, 127);
    display: flex;
    align-items: center;
}
.interaction-right{
    display: flex;
    align-items: center;
}
.interaction-right span{
    margin-right: 3px;
    color: rgb(49, 108, 210);
}
.interaction img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
}
.interaction-left span{
    margin-left: 5px;
}
.comment,.share,.Collection,.report{
}
.author{
    width: 17%;
    /* height: 130px; */
    margin-top: 20px;
    background-color: yellowgreen;
}
.author-info{
    margin: 5px 10px;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
}
.author-info img{
    border-radius: 19px;
    width: 38px;
    height: 38px;
}
.author-info-detail{
    margin-left: 8px;
}
.author-name{
    font-size: 15px;
    font-weight: 600;
}
.author-introduce{
    font-size: 13px;
    color: rgb(132, 127, 127);
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.author-regard-around{
    margin: 0 10px;
}
.author-regard-btn{
    width: 120px;
    height: 30px;
    border-radius: 4px;
    border: none;
    background-color: rgb(32, 173, 255);
}
</style>