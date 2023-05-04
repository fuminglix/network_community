<template>
  <div class="write-content">
    <div class="question-describe">
        <h1>问题</h1>
        <p>详细描述2222222222222222222
            222222222222222222222222222
            22222222222222222
            细描述2222222222222222222
            222222222222222222222222222
            22222222222222222细描述2222222222222222222
            222222222222222222222222222
            22222222222222222细描述2222222222222222222
            222222222222222222222222222
            22222222222222222
        </p>
    </div>
    <div class="write">
        <mavon-editor 
        ref="mdedit" 
        v-model="writeObj.content"
        style="height: 100%; width: 100%;"
        @imgAdd="addImg">
        </mavon-editor>
    </div>
    <div class="setting">
        <div class="buildMain-content-footer-type">
            <span>匿名发布</span>
            <el-switch
                v-model="writeObj.isComment"
                active-color="#2389e3"
                inactive-color="#d9d9d9"
                :active-value="1"
                :inactive-value="0">
            </el-switch>
        </div>
        <div class="buildMain-content-footer-comment">
            <span>是否允许评论</span>
            <el-switch
                v-model="writeObj.isComment"
                active-color="#2389e3"
                inactive-color="#d9d9d9"
                :active-value="1"
                :inactive-value="0">
            </el-switch>
        </div>
        <div class="buildMain-content-footer-publishStyle">
            <el-button type="primary" @click="handleSubmit(true)" round>发布</el-button>
            <el-button v-if="isEdit" type="info" @click="handleSubmit(false)" round>草稿箱</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Write',
    data(){
        return{
            writeObj:{
                content:null,
                isComment:null,
            },
        }
    },
    methods:{
        // 绑定@imgAdd event
        addImg(pos, file) {
            // 第一步.将图片上传到服务器.
            uploadImg(file).then(response => {
                this.$refs.mdedit.$img2Url(pos, response)
            }).catch(error => {
                this.$message.error(error.msg)
            })
        },
        handleSubmit(isSubmit){
            // let {title,summary,content,categoryId} = this.articleObj
            // if(title.trim() == ''){
            //     this.$message.error('标题不能为空！')
            //     return;
            // }
            // if(summary.trim() == ''){
            //     this.$message.error('摘要不能为空！')
            //     return;
            // }
            // if(content.trim() == ''){
            //     this.$message.error('内容不能为空！')
            //     return;
            // }
            // if(categoryId.trim() == ''){
            //     this.$message.error('分类不能为空！')
            //     return;
            // }
            // this.articleObj.status = '2'
            // if(!isSubmit){
            //     this.articleObj.status = '1'
            // }
            // this.articleObj.tags = this.tagsList;
            // if(this.isEdit){ 
            //     addArticle(this.articleObj).then((response)=>{
            //         this.articleObj.status === '1' ? this.$message.success('已保存到草稿箱中！') : this.$message.success('文章发布成功！');
            //         window.location.reload();
            //     })
            //     return;
            // }
            // updateArticle(this.articleObj).then((response)=>{
            //     this.$message.success('修改成功！')
            //     this.$router.push({
            //         name:'articleManage'
            //     })
            // })
        },
    }
}
</script>

<style lang="less">
.write-content{
    width: 1000px;
    margin: 0 auto;
}
.question-describe{
    padding: 20px 10px;
    background-color: white;
    p{
        margin-top: 10px;
        font-size: 15px;
        font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
        word-break: break-all;
        word-wrap: break-word;
    }
}
.write{
    height: 400px;
    margin-top: 10px;
}
.setting{
    background-color: white;
    padding: 20px 100px;
    // width: 100%;
    margin: 0 auto;
}
.buildMain-content-footer-type{
    span{
        font-size: 18px;
        font-weight: 600;
        margin-right: 20px;
    }
}
.buildMain-content-footer-comment{
    margin-top: 30px;
    span{
        font-size: 18px;
        font-weight: 600;
        margin-right: 20px;
    }
}
.buildMain-content-footer-publishStyle{
    padding: 20px 0;
    button{
        width: 100px;
        margin-right: 20px;
    }
}
</style>