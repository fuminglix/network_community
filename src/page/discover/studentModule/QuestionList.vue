<template>
  <div class="QuestionList-content">
        <div class="question">
            <div class="question-content">
                <div class="author">
                    <el-image 
                    style="width: 26px; height: 26px;border-radius: 13px;"
                    :src="squareUrl" 
                    fit="cover">
                    </el-image>
                    <span>fumingli 的提问</span>
                </div>
                <div class="content">
                    <p>问题222222222222222222222222222222222222222222222222222222222222222222222222222
                        2222222222222222222222222222222222222222222222222222222222222222222222222222222
                    </p>
                </div>
                <div class="other">
                    <span>其他信息</span>
                </div>
            </div>
            <div class="edit">
                <el-button type="primary" @click="answer">回答</el-button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'QuestionList',
    data(){
        return{
            squareUrl:'',
        }
    },
    methods:{
        answer(){
            this.$router.push({
                // name:'write'
                name:'answer'
            },()=>{})
        }
    }
}
</script>

<style scoped lang="less">
.QuestionList-content{
    width: 100%;
    background-color: white;
    border-radius: 5px;
}
.question{
    // width: 100%;
    padding: 20px 10px;
    background-color: white;
    display: flex;
    .question-content{
        width: 90%;
    }
    .edit{
        width: 10%;
        display: flex;
        align-items: center;
    }
}
.author{
    display: flex;
    align-items: center;
    span{
        margin: 0 10px;
        font-size: 14px;
    }
}
.content{
    margin: 10px 0;
    p{
        width: 95%;
        font-size: 15px;
        font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
        word-break: break-all;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}
.other{
    span{
        color: gray;
    }
}
</style>