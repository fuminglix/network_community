<template>
    <div class="PostbarMain-container">
        <div class="PostbarMain-left-around">
            <div class="PostbarMain-left">
                <div class="PostbarMain-left-title">
                    <el-avatar :size="48" :src="circleUrl"></el-avatar>
                    <span class="PostbarMain-left-name">fumingli</span>
                </div>
                <div class="PostbarMain-left-collects-around">
                    <span class="PostbarMain-left-collects-title">经常浏览</span>
                    <div class="PostbarMain-left-collects">
                        <div v-for="item in 6" class="PostbarMain-left-collects-bar">
                            <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
                            <span class="PostbarMain-left-collects-barName">二次元222222</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="PostbarMain-mid-around">
            <div class="PostbarMain-mid">
                <div class="PostbarMain-mid-hotBar-around">
                    <div class="PostbarMain-mid-hotBar">
                        <div class="PostbarMain-mid-hotBar-title">
                            <span>热门社区</span>
                        </div>
                        <el-carousel :autoplay="false" height="190px" indicator-position="outside">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <div class="PostbarMain-mid-carousel-around">
                                    <div v-for="it in 9" class="PostbarMain-mid-carousel-item">
                                        <div class="PostbarMain-mid-carousel-img">
                                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                                        </div>
                                        <div class="PostbarMain-mid-carousel-info">
                                            <span class="PostbarMain-mid-carousel-info-barName">二次元社区</span>
                                            <div class="PostbarMain-mid-carousel-info-total">
                                                <span>200w</span><br>
                                                <span>3000w</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="PostbarMain-mid-content-around">
                    <div class="PostbarMain-mid-content">
                        <div v-for="i in 4" class="PostbarMain-mid-content-item">
                            <div class="PostbarMain-mid-content-item-img">
                                <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                            </div>
                            <div>
                                <div class="PostbarMain-mid-content-item-title">
                                    <span>二次元社区</span>
                                    <p>
                                        <span>time</span>
                                    </p>
                                </div>
                                <QuoteItem></QuoteItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="PostbarMain-right-around">
            <div class="PostbarMain-right">
                <div class="notice-around">
                    <div class="notice-content">
                        <span>公告栏</span>
                        <div class="notice-content-img">
                            <el-image :src="src"></el-image>
                        </div>
                    </div>
                </div>
                <div class="hot-around">
                    <div class="hot-content">
                        <div class="hot-content-title">
                            <span>热门话题</span>
                        </div>
                        <div v-for="item in 6" class="hot-content-info">
                            <div class="hot-content-info-name">
                                <span>222222222222222222222222222222222222222222222222</span>
                            </div>
                            <span class="hot-content-info-num">热度</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteItem from '@/components/main/QuoteItem.vue'
export default {
    name:'PostbatMain',
    components:{
        QuoteItem
    },
    data(){
        return{
            circleUrl:'',
            squareUrl:'',
            src:''
        }
    }
}
</script>

<style scoped lang="less">
.PostbarMain-container{
    width: 1240px;
    margin: 10px auto;
    display: flex;
}
.PostbarMain-left-around{
    width: 240px;
}
.PostbarMain-left{
    height: 250px;
    background-color: white;
    margin-right: 10px;
    border-radius: 5px;
}
.PostbarMain-left-title{
    padding: 10px;
    display: flex;
    align-items: center;
}
.PostbarMain-left-name{
    margin-left: 5px;
}
.PostbarMain-left-collects-around{
    margin: 10px 10px;
}
.PostbarMain-left-collects-title{
    font-size: 15px;
    font-weight: 600;
}
.PostbarMain-left-collects{
    width: 100%;
    margin-top: 10px;
}
.PostbarMain-left-collects-bar{
    width: 28%;
    height: 70px;
    text-align: center;
    float: left;
    padding: 0 5px;
}
.PostbarMain-left-collects-barName{
    font-size: 12px;
    font-weight: 500;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.PostbarMain-mid-around{
    width: 700px;
}
.PostbarMain-mid{
    // background-color: pink;
    // border-radius: 5px;
}
.PostbarMain-mid-hotBar-around{
    background-color: white;
    border-radius: 5px;
}
.PostbarMain-mid-hotBar-title{
    padding: 10px 10px 0 10px;
    span{
        font-size: 15px;
        font-weight: 600;
    }
}
.PostbarMain-mid-carousel-around{
    width: 80%;
    margin: 10px auto;
}
.PostbarMain-mid-carousel-item{
    width: 150px;
    display: flex;
    float: left;
    margin: 0 30px 8px 0;
}
.PostbarMain-mid-carousel-info{
    margin-left: 8px;
    width: 90px;
}
.PostbarMain-mid-carousel-info-barName{
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.PostbarMain-mid-carousel-info-total{
    font-size: 10px;
    color: gray;
}
.PostbarMain-mid-content{
    margin-top: 10px;
    border-radius: 5px;
    // background-color: yellowgreen;
    
}
.PostbarMain-mid-content-item{
    border-bottom: 1px solid rgb(237, 237, 237);
    padding: 10px;
    display: flex;
    background-color: white;
}
.PostbarMain-mid-content-item-img{
    width: 30%;
    margin-left: 10px;
}
.PostbarMain-mid-content-item-title{
    height: 50px;
    padding-left: 10px;
    span{
        font-size: 15px;

    }
    p span{
        font-size: 12px;
    }
}
.PostbarMain-right-around{
    width: 300px;
}
.PostbarMain-right{
    // background-color: yellowgreen;
    margin-left: 10px;
}
.notice-content{
    font-size: 15px;
    font-weight: 600;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
}
.notice-content-img{
    width: 100%;
}
.hot-content{
    margin-top: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
}
.hot-content-title{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
}
.hot-content-info{
    margin: 0 10px 10px 10px;
}
.hot-content-info-name span{
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.hot-content-info-num{
    font-size: 12px;
    color: gray;
}
</style>