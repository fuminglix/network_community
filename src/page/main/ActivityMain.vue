<template>
  <div class="activityMain-container">
        <div class="activityMain-left-around">
            <div class="activityMain-left">
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
                            <span>动态</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="activityMain-mid-around">
            <div class="activityMain-mid">
                <div class="activityMain-mid-edit-around">
                    <div class="activityMain-mid-edit-text">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="和大家分享一些内容？"
                        :autosize="{ minRows: 2, maxRows: 7}"
                        v-model="textarea"
                        resize="none">
                        </el-input>
                        <!-- <textarea 
                        name="" 
                        id="" 
                        cols="90" 
                        rows="7"
                        placeholder="和大家分享一些内容？">

                        </textarea> -->
                    </div>
                    <div v-show="isShow" class="activityMain-mid-edit-img">
                        <el-upload
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                            <img
                                class="el-upload-list__item-thumbnail"
                                :src="file.url" alt=""
                            >
                            <span class="el-upload-list__item-actions">
                                <span
                                class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)"
                                >
                                <i class="el-icon-zoom-in"></i>
                                </span>
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)"
                                >
                                <i class="el-icon-download"></i>
                                </span>
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)"
                                >
                                <i class="el-icon-delete"></i>
                                </span>
                            </span>
                            </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                    <div class="activityMain-mid-edit-option">
                        <el-row>
                            <el-col :span="21" :offset="0" class="activityMain-mid-edit-option-col">
                                <el-col :span="2" :offset="0">
                                    <img src="@/assets/emoji.png" alt="">
                                </el-col>
                                <el-col :span="2" :offset="0">
                                    <span @click="showImg" class="el-icon-picture-outline-round"></span>
                                </el-col>
                            </el-col>
                            <el-col :span="3" :offset="0">
                                <el-button type="primary">发布</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="activityMain-mid-content-around">
                    <div class="activityMain-mid-content">
                        <el-carousel 
                        height="112px" 
                        :interval="5000" 
                        arrow="always"
                        indicator-position="none"
                        :autoplay="false"
                        :loop="false">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <div class="activityMain-mid-userlist-around">
                                    <div class="activityMain-mid-userlist">
                                        <div v-for="item in 8" class="activityMain-mid-userlist-item">
                                            <div class="activityMain-mid-userlist-img">
                                                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                                            </div>
                                            <div class="activityMain-mid-userlist-name">
                                                <span>fumingli2222222222222222222222222</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="activityMain-mid-article-content-around">
                    <div class="activityMain-mid-article-content">
                        <div v-for="i in 4" class="activityMain-mid-content-item">
                            <div class="activityMain-mid-content-item-img">
                                <el-avatar :size="50" :src="squareUrl"></el-avatar>
                            </div>
                            <div class="activityMain-mid-content-item-title">
                                <div class="activityMain-mid-content-item-userInfo">
                                    <span>fuminglix</span>
                                    <p>
                                        <span>time</span>
                                    </p>
                                </div>
                                <div class="activityMain-mid-content-item-info">
                                    <span>
                                        222222222222222222222
                                    </span>
                                </div>
                                <QuoteItem v-if="1"></QuoteItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="activityMain-right-around">
            <div class="activityMain-right">
                <div class="notice-content">
                    <span>公告栏</span>
                    <div class="notice-content-img">
                        <el-image :src="src"></el-image>
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
import QuoteItem from '@/components/main/QuoteItem.vue';
export default {
    name:'activityMain',
    components:{
        QuoteItem
    },
    data(){
        return{
            circleUrl:'',
            squareUrl:'',
            src:'',
            textarea:'',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            isShow: false
        }
    },
    methods:{
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        showImg(){
            this.isShow = !this.isShow
        }
    }
}
</script>

<style scoped lang="less">
.activityMain-container{
    width: 1240px;
    margin: 10px auto;
    display: flex;
}
.activityMain-left-around{
    width: 240px;
}
.activityMain-left{
    background-color: white;
    margin-right: 10px;
    padding: 20px;
    border-radius: 5px;
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
.author-regard-around{
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
}
.author-regard,.author-fans,.author-Articles{
    text-align: center;
    :first-of-type span{
        font-size: 13px;
        color: gray;
    }
}
.activityMain-mid-around{
    width: 700px;
}
.activityMain-mid{
    // background-color: pink;
    // border-radius: 5px;
}
.activityMain-mid-edit-around{
    background-color: white;
    border-radius: 5px;
    padding: 10px 20px;
    // height: 130px;
}
.activityMain-mid-edit-text{
    margin-bottom: 10px;

}
.activityMain-mid-edit-img{
    margin-bottom: 10px;
}
.activityMain-mid-edit-option{

}
.activityMain-mid-edit-option-col{
    img{
        cursor: pointer;
    }
    span{
        font-size: 26px;
        color: rgb(157, 157, 157);
        // color: #1296db;
        cursor: pointer;
    }
}
.activityMain-mid-content-around{
    margin-top: 10px;
}
.activityMain-mid-content{
    background-color: white;
    border-radius: 5px;
}
.activityMain-mid-userlist-around{
    background-color: white;
    width: 80%;
    height: 80%;
    margin: 10px auto;
}
.activityMain-mid-userlist{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}
.activityMain-mid-userlist-item{
    text-align: center;
    width: 12%;
}
.activityMain-mid-userlist-name{
    width: 90%;
    margin: 0 auto;
    font-size: 12px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.activityMain-mid-article-content-around{
    margin-top: 10px;
}
.activityMain-mid-content-item{
    // border-bottom: 1px solid gray;
    display: flex;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
}
.activityMain-mid-content-item-img{
    // width: 10%;
    // margin-left: 10px;
}
.activityMain-mid-content-item-title{
    width: 90%;
    padding-left: 10px;
}
.activityMain-mid-content-item-userInfo{
    span{
        font-size: 14px
    }
    p span{
        font-size: 12px;
    }
}
.activityMain-mid-content-item-info{
    margin: 10px 0;
    span{
        word-break: break-all;
        word-wrap: break-word;
    }
}
.activityMain-right-around{
    width: 300px;
}
.activityMain-right{
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
::v-deep .el-textarea__inner{
    border: 0;
    font-family: Microsoft YaHei;
    font-size: 15px;
    // font-weight: 600;
    color: black;
    padding: 5px 0;
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
</style>
