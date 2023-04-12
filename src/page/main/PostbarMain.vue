<template>
    <div class="PostbarMain-container">
        <div class="PostbarMain-left-around">
            <div class="PostbarMain-left">
                <div class="PostbarMain-left-title">
                    <el-avatar :size="48" :src="userCommunityInfo.avatar"></el-avatar>
                    <span class="PostbarMain-left-name">{{ userCommunityInfo.userName }}</span>
                </div>
                <div class="PostbarMain-left-collects-around">
                    <span class="PostbarMain-left-collects-title">我加入的社区</span>
                    <div class="PostbarMain-left-collects">
                        <div v-for="item in myCommunityList" :key="item.id" class="PostbarMain-left-collects-bar">
                            <!-- <el-avatar shape="square" :size="40" :src="item.avatar"></el-avatar> -->
                            <el-image 
                            style="width: 40px; height: 40px;border-radius: 5px;"
                            :src="item.avatar" 
                            fit="cover">
                            </el-image>
                            <span class="PostbarMain-left-collects-barName">{{ item.communityName }}</span>
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
                            <el-carousel-item v-for="item in 3" :key="item">
                                <div class="PostbarMain-mid-carousel-around">
                                    <div v-for="citem,index in cList(item)" :key="citem.id" class="PostbarMain-mid-carousel-item">
                                        <div class="PostbarMain-mid-carousel-img">
                                            <el-image 
                                            style="width: 50px; height: 50px;border-radius: 5px;"
                                            :src="citem.avatar" 
                                            fit="cover">
                                            </el-image>
                                            <!-- <el-avatar 
                                            shape="square" 
                                            style="width: 50px; height: 50px"
                                            fit="cover" 
                                            :size="50" 
                                            :src="item.avatar"></el-avatar> -->
                                        </div>
                                        <div class="PostbarMain-mid-carousel-info">
                                            <span class="PostbarMain-mid-carousel-info-barName">{{ citem.communityName }}社区</span>
                                            <div class="PostbarMain-mid-carousel-info-total">
                                                <span class="el-icon-user">{{ citem.userNumber }}</span><br>
                                                <span class="el-icon-chat-line-square">{{ citem.contentNumber }}</span>
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
                        <div v-for="item in recommendCommunityList" :key="item.community.id" class="PostbarMain-mid-content-item">
                            <div class="PostbarMain-mid-content-item-img">
                                <!-- <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar> -->
                                <el-image 
                                style="width: 50px; height: 50px;border-radius: 5px;"
                                :src="item.community.avatar" 
                                fit="cover">
                                </el-image>
                            </div>
                            <div class="PostbarMain-mid-content-item-title-around">
                                <div class="PostbarMain-mid-content-item-title">
                                    <span>{{ item.community.communityName }}社区</span>
                                    <!-- <p>
                                        <span>time</span>
                                    </p> -->
                                </div>
                                <QuoteItem :articleObj="item.article"></QuoteItem>
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
import {hotCommunityList,myCommunityList,recommendCommunity} from '@/api/community'
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
            src:'',
            hotCommunityList:[],
            myCommunityList:[],
            recommendCommunityList:[],
            userCommunityInfo:{
                userName:'',
                avatar:'',
                userId:'',
                communityList:[]
            },
            // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 0,
            },
        }
    },
    methods:{
        communityList(){ //获取社区信息
            this.queryParams.pageNum = 1
            this.queryParams.pageSize = 36
            hotCommunityList(this.queryParams).then((response)=>{         
                this.hotCommunityList = response
                console.log("hotCommunityList:",this.hotCommunityList)
            })
        },
        cList(index){ //处理社区信息
            if(index == 1){
                return this.hotCommunityList.filter((c,index)=>{
                    return index < 9;
                })
            }
            else if(index == 2){
                return this.hotCommunityList.filter((c,index)=>{
                    return index < 18 && index>8;
                })
            }
            else{
                return this.hotCommunityList.filter((c,index)=>{
                    return index > 17;
                }) 
            }
        },
        getUserInfo(){
            if(this.hasLogin && localStorage.getItem("userInfo") != null){
                let userInfo = JSON.parse(localStorage.getItem('userInfo'))
                this.userCommunityInfo.userName = userInfo.nickName
                this.userCommunityInfo.avatar = userInfo.avatar
                this.userCommunityInfo.userId = userInfo.id
                console.log("userCommunityInfo",this.userCommunityInfo)
            }
        },
        getMyCommunityList(userId){
            console.log(userId)
            myCommunityList(userId).then((response)=>{
                console.log("myCommunityList",response)
                this.myCommunityList = response
            })
        },
        getRecommendCommunity(){
            this.queryParams.pageSize = 10
            recommendCommunity(this.queryParams).then((response)=>{
                this.recommendCommunityList = response.rows
            })
        }
        ,
        routeChange(){
            var that = this;
            this.getUserInfo();
            // this.queryParams.categoryId = (that.$route.query.classId==undefined?0:parseInt(that.$route.query.classId));//获取传参的classId
            this.communityList();
            this.getMyCommunityList(parseInt(this.userCommunityInfo.userId));
            this.getRecommendCommunity();
        },
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
    '$route':'routeChange',
    '$store.state.keywords':'routeChange'
    },
    computed:{
        hasLogin(){
            return this.$store.state.main.isLogin;
        }
    },
    created(){ //生命周期函数
        // console.log(this.$route);
        var that = this;
        that.routeChange();
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
    margin: 10px 0 10px 100px;
}
.PostbarMain-mid-carousel-item{
    width: 150px;
    display: flex;
    float: left;
    margin: 0 15px 8px 15px;
}
.PostbarMain-mid-carousel-img{
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
    font-size: 12px;
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
    width: 10%;
    margin-left: 10px;
}
.PostbarMain-mid-content-item-title-around{
    width: 85%;
}
.PostbarMain-mid-content-item-title{
    // width: 70%;
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