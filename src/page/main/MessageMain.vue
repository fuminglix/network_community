<template>
    <div class="messageMain-content">
        <div class="messageMain-content-left">
            <div class="messageMain-content-left-title">
                <span class="el-icon-chat-dot-square"> 消息中心</span>
            </div>
            <div class="messageMain-content-left-list">
                <ul>
                    <li @click="toMessagePage('reply')">
                        <div>
                            <span>回复我的</span>
                        </div>
                    </li>
                    <li @click="toMessagePage('atMe')">
                        <div>
                            <span>@我的</span>
                        </div>
                    </li>
                    <li @click="toMessagePage('love')">
                        <div>
                            <span>收到的赞</span>
                        </div>
                    </li>
                    <li @click="toMessagePage('systemMsg')">
                        <div>
                            <span>系统消息</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>我的消息</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="message-setting" @click="toMessagePage('configMsg')">
                <span class="el-icon-s-tools"> 消息设置</span>
            </div>
        </div>
        <div class="messageMain-content-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'MessageMain',
    components:{

    },
    data(){
        return{

        }
    },
    methods:{
        toMessagePage(page){
            this.$router.push({
                name:page
            },()=>{})
        }
    }
}
</script>

<style scoped lang="less">
.messageMain-content{
    width: 1000px;
    height: 89vh;
    margin: 10px auto;
    display: flex;
}
.messageMain-content-left{
    width: 15%;
    background-color: white;
    border-radius: 5px;
}
.messageMain-content-left-title{
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid rgb(234, 234, 234);
    span{
        font-size: 15px;
        font-weight: 600;
    }
}
.messageMain-content-left-list{
    li{
        width: 100%;
        height: 40px;
        text-align: center;
        // padding-left: 30px;
        line-height: 40px;
        font-size: 15px;
        font-weight: 600;
        color: rgb(95, 95, 95);
    }
}
.message-setting{
    text-align: center;
    padding-top: 10px;
    height: 40px;
    line-height: 30px;
    border-top: 1px solid rgb(234, 234, 234);
    span{
        font-size: 15px;
        font-weight: 600;
    }
}
.messageMain-content-right{
    width: 85%;
}
/*滚动条整体粗细样式*/
::-webkit-scrollbar {
    /*高宽分别对应横竖滚动条的尺寸*/
    width: 8px;
    height: 8px;
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
</style>