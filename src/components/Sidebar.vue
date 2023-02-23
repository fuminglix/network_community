<template>
    <div class="sidebar-container">
        <div class="content">
            <div class="index">
                <ul>
                    <li @click="show">
                        <img src="../assets/home.png" alt="">
                        <span>首页</span>
                    </li>
                    <li @click="show">
                        <img src="../assets/recommend.png" alt="">
                        <span>推荐</span>
                    </li>
                    <li>
                        <img src="../assets/regard.png" alt="">
                        <span>关注</span>
                    </li>
                    <li>
                        <img src="../assets/Hot.png" alt="">
                        <span>热榜</span>
                    </li>
                    <li>
                        <img src="../assets/history3.png" alt="">
                        <span>历史记录</span>
                    </li>
                    <li>
                        <img src="../assets/thumbs-up.png" alt="">
                        <span>赞过内容</span>
                    </li>
                </ul>
            </div>
            <div class="category">
                <ul>
                    <div class="title">
                        <span>分类</span>
                    </div>
                    <li>
                        <img src="../assets/life.png" alt="">
                        <span>生活</span>
                    </li>
                    <li>
                        <img src="../assets/knowledge.png" alt="">
                        <span>知识</span>
                    </li>
                    <li>
                        <img src="../assets/game.png" alt="">
                        <span>游戏</span>
                    </li>
                    <li>
                        <img src="../assets/sports.png" alt="">
                        <span>运动</span>
                    </li>
                    <li>
                        <img src="../assets/info.png" alt="">
                        <span>资讯</span>
                    </li>
                    <li>
                        <img src="../assets/fashion.png" alt="">
                        <span>时尚</span>
                    </li>
                </ul>
            </div>
            <div class="discover">
                <ul>
                    <div class="title">
                        <span>发现</span>
                    </div>
                    <li>
                        <img src="../assets/home.png" alt="">
                        <span>校园</span>
                    </li>
                    <li>
                        <img src="../assets/home.png" alt="">
                        <span>推广</span>
                    </li>
                </ul>
            </div>
            <div class="setting">
                <ul>
                    <li>
                        <img src="../assets/setting.png" alt="">
                        <span>设置</span>
                    </li>
                    <li>
                        <img src="../assets/report.png" alt="">
                        <span>举报记录</span>
                    </li>
                    <li>
                        <img src="../assets/help.png" alt="">
                        <span>帮助</span>
                    </li>
                    <li>
                        <img src="../assets/feedback.png" alt="">
                        <span>反馈</span>
                    </li>
                </ul>
            </div>
            <div class="declare"> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Sidebar',
    data(){
        return{

        }
    },
    methods:{
        show(e){
            this.$router.push({
                name:'index',
            },()=>{})
        }
    }
}
</script>

<style scoped>
.sidebar-container{
    width: 240px;
    height: 100%h;
    background-color: white;
    /* overflow-x: hidden;
    overflow-y: scroll; */
    /* overflow-y: auto; */
    /* margin-right: 5px; */
    /* position: relative; */
}
/*滚动条整体粗细样式*/
::-webkit-scrollbar {
    /*高宽分别对应横竖滚动条的尺寸*/
    width: 8px;
    /* height: 8px; */
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
    width: 240px;
    height: 92vh;
    /* height: 474px; */
    /* position: absolute;*/
    overflow-y: auto; 
}
.title{
    font-size: 17px;
    margin-left: 10px;
    margin-bottom: 5px;
}
.container ul{
    padding: 12px 0;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.container li{
    width: 204px;
    height: 40px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    font-size: 14px;
    /* background-color: blanchedalmond; */
    cursor: pointer;
}
.container li:hover{
    background-color: rgb(233, 233, 233);
} 
.container li img{
    width: 24px;
    height: 24px;
    margin-left: 10px;
    margin-right: 24px;
}
</style>