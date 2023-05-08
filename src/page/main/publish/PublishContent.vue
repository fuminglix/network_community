<template>
    <div class="buildMain-content">
        <div class="buildMain-content-top">
            <div class="buildMain-content-top-title">
                <!-- <span>标题</span> -->
                <el-input
                style="font-size:22px;"
                type="textarea"
                :rows="1"
                placeholder="请输入标题"
                maxlength="30"
                show-word-limit
                v-model="articleObj.title">
                </el-input>
                <p></p>
                <el-input
                style="font-size:22px;"
                type="textarea"
                :rows="2"
                placeholder="请输入文章摘要"
                maxlength="100"
                show-word-limit
                v-model="articleObj.summary">
                </el-input>
            </div>
        </div>
        <div class="buildMain-content-main">
            <mavon-editor 
            ref="mdedit" 
            v-model="articleObj.content"
            style="height: 100%; width: 100%;"
            @imgAdd="addImg">
            </mavon-editor>
        </div>
        <div class="buildMain-content-footer">
            <div class="buildMain-content-footer-setting">
                <div style="width:30%">
                    <div class="buildMain-content-footer-category">
                        <span>类别</span>
                        <el-select v-model="articleObj.categoryId" placeholder="请选择类别">
                            <el-option
                            v-for="item in categoryOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            :disabled="item.disabled">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="buildMain-content-footer-tags">
                        <div class="buildMain-content-footer-tags-input">
                            <span>标签</span>
                            <div>
                                <el-input 
                                :disabled="tagsList.length==10 ? true : false"
                                v-model.trim="inputTag" 
                                @change="addTag(inputTag)" 
                                placeholder="请输入标签  按回车添加"></el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buildMain-content-footer-showTags">
                    <el-tag 
                    effect="dark"
                    size="medium "
                    v-if="tagsList.length" 
                    v-for="item in tagsList" 
                    closable 
                    @close="delTags(item.tId)" 
                    :key="item.tId">{{ item.tagName }}</el-tag>
                </div>
            </div>
            <div class="buildMain-content-footer-options">
                <div class="buildMain-content-footer-type-around">
                    <div class="buildMain-content-footer-type">
                        <span>文章类型</span>
                        <el-radio v-model="articleObj.articleType" label="0">原创</el-radio>
                        <el-radio v-model="articleObj.articleType" label="1">转载</el-radio>
                    </div>
                    <div class="buildMain-content-footer-style">
                        <span>发布形式</span>
                        <el-radio v-model="articleObj.releaseForm" label="0">全部可见</el-radio>
                        <el-radio v-model="articleObj.releaseForm" label="1">仅我可见</el-radio>
                        <el-radio v-model="articleObj.releaseForm" label="2">粉丝可见</el-radio>
                    </div>
                    <div class="buildMain-content-footer-comment">
                        <span>是否允许评论</span>
                        <el-switch
                            v-model="articleObj.isComment"
                            active-color="#2389e3"
                            inactive-color="#d9d9d9"
                            :active-value="1"
                            :inactive-value="0">
                        </el-switch>
                    </div>
                    <div class="buildMain-content-footer-community">
                        <span>同时发布到我的社区</span>
                        <el-switch
                            v-model="isDispatch"
                            active-color="#2389e3"
                            inactive-color="#d9d9d9"
                            :active-value="true"
                            :inactive-value="false">
                        </el-switch>
                        <div v-if="isDispatch" class="buildMain-content-footer-Scheduled-time">
                            <el-select v-model="articleObj.communityId" placeholder="请选择社区">
                                <el-option
                                v-for="item in communityOptions"
                                :key="item.id"
                                :label="item.communityName"
                                :value="item.id"
                                :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="buildMain-content-footer-Scheduled">
                        <span>定时发布</span>
                        <el-switch
                            v-model="isScheduled"
                            active-color="#2389e3"
                            inactive-color="#d9d9d9"
                            :active-value="true"
                            :inactive-value="false">
                        </el-switch>
                        <div v-if="isScheduled" class="buildMain-content-footer-Scheduled-time">
                            <el-date-picker
                            style="margin-right:20px"
                            v-model="scheduledDate.day"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                            <el-time-picker
                                v-model="scheduledDate.time"
                                :picker-options="{
                                }"
                                placeholder="任意时间点">
                            </el-time-picker>
                        </div>
                    </div>
                    <div class="buildMain-content-footer-publishStyle">
                        <el-button type="primary" @click="handleSubmit(true)" round>发布</el-button>
                        <el-button v-if="isEdit" type="info" @click="handleSubmit(false)" round>草稿箱</el-button>
                    </div>
                </div>
                <div class="buildMain-content-footer-img">
                    <span>添加缩略图</span>
                    <div class="upload">
                        <el-upload
                        :file-list="fileList"
                        :http-request="handleUpload"
                        :on-remove="fileRemove"
                        :on-exceed="overflow"
                        :limit=1
                        action="upload"
                        list-type="picture-card">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                            <img
                                class="el-upload-list__item-thumbnail"
                                :src="file.url" alt=""
                            >
                            <span class="el-upload-list__item-actions">
                                <span
                                class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)"
                                >
                                <i class="el-icon-zoom-in"></i>
                                </span>
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)"
                                >
                                <i class="el-icon-download"></i>
                                </span>
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="fileRemove(file)"
                                >
                                <i class="el-icon-delete"></i>
                                </span>
                            </span>
                            </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
