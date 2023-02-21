<template>
    <div class="container">
        <div class="content-around">
            <div v-for="item in 8" class="content">
                <div class="content-left">
                    <div class="title">
                        <span>
                            <a href="">文章标题</a>
                        </span>
                    </div>
                    <div v-if="num == item ? isShow : true" class="summary">
                        <div v-if="0" class="summary-around">
                            <img src=".../App.vue" alt="">
                        </div>
                        <span>
                            <p class="summary-text">
                            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                            1111111111111111111111111111111111
                            11111111111111111111111111111111111111111111
                            </p>
                            <span @click="retract(item)" class="preview-btn">展开</span>

                        </span>
                    </div>
                    <div v-else class="summary">
                        <span>
                            <p class="summary-text-preview">
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
                            <span @click="retract(item)" class="preview-btn">收起</span>
                            </p>
                        </span>
                    </div>
                    <div class="interaction">
                        <div class="interaction-left">
                            <div class="thumbs-up">
                            <img src="../../assets/thumbs-up.png" alt="">
                            <span>点赞</span>
                            </div>
                            <div class="comment">
                                <img src="../../assets/thumbs-up.png" alt="">
                                <span>100</span> 条评论
                            </div>
                            <div class="share">
                                <img src="../../assets/thumbs-up.png" alt="">
                                <span>收藏</span>
                            </div>
                            <div class="Collection">
                                <img src="../../assets/thumbs-up.png" alt="">
                                <span>分享</span>  
                            </div>
                            <div class="report">
                                <img src="../../assets/thumbs-up.png" alt="">
                                <span>举报</span>
                            </div>
                        </div>
                        <div class="interaction-mid">
                            <div class="views">
                                <span>100</span>  次浏览 · <span>1小时前</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-right">
            <div class="hot">
                <div class="hot-title">
                    <span>热门</span>
                </div>
                <div v-for="item in 5" class="hot-content">
                    <div class="hot-content-text">
                        <span>1111</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MainIndex',
    data(){
        return{
            isShow:true,
            num:0
        }
    },
    methods:{
        retract(id){
            this.isShow = !this.isShow;
            this.num = id
        }
    }
}
</script>
<style scoped>
.container{
    /* background-color: blue; */
    width: 1000px;
    height: 100%;
    margin: 10px auto;
    display: flex;
    /* overflow: auto; */
    /* overflow-y: scroll; */
    /* position: absolute; */
    /* z-index: 10; */
}
/*滚动条整体粗细样式*/
::-webkit-scrollbar {
    /*高宽分别对应横竖滚动条的尺寸*/
    width: 8px;
    height: 8px;
}

/*滚动条里面小方块*/
::-webkit-scrollbar-thumb {
    border-radius: 10px !important;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
    /* 颜色 */
    background:#b6b6b6!important;
    /* 线性渐变背景 */
    /* background-image: linear-gradient(45deg, #ffbd61 25%,#ffbd61 25%, #ff8800 25%, #ff8800 50%,#ffbd61 50%, #ffbd61 75%, #ff8800 75%, #ff8800 100%)!important; */
}

/*滚动条轨道*/
::-webkit-scrollbar-track {
    border-radius: 10px !important;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
    background: #EDEDED !important;
}
.content{
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: top;
    background-color: white;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgb(237, 237, 237);
    /* z-index: 100; */
    /* overflow-y: auto; */
    /* position: absolute; */

}
.content-around{
    width: 100%;
    /* height: 92vh; */
    /* border: 1px solid rebeccapurple; */
    border-radius: 10px;
    /* background-color: aqua; */
}
.content-right{
    width: 30%;
    /* height: 92vh;  */
    /* overflow: auto; */
    /* background-color: yellowgreen; */
    /* border-radius: 5px;
    margin-left: 10px; */
}
.content-left{
    width: 100%;
    /* height: 130px; */
    margin: 20px 20px;
    /* border-top: 1px solid rgb(206, 206, 206); */
    /* background-color: lightcyan; */
    /* border-bottom: 1px solid rgb(209, 209, 209); */

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
    /* background-color: green; */
}
.summary-text-preview{
    line-height: 1.6;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    /* transition: height 1s; */
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
.preview-btn{
    cursor: pointer;
    color: rgb(68, 133, 229);
}
.interaction{
    display: flex;
    /* justify-content: space-between; */
    font-size: 14px;
}
.interaction-left{
    width: 50%;
    display: flex;
    align-content: center;
    margin: 10px 0;
    /* padding: 10px 20px; */
    /* background-color: yellow; */
    justify-content: space-between;
}
.interaction-mid{
    font-size: 12px;
    color: rgb(132, 127, 127);
    margin-left: 40px;
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
    cursor: pointer;
    color: rgb(133, 133, 133);

}
.hot{
    /* width: 100%; */
    margin: 0 10px;
    border-radius: 5px;
    padding: 10px;
    background-color: yellowgreen;
}
.hot-title{

}
.hot-content{
    margin-top: 5px;
}
.extend{
    width: 17%;
    /* height: 130px; */
    margin-top: 20px;
    /* display: block; */
    background-color: whitesmoke;
}
</style>