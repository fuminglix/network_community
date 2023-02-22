<template>
    <div class="container">
        <div class="content-around">
            <SingleContent></SingleContent>
            <!-- <div class="content">
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
            </div> -->
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
import SingleContent from '@/page/main/SingleContent.vue'
export default {
    name:'MainIndex',
    components:{
        SingleContent
    },
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>
<style scoped>
.container{
    width: 1000px;
    height: 100%;
    margin: 10px auto;
    display: flex;
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