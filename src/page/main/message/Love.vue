<template>
    <div class="love-content">
        <div class="love-content-title">
            <span>收到的赞</span>
        </div>
        <div class="love-content-item-around">
            <div v-for="item in 5" class="love-content-item">
                <div class="love-content-img">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
                <div class="love-content-userInfo">
                    <div class="love-content-userInfo-title">
                        <span>fuminglix</span>赞了我的评论
                    </div>
                    <div class="love-content-userInfo-time">
                        <p>
                            <span>2022年5月13日 12:08</span>
                        </p>
                    </div>
                </div>
                <div class="love-content-msg">
                    <span>2222222222222222222222222222
                        22222222222222222222222222222222222222222222222222222222
                        22222222222222222222222222222222222222222222222222222222
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Love',
    data(){
        return{
            circleUrl:''
        }
    }
}
</script>

<style scoped lang="less">
.love-content{
    margin-left: 10px;
    border-radius: 5px;
}
.love-content-title{
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(221, 221, 221);
    span{
        font-size: 15px;
    }
}
.love-content-item-around{
    padding: 10px 20px;
    background-color: white;
}
.love-content-item{
    padding-top: 20px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.love-content-userInfo{
    width: 50%;
    padding-left: 10px;
}
.love-content-userInfo-title{
    font-size: 14px;
    color: gray;
    span{
        font-size: 15px;
        font-weight: 600;
        margin-right: 20px;
        color: black;
    }
}
.love-content-userInfo-info{
    span{
        line-height: 1.6;
        font-size: 15px;
    }
}
.love-content-userInfo-time{
    display: flex;
    margin-top: 10px;
    align-items: center;
    p{

    }
    span{
        margin-right: 12px;
        font-size: 12px;
        color: gray;
    }
}
.love-content-msg{
    width: 40%;
    background-color: rgb(226, 226, 226);
    border-radius: 5px;

    span{
        color: gray;
        line-height: 1.6;
        word-break: break-all;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
}
</style>