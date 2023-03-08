<template>
    <div class="Quote-item-info">
        <div class="Quote-item-info-title">
            <div class="Quote-item-info-title-avatar">
                <el-avatar :size="38" :src="circleUrl"></el-avatar>
            </div>
            <div class="Quote-item-info-author">
                <div class="Quote-item-info-author-name">
                    <span>浮名里</span>
                </div>
                <div class="Quote-item-info-time">
                    <span>1小时前 · 发表</span>
                </div>
            </div>
        </div>
        <div class="Quote-item-info-content">
            <div class="Quote-item-info-report-content">
                <p class="Quote-item-info-report-content-text">222222222222222222222222222222222222
                    2222222222222222222222222222222222222222
                    222222222222222222222222222222222222
                    2222222222222222222222222222222222222222222222222222222222222222222222222222
                    2222222222222222222222222222222222222222
                    22222222222222222222222222222222222222222
                </p>
                <span style="cursor: pointer;color:#00AEEC"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'QuoteItem',
    data(){
        return{
            circleUrl:''
        }
    }
}
</script>

<style scoped>
.Quote-item-info{
    margin-left: 60px;
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(235, 235, 235);
}
.Quote-item-info-title{
    display: flex;
    align-items: center;
}
.Quote-item-info-author{
    margin-left: 10px;
}
.Quote-item-info-author-name{
    font-size: 13px;
}
.Quote-item-info-time{
    font-size: 10px;
    color: gray;
}
.Quote-item-info-content{
    margin-top: 10px;
}
.Quote-item-info-report-content-text{
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>