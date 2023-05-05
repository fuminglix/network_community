<template>
    <div class="question-container">
        <div v-for="item in questionList" :key="item.id" class="questionList-content">
            <div class="question">
                <div class="question-content">
                    <div class="author">
                        <el-image 
                        style="width: 26px; height: 26px;border-radius: 13px;"
                        :src="item.user.avatar" 
                        fit="cover">
                        </el-image>
                        <span>{{ item.user.nickName }} 的提问</span>
                    </div>
                    <div class="content-title">
                        <p @click="answer('answer',item.id)">{{ item.title }}</p>
                    </div>
                    <div class="other">
                        <span>其他信息</span>
                    </div>
                </div>
                <div class="edit">
                    <el-button type="primary" @click="answer('write',item.id)">回答</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {questionList} from '@/api/discover/student'
export default {
    name:'QuestionList',
    data(){
        return{
            squareUrl:'',
            queryParam:{
                pageNum: 1,
                pageSize: 10,
            },
            questionList:[]
        }
    },
    methods:{
        answer(page,id){
            console.log("id",id)
            this.$router.push({
                name:page,
                query:{
                    questionId: id,
                }
                // name:'answer'
            },()=>{})
        },
        getQuestionList(){
            questionList(this.queryParam).then((response)=>{
                this.questionList = response.rows
            })
        }
    },
    created(){
        this.getQuestionList()
    }
}
</script>

<style scoped lang="less">
.question-container{
    width: 100%;
    border-radius: 5px;
}
.questionList-content{
    width: 100%;
    background-color: white;
    border-radius: 5px;
    border-bottom: 1px solid rgb(218, 218, 218);
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
.content-title{
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
        font-size: 14px;
        color: gray;
    }
}
</style>