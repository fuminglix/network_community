<template>
    <div class="category">
        <div class="category-content">
            <div class="title">
                <img src="@/assets/category.png" alt="">
                <span>热门分类</span>
            </div>
            <div class="category-list">
                <ul>
                    <li>
                        <div class="category-list-around">
                            <img src="@/assets/life.png" alt="">
                            <span>生活</span>
                        </div>
                    </li>
                    <li>
                        <div class="category-list-around">
                            <img src="@/assets/knowledge.png" alt="">
                            <span>知识</span>
                        </div>
                    </li>
                    <li>
                        <div class="category-list-around">
                            <img src="@/assets/game.png" alt="">
                            <span>游戏</span>
                        </div>
                    </li>
                    <li>
                        <div class="category-list-around">
                            <img src="@/assets/sports.png" alt="">
                            <span>运动</span>
                        </div>
                    </li>
                    <li>
                        <div class="category-list-around">
                            <img src="@/assets/info.png" alt="">
                            <span>资讯</span>
                        </div>
                    </li>
                    <li>
                        <div class="category-list-around">
                            <img src="@/assets/fashion.png" alt="">
                            <span>时尚</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped lang="less">
.category{
    width: 100%;
    height: 200px;
    background-color: white;
    border-radius: 5px;
}
.category-content{
    width: 100%;
}
.title{
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    margin: 0 10px;
    img{
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    span{
        font-size: 14px;
    }
}
.category-list{
    padding: 0 10px;
}
.category-list ul{
    margin-top: 10px;
    /* width: 100%; */
    /* margin: 5px 11px; */
}
.category-list li{
    width: 33%;
    /* padding: 0 10px; */
    text-align: center;
    /* display: flex; */
    float: left;
    padding-top: 10px;
    /* align-items: center; */
    /* width: 100%; */
    height: 70px;
    cursor: pointer;
    /* background-color: aliceblue; */
}
.category-list li:hover{
    .category-list-around span{
        color: black;
    }
    /* border-radius: 5px; */
    font-weight: 600;
    /* background-color: rgb(225, 235, 245); */
}
.category-list li img{
    width: 30px;
    height: 30px;
    margin: 0 auto;
}
.category-list-around{
    width: 40%;
    text-align: center;
    margin: 0 auto;
}
.category-list-around span{
    font-size: 12px;
    color: gray;
}
</style>