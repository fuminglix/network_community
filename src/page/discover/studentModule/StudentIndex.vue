<template>
    <div class="studentMain-content">
        <el-tabs v-model="queryParams.type" @tab-click="handleClick" class="tab-bar">
            <el-tab-pane label="中学" name="1"></el-tab-pane>
            <el-tab-pane label="大学" name="0"></el-tab-pane>
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
            queryParams:{
                pageNum: 1,
                pageSize: 10,
                type:0,
            }
        }
    },
    methods:{
        handleClick() {
            this.getAnswerList()
        },
        getAnswerList(){
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

<style scoped lang="less">
.studentMain-content{
    width: 100%;
    background-color: white;
    border-radius: 5px;
    .tab-bar{
        margin: 0 10px 0 10px;
    }
}
::v-deep .el-tabs__item{
    font-size: 16px;
    font-weight: 600;
}
</style>