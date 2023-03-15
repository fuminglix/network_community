<template>
    <div class="configMsg-content">
        <div class="configMsg-content-title">
            <span>消息设置</span>
        </div>
        <div class="configMsg-content-around">
            <div class="configMsg-content-remind">
                <span>消息提醒</span>（关闭后，消息将不再进行提醒）
                <div class="configMsg-content-remind-radio">
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="0">关闭</el-radio>
                </div>
            </div>
            <div class="configMsg-content-reply">
                <span>回复我的消息提醒</span>（接受谁的评论消息提醒）
                <div class="configMsg-content-reply-radio">
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="0">关闭</el-radio>
                </div>
            </div>
            <div class="configMsg-content-reply">
                <span>@我的消息提醒</span>（接受谁的@消息提醒）
                <div class="configMsg-content-reply-radio">
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="0">关闭</el-radio>
                </div>
            </div>
            <div class="configMsg-content-reply">
                <span>收到的赞消息提醒</span>
                <div class="configMsg-content-reply-radio">
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="0">关闭</el-radio>
                </div>
            </div>
            <div class="configMsg-content-stranger">
                <span>收起未关注人消息</span>（开启后，未关注人消息将被折叠起来）
                <div class="configMsg-content-stranger-radio">
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="0">关闭</el-radio>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ConfigMsg',
    data(){
        return{
            radio:'1'
        }
    }
}
</script>

<style scoped lang="less">
.configMsg-content{
    margin-left: 10px;
    border-radius: 5px;
}
.configMsg-content-title{
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(221, 221, 221);
    span{
        font-size: 15px;
    }
}
.configMsg-content-around{
    margin-top: 10px;
    padding: 20px;
    background-color: white;
}
.configMsg-content-remind{
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(225, 225, 225);
    color: gray;
    span{
        color:black;
    }
}
.configMsg-content-remind-radio{
    position: absolute;
    right: 0;
}
.configMsg-content-reply{
    padding: 20px 0;
    position: relative;
    border-bottom: 1px solid rgb(225, 225, 225);
    color: gray;
    span{
        color: black;
    }
}
.configMsg-content-reply-radio{
    position: absolute;
    right: 0;
    top: 25px;
}
.configMsg-content-stranger{
    padding: 20px 0;
    position: relative;
    border-bottom: 1px solid rgb(225, 225, 225);
}
.configMsg-content-stranger-radio{
    position: absolute;
    right: 0;
    top: 25px;
}
</style>