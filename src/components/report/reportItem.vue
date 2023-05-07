<template>
  <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        title="我要举报"
        :before-close="handleClose">
            <div class="report-content">
                <span class="report-span">请选择举报理由：</span>
                <div>
                    <el-radio-group class="radio-style" v-model="queryParam.reportCategory">
                        <el-radio :label="1">广告</el-radio>
                        <el-radio :label="2">色情</el-radio>
                        <el-radio :label="3">引战</el-radio>
                        <el-radio :label="4">政治</el-radio>
                        <el-radio :label="5">人身攻击</el-radio>
                        <el-radio :label="6">水内容</el-radio>
                        <el-radio :label="7">暴恐</el-radio>
                        <el-radio :label="8">其它</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div>
                <span class="report-span">详细的描述可以帮助审核人员快速处理问题。</span>
                <el-input
                style="font-size:18px"
                type="textarea"
                :rows="6"
                placeholder="请详细描述举报内容"
                resize="none"
                show-word-limit
                maxlength="128"
                v-model="queryParam.reportDescription">
                </el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="submitReport()">确定</el-button>
            </span>
        </el-dialog>
</template>

<script>
import {addReport} from '@/api/article'
export default {
    name:'ReportItem',
    data(){
        return{
            dialogVisible:false,
            title:'',
            queryParam:{
                reportDescription:'',
                reportCategory:null,
                type:null,
                contentId:null,
            }
        }
    },
    props:{
        show:Boolean,
        type:Number,
        contentId:Number,
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
                this.$bus.$emit('report')
                console.log("###")
                done();
            })
            .catch(_ => {});
        },
        toOtherPage(page){
            this.$router.push({
                name:page
            },()=>{})
        },
        submitReport(){
            if(this.queryParam.reportCategory != 0){
                addReport(this.queryParam).then((response)=>{
                    this.$message.success('发布成功');
                    this.dialogVisible = false
                    this.queryParam.reportCategory = 0
                    this.queryParam.reportDescription = ''
                    this.queryParam.type = null
                    this.queryParam.contentId = null
                })
            }else{
                this.$message.warning('问题内容不能为空！');
            }
            this.$bus.$emit('report')
        },
        closeDialog(){
            this.dialogVisible = false
            this.$bus.$emit('report')
            console.log("###")
        }
    },
    created(){
        this.dialogVisible = this.show
        this.queryParam.contentId = parseInt(this.contentId)
        this.queryParam.type = this.type
    }
}
</script>

<style scoped lang="less">
.radio-style{
    .el-radio{
        color: #000000;
        width: 30%;
        margin: 20px 0;
    }
}
.report-span{
    color: rgb(155, 155, 155);
    line-height: 30px;
}
::v-deep .report-content .el-textarea__inner{
    border: 0;
}
</style>