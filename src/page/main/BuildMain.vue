<template>
    <div class="buildMain-content">
        <div class="buildMain-content-top">
            <div class="buildMain-content-top-left">
                <div class="buildMain-content-top-title">
                    <span>标题</span>
                    <el-input
                    type="textarea"
                    
                    :rows="2"
                    placeholder="请输入标题"
                    maxlength="30"
                    show-word-limit
                    v-model="textarea1">
                    </el-input>
                </div>
                <div class="buildMain-content-top-setting">
                    <div>
                        <div class="buildMain-content-top-category">
                            <span>类别</span>
                            <el-select v-model="value" placeholder="请选择类别">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="buildMain-content-top-tags">
                            <div class="buildMain-content-top-tags-input">
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
                    <div class="buildMain-content-top-showTags">
                        <el-tag 
                        effect="dark"
                        size="medium "
                        v-if="tagsList.length" 
                        v-for="item in tagsList" 
                        closable 
                        @close="delTags(item.id)" 
                        :key="item.id">{{ item.text }}</el-tag>
                    </div>
                </div>
            </div>
            <div class="buildMain-content-top-right">
                <div class="buildMain-content-top-img">
                    <span>添加缩略图</span>
                    <div class="upload">
                        <el-upload
                        :on-exceed="overflow"
                        :limit=1
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false">
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
                                @click="handleRemove(file)"
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
        <div class="buildMain-content-main">
            <mavon-editor 
            ref="mdedit" 
            style="height: 100%; width: 100%;height: 80vh"
            ></mavon-editor>
        </div>
    </div>
</template>

<script>
export default {
    name:'BuildMain',
    data(){
        return{
            inputTag:'',
            textarea1:'',
            tagsList:[],
            dialogImageUrl:'',
            dialogVisible: false,
            disabled: false,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶',
                disabled: true
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
                value: ''
        }
    },
    methods:{
        addTag(msg){
            this.inputTag = ''
            console.log("===>"+this.tagsList.length)
            const temp = this.tagsList.filter((tag)=>{
                return tag.text == msg
            })
            if(temp.length){
                alert("标签已存在！");
                return;
            }
            if(this.tagsList.length == 0){
                this.tagsList.unshift({id:1,text:msg});
                return;
            }
            this.tagsList.unshift({id:(this.tagsList[0].id)+1,text:msg})
            if(this.tagsList.length == 10){
                const h = this.$createElement;
                this.$notify.warning({
                    title: '警告',
                    message: '标签已足够!'
                });

            }
        },
        delTags(id){
            this.tagsList = this.tagsList.filter((tag)=>{
                return tag.id != id;
            })
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
        }
    },
    computed:{
    }
}
</script>

<style scoped lang="less">
.buildMain-content{
    width: 1000px;
    margin: 0 auto;
    padding: 10px 0;
}
.buildMain-content-top{
    // width: 100%;
    display: flex;
}
.buildMain-content-top-left{
    width: 70%;
}
.buildMain-content-top-title{
    width: 100%;
    display: flex;
    align-items: center;
    span{
        font-size: 18px;
        font-weight: 600;
        margin-right: 5px;
        width: 50px;
    }
}
.buildMain-content-main{
    margin-top: 10px;
}
.buildMain-content-top-setting{
    width: 100%;
    
    display: flex;
    padding: 20px 0;
   
}
.buildMain-content-top-category {
    width: 100%;
    display: flex;
    align-items: center;
    span:first-child{
        font-size: 18px;
        font-weight: 600;
        width: 50px;
        // margin-right: 10px;    
    }
}
.buildMain-content-top-tags{
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    // margin-left: 10px;
}
.buildMain-content-top-tags-input{
    // width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    span{
        width: 50px;
        font-size: 18px;
        font-weight: 600;
    }
}
.buildMain-content-top-showTags{
    // padding: 10px 50px;
    // background-color: yellowgreen;
    // height: 10vh;
    width: 50%;
    
    overflow-y: scroll;
    height: 15vh;
    padding: 0 20px;
    
    span{
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
.buildMain-content-top-right{
    width: 50%;
    // padding-left: 100px;
}
.buildMain-content-top-img{
    // display: flex;
    padding-left: 50px;
    span:first-child{
        font-size: 18px;
        font-weight: 600;
        width: 100px;
    }
    .upload{
        margin-top: 10px;
    }
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
