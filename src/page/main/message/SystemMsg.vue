<template>
    <div class="systemMsg-content">
        <div class="systemMsg-content-title">
            <span>系统消息</span>
        </div>
        <div class="systemMsg-content-item-around">
            <div v-for="item in 5" class="systemMsg-content-item">
                <div class="systemMsg-content-userInfo">
                    <div class="systemMsg-content-userInfo-title">
                        <span>title</span>
                        <p class="systemMsg-content-userInfo-time">
                            <span>2022年5月13日 12:08</span>
                        </p>
                    </div>
                    <div class="systemMsg-content-userInfo-info">
                        <span>222222222222222222222222222222222222222222222222222222222
                            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SystemMsg',
    data(){
        return{
            circleUrl:''
        }
    }
}
</script>

<style scoped lang="less">
.systemMsg-content{
    margin-left: 10px;
    border-radius: 5px;
}
.systemMsg-content-title{
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(221, 221, 221);
    span{
        font-size: 15px;
    }
}
.systemMsg-content-item-around{
    padding: 10px 0x;
    // background-color: white;
}
.systemMsg-content-item{
    border-radius: 5px;
    margin-top: 10px;
    padding-top: 20px;
    display: flex;
    padding-bottom: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.systemMsg-content-userInfo{
    width: 100%;
    padding-left: 10px;
}
.systemMsg-content-userInfo-title{
    font-size: 14px;
    color: gray;
    display: flex;
    align-items: center;
    span{
        font-size: 15px;
        font-weight: 600;
        margin-right: 20px;
        color: black;
    }
}
.systemMsg-content-userInfo-info{
    padding-left: 10px;
    span{
        line-height: 1.6;
        font-size: 15px;
        color: gray;
        word-break: break-all;
        word-wrap: break-word;
    }
}
.systemMsg-content-userInfo-time{
    display: flex;
    align-items: center;
    span{
        margin-right: 12px;
        font-size: 12px;
        color: gray;
    }
}
</style>