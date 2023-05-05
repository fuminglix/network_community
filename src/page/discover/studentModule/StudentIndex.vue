<template>
    <div class="studentMain-content">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-bar">
            <el-tab-pane @click="getAnswerList(1)" label="高中" name="first"></el-tab-pane>
            <el-tab-pane @click="getAnswerList(0)" label="大学" name="second"></el-tab-pane>
        </el-tabs>
        <AnswerItem :answerList="answerList"></AnswerItem>
    </div>
</template>

<script>
import AnswerItem from '@/page/discover/studentModule/AnswerItem.vue'
import {answerList} from '@/api/discover/student'
import { mavonEditor } from 'mavon-editor'
export default {
    name:'StudentIndex',
    components:{
        AnswerItem
    },
    data(){
        return{
            answerList:null,
            activeName: 'second',
            queryParams:{
                pageNum: 1,
                pageSize: 10,
                type:null,
            }
        }
    },
    methods:{
        handleClick() {
            console.log("@@");
        },
        getAnswerList(type){
            this.queryParams.type = type
            answerList(this.queryParams).then((response)=>{
                const markdownIt = mavonEditor.getMarkdownIt()
                this.answerList = response.rows.filter((answer)=>{
                    answer.content = markdownIt.render(answer.content)
                    return true;
                })
                console.log("reponse=>",response)
            })
        }
    },
    created(){
        this.getAnswerList(0);
    }
}
</script>

<style lang="less">
.studentMain-content{
    width: 100%;
    background-color: white;
    border-radius: 5px;
    .tab-bar{
        margin: 0 10px;
    }
}
</style>