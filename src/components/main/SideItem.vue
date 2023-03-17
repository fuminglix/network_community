<template>
  <div>
    <div v-for="item in 2" class="other-article-list">
        <!-- <span class="el-icon-tickets tickets-icon"></span> -->
        <img src="@/assets/at.png" alt="">
        <div class="other-article-list-title">
            <span>第一篇文章</span>
            <div class="other-article-list-data">
                <span>数据</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
.other-article-list{
    margin: 10px 0 20px 0;
    display: flex;
    img{
        width: 24px;
        height: 24px;
    }
}
.tickets-icon{
    font-size: 20px;
}
.other-article-list-title{
    margin-left: 5px;
    font-size: 14px;
}
.other-article-list-data{
    color: gray;
}
</style>