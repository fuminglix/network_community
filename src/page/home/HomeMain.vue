<template>
    <div class="homemain-container">
        <div class="homemain-content">
            <div class="homemain-header">
                <div class="header-bck">

                </div>
                <div class="user-info-content">
                    <div class="user-avatar">
                        <el-avatar :size="60" :src="circleUrl"></el-avatar>
                    </div>
                    <div class="user-info">
                        <div class="user-name">
                            <span>fumingli</span>
                        </div>
                        <div class="user-introduce">
                            <span>简介</span>
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <div class="item-list-left">
                        <ul>
                            <li @click="toHomeView('activity')">
                                <div>
                                    <span>动态</span>
                                </div>
                            </li>
                            <li @click="toHomeView('favorites')">
                                <div>
                                    <span>收藏</span>
                                </div>
                            </li>
                            <li @click="toHomeView('regard')">
                                <div>
                                    <span>关注</span>
                                </div>
                            </li>
                            <li @click="toHomeView('community')">
                                <div>
                                    <span>社区</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>发现</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="item-list-right">
                        <ul>
                            <li>
                                <span>关注数</span>
                                <div>
                                    <span>100</span>
                                </div>
                            </li>
                            <li>
                                <span>粉丝数</span>
                                <div>
                                    <span>3</span>
                                </div>
                            </li>
                            <li>
                                <span>点赞数</span>
                                <div>
                                    <span>1000</span>
                                </div>
                            </li>
                            <li>
                                <span>浏览量</span>
                                <div>
                                    <span>1000</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <router-view name="HomeMainView"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeMain',
    components:{},
    data(){
        return{
            circleUrl:''
        }
    },
    methods:{
        toHomeView(page){
            this.$router.push({
                name:page
            },()=>{})
        }
    }
}
</script>

<style scoped lang="less">
.homemain-container{
    width: 100%;
}
.homemain-content{
    width: 1000px;
    margin: 0 auto;
}
.homemain-header{
    width: 100%;
    /* height: 200px; */
    background-color: yellowgreen;
    position: relative;
    border-radius: 0 0 5px 5px;
}
.header-bck{
    width: 100%;
    height: 150px;
    background-color: pink;
}
.user-info-content{
    position: absolute;
    display: flex;
    align-items:start;
    left: 20px;
    top: 80px;
}
.user-info{
    margin-left: 20px;
}
.user-name{
    font-size: 18px;
    font-weight: 600;
}
.user-introduce{
    font-size: 14px;
    margin-top: 10px;
    color: gray;
}
.item-list{
    width: 100%;
    height: 66px;
    display: flex;
}
.item-list-left{
    width: 50%;
}
.item-list-left ul{
    /* float: left; */
    display: flex;
    height: 66px;
    justify-content:space-around;
    align-items: center;
    span{
        font-size: 13px;
    }
    li{
        // height: 66px;
        line-height: 65px;
    }
    li:hover{
        cursor: pointer;
    }
}
.item-list-right{
    width: 30%;
    margin-left: 180px;
}
.item-list-right ul{
    height: 66px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    li{
        text-align: center;
    }
    li:hover{
        cursor: pointer;
    }
    li>span:first-child{
        font-size: 12px;
        color: gray;
    }
    div>span{
        font-size: 12px;
    }
}
</style>