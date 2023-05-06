<template>
    <div class="edit">
        <div class="edit-title">
            <span class="el-icon-edit-outline icon"></span>
            <!-- <img src="@/assets/edit_red.png" alt=""> -->
            <span>开始你的创作</span>
        </div>
        <div class="edit-content">
            <div @click="toOtherPage('questionList')" class="category-list-around">
                <img src="@/assets/answer.png" alt="">
                <p>回答问题</p>
            </div>
            <div @click="question()" class="category-list-around">
                <img src="@/assets/question.png" alt="">
                <p>提问</p>
            </div>
        </div>
        <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
            <div class="question-content">
                <el-input
                style="font-size:22px;color: black;"
                type="textarea"
                :rows="2"
                maxlength="50"
                placeholder="描述你的问题"
                resize="none"
                show-word-limit
                v-model="queryParam.title">
                </el-input>
            </div>
            <div>
                <el-input
                style="font-size:18px"
                type="textarea"
                :rows="6"
                placeholder="问题详细描述(选填)"
                resize="none"
                v-model="queryParam.content">
                </el-input>
            </div>
            <div class="answer-type">
                <el-radio-group v-model="queryParam.type">
                    <el-radio :label="0">大学</el-radio>
                    <el-radio :label="1">高中</el-radio>
                </el-radio-group>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitQuestion">发布问题</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {addQuestion} from '@/api/discover/student'
export default {
    name:'SideItem',
    data(){
        return{
            dialogVisible:false,
            queryParam:{
                title:'',
                content:'',
                type:0,
            }
        }
    },
    methods:{
        question(){
            if(!this.$store.state.main.isLogin){
                this.$message.error('请先登录！');
                return;
            }
            this.dialogVisible = true;
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        toOtherPage(page){
            this.$router.push({
                name:page
            },()=>{})
        },
        submitQuestion(){
            if(this.queryParam.title.trim() != '' && this.queryParam.type != null){
                addQuestion(this.queryParam).then((response)=>{
                    this.$message.success('发布成功');
                    this.dialogVisible = false
                })
            }else{
                this.$message.warning('问题内容不能为空！');
            }
        }
    }

}
</script>

<style scoped lang="less">
.edit{
    margin: 0 0 0 10px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
}
.edit-title{
    display: flex;
    align-items: center;
    .icon{
        font-size: 24px;
        color: #00AEEC;
        margin-right: 10px;
    }
    span{
        font-size: 13px;
    }
}
.edit-content{
    margin-top: 20px;
    display: flex;
    
}
.category-list-around{
    // width: 40%;
    // height: 50px;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    img{
        width: 25px;
        height: 25px;
        margin: 0 auto;
    }
    p{
        margin-top: 5px;
        font-size: 12px;
        color: gray;
    }
}
.category-list-around:hover{
    p{
        color: black;
    }
}
.answer-type{
    margin: 10px;
}
::v-deep .question-content .el-textarea__inner{
    border: 0;
}
</style>