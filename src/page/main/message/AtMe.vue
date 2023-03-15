<template>
    <div class="atMe-content">
        <div class="atMe-content-title">
            <span>@我的</span>
        </div>
        <div class="atMe-content-item-around">
            <div v-for="item in 5" class="atMe-content-item">
                <div class="atMe-content-img">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
                <div class="atMe-content-userInfo">
                    <div class="atMe-content-userInfo-title">
                        <span>fuminglix</span>@我
                    </div>
                    <div class="atMe-content-userInfo-info">
                        <span>222222222</span>
                    </div>
                    <div class="atMe-content-userInfo-time">
                        <p>
                            <span>2022年5月13日 12:08</span>
                        </p>
                        <span class="el-icon-chat-dot-round" style="font-size: 13px;"> 回复</span>
                    </div>
                </div>
                <div class="atMe-content-msg">
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
    name:'AtMe',
    data(){
        return{
            circleUrl:''
        }
    }
}
</script>

<style scoped lang="less">
.atMe-content{
    margin-left: 10px;
    border-radius: 5px;
}
.atMe-content-title{
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(221, 221, 221);
    span{
        font-size: 15px;
    }
}
.atMe-content-item-around{
    padding: 10px 20px;
    background-color: white;
}
.atMe-content-item{
    padding-top: 20px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.atMe-content-userInfo{
    width: 50%;
    padding-left: 10px;
}
.atMe-content-userInfo-title{
    font-size: 14px;
    color: gray;
    span{
        font-size: 15px;
        font-weight: 600;
        margin-right: 20px;
        color: black;
    }
}
.atMe-content-userInfo-info{
    span{
        line-height: 1.6;
        font-size: 15px;
    }
}
.atMe-content-userInfo-time{
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
.atMe-content-msg{
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