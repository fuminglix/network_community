<template>
    <div class="container">
        <div class="index">
            <ul>
                <li @click="show">
                    <img src="../assets/home.png" alt="">
                    <span>首页</span>
                </li>
                <li>
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
                    <span>生活</span>
                </li>
                <li>
                    <img src="../assets/home.png" alt="">
                    <span>生活</span>
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
</template>

<script>
export default {
    name:'Sidebar',
    data(){
        return{

        }
    },
    methods:{
        show(){
            this.$router.push({
                name:'index',
            })
        }
    }
}
</script>

<style scoped>
.container{
    width: 240px;
    height: 100%;
    background-color: white;
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