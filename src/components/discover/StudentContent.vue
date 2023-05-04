<template>
  <div>
    <div class="student-info-content">
        <div v-for="item in 3" class="student-info-content-item">
            <div class="student-info-content-item-img">
                <span>1</span>
            </div>
            <div>
                <div class="student-info-content-item-title">
                <span>
                    <a href="">话题2222222222222222222222222</a>
                </span>
                </div>
                <div class="student-info-content-item-num">
                    <span>讨论度 · </span>
                    <span>回答</span>
                </div>
            </div>
        </div>
    </div>
    <div class="to-student-info">
        <!-- <el-link href="#" :underline="false" target="_blank">查看全部内容 ></el-link> -->
        <router-link to="/studentMain/studentIndex">查看全部内容</router-link>
        <!-- <span>查看全部内容 ></span> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.student-info-content{
    width: 460px;
    margin: 10px auto;
    border-top: 1px solid rgb(231, 231, 231);
}
.student-info-content-item{
    margin-top: 15px;
    display: flex;
}
.student-info-content-item-img{
    margin-right: 5px;
}
.student-info-content-item-title{
    font-size: 15px;
    a{
        color: black;
    }
    font-weight: 600;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.student-info-content-item-num{
    margin-top: 5px;
    font-size: 12px;
    color: gray;
}.to-student-info{
    margin: 20px 15px;
    font-size: 14px;
    color: gray;
}
</style>