import {addArticle,category} from '@/api/article'
import { getArticle,updateArticle } from '@/api/manage/article'
import {myCommunityList} from '@/api/community'
import {uploadImg} from '@/api/upload'
export default {
    name:'PublishContent',
    data(){
        return{
            isScheduled:false,
            isDispatch:false,
            isEdit:true,
            updateArticleId:0,
            inputTag:'',
            tagsList:[],
            dialogImageUrl:'',
            dialogVisible: false,
            disabled: false,
            categoryOptions: [],
            communityOptions: [],
            categoryValue: '',
            communityValue:'',
            fileList:[],
            scheduledDate:{
                day:'',
                time:'',
            },
            config: {
                toolbar: [
                    [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript' ]
                ],
                height: 300      
            },
            articleObj:{
                title:'',
                summary:'',
                content:'',
                categoryId:'',
                communityId:'',
                tags:[],
                thumbnail:'',
                isTop:0,
                isComment:'1',
                articleType:'1',
                releaseForm:'1',
                status:'',
                scheduled:'',
            }
        }
    },
    methods:{
        handleSubmit(isSubmit){
            let {title,summary,content,categoryId} = this.articleObj
            if(title.trim() == ''){
                this.$message.error('标题不能为空！')
                return;
            }
            if(summary.trim() == ''){
                this.$message.error('摘要不能为空！')
                return;
            }
            if(content.trim() == ''){
                this.$message.error('内容不能为空！')
                return;
            }
            if(categoryId.trim() == ''){
                this.$message.error('分类不能为空！')
                return;
            }
            this.articleObj.status = '2'
            if(!isSubmit){
                this.articleObj.status = '1'
            }
            this.articleObj.tags = this.tagsList;
            if(this.isEdit){ 
                addArticle(this.articleObj).then((response)=>{
                    this.articleObj.status === '1' ? this.$message.success('已保存到草稿箱中！') : this.$message.success('文章发布成功！');
                    window.location.reload();
                })
                return;
            }
            updateArticle(this.articleObj).then((response)=>{
                this.$message.success('修改成功！')
                this.$router.push({
                    name:'articleManage'
                })
            })
        },
        addTag(msg){ //添加标签
            this.inputTag = ''
            console.log("===>"+this.tagsList.length)
            const temp = this.tagsList.filter((tag)=>{
                return tag.tagName == msg
            })
            if(temp.length){
                alert("标签已存在！");
                return;
            }
            if(this.tagsList.length == 0){
                this.tagsList.unshift({tId:1,tagName:msg});
                return;
            }
            this.tagsList.unshift({tId:(this.tagsList[0].tId)+1,tagName:msg})
            if(this.tagsList.length == 10){
                const h = this.$createElement;
                this.$notify.warning({
                    title: '警告',
                    message: '标签已足够!'
                });
            }
        },
        // 绑定@imgAdd event
        addImg(pos, file) {
            // 第一步.将图片上传到服务器.
            uploadImg(file).then(response => {
                this.$refs.mdedit.$img2Url(pos, response)
            }).catch(error => {
                this.$message.error(error.msg)
            })
        },
        handleUpload(img) { //上传缩略图
            uploadImg(img.file).then(response => {
                this.articleObj.thumbnail = response
                this.fileList.push({ name: img.file.name, url: response })
            }).catch(error => {
                this.$message.error(error.msg)
            })
        },
        delTags(id){ //删除标签
            this.tagsList = this.tagsList.filter((tag)=>{
                return tag.tId != id;
            })
        },
        fileRemove(){ //删除缩略图
            this.fileList.pop()
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        overflow(){
            const h = this.$createElement;
            this.$notify.error({
                title: '错误',
                message: '只能上传一张缩略图!'
            });
        },
        getCategory(){ //获取分类列表
            category().then((response)=>{
                console.log("getCategory",response)
                this.categoryOptions = response
            })
        },
        routeChange(){
            this.getCategory()
            this.updateArticleId = this.$route.query.articleId
            console.log("=>",this.$router)
        },
    },
    computed:{
        userInfo(){ //获取当前登录用户信息
            // console.log("=>",this.$store.state.main.userInfo)
            return this.$store.state.main.userInfo
        },
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route':'routeChange',
        '$store.state.keywords':'routeChange',
        isDispatch(newValue,oldValue){ //获取当前用户已加入的社区列表
            if(newValue){
                myCommunityList(this.userInfo.id).then((response)=>{
                    console.log(response)
                    this.communityOptions = response.rows
                })
            }
        },
        updateArticleId(newValue,oldValue){
            if(newValue){
                this.isEdit = false
                getArticle(newValue).then((response)=>{
                    console.log("response",response)
                    
                    for(let i in response)for(let k in this.articleObj)if(i==k)this.articleObj[i]=response[k]
                    this.articleObj.isComment = parseInt(response.isComment)
                    this.fileList.push({ name: '', url: response.thumbnail })
                    this.tagsList = response.tags == null ? this.tagsList : response.tags;
                    this.$set(this.articleObj,'id',response.id)
                    if(response.communityId != '0'){
                        this.isDispatch = true
                    }
                    console.log("this.articleObj",this.articleObj)
                })
            }
        }
    },
    created(){ //生命周期函数
        // console.log(this.$route);
        var that = this;
        that.routeChange();
    }
}
</script>

<style scoped lang="less">
.buildMain-content{
    width: 100%;
    height: 71vh;
    // overflow: scroll;
    // overflow-x: hidden;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    padding: 20px 60px;
    border-radius: 5px;
}
.buildMain-content-top{
}
.buildMain-content-top-title{
    width: 100%;
    font-weight: 600;
    p{
        height: 20px;
    }
}
.buildMain-content-main{
    margin-top: 10px;
}
.buildMain-content-footer{
    // height: 40vh;
}
.buildMain-content-footer-setting{
    width: 100%;
    display: flex;
    padding: 20px 0;
   
}
.buildMain-content-footer-category {
    width: 100%;
    display: flex;
    align-items: center;
    span:first-child{
        font-size: 18px;
        font-weight: 600;
        width: 50px;
    }
}
.buildMain-content-footer-tags{
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
}
.buildMain-content-footer-tags-input{
    width: 100%;
    display: flex;
    align-items: center;
    span{
        width: 50px;
        font-size: 18px;
        font-weight: 600;
    }
}
.buildMain-content-footer-showTags{
    width: 70%;
    overflow-y: scroll;
    height: 15vh;
    padding: 0 20px;
    
    span{
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
.buildMain-content-footer-options{
    display: flex;
}
.buildMain-content-footer-type-around{
    width: 50%;
}
.buildMain-content-footer-type{
    span{
        font-size: 18px;
        font-weight: 600;
        margin-right: 20px;
    }
}
.buildMain-content-footer-style{
    margin-top: 30px;
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
.buildMain-content-footer-community{
    margin-top: 30px;
    span{
        font-size: 18px;
        font-weight: 600;
        margin-right: 20px;
    }
}
.buildMain-content-footer-Scheduled{
    margin-top: 30px;
    span{
        font-size: 18px;
        font-weight: 600;
        margin-right: 20px;
    }
}
.buildMain-content-footer-Scheduled-time{
    padding: 20px 0 10px 0;
}
.buildMain-content-footer-publishStyle{
    padding: 20px 0;
    button{
        width: 100px;
        margin-right: 20px;
    }
}
.buildMain-content-footer-img{
    width: 50%;
    span:first-child{
        font-size: 18px;
        font-weight: 600;
        width: 100px;
    }
    .upload{
        margin-top: 10px;
    }
}
::v-deep .el-textarea__inner{
    border: 0;
    border-bottom: 1px solid rgb(220, 220, 220);
    font-family: Microsoft YaHei;
    // font-size: 15px;
    // font-weight: 600;
    color: black;
    padding: 5px 0;
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
