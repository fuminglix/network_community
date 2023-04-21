<template>
    <div class="Quote-item-info">
        <div class="Quote-item-info-title">
            <div class="Quote-item-info-title-avatar">
                <el-avatar :size="38" :src="articleObj.user.avatar"></el-avatar>
            </div>
            <div class="Quote-item-info-author">
                <div class="Quote-item-info-author-name">
                    <span>{{ articleObj.user.nickName }}</span>
                </div>
                <div class="Quote-item-info-time">
                    <span>{{ articleObj.createTime }}</span>
                    <!-- <span>1小时前 · 发表</span> -->
                </div>
            </div>
        </div>
        <div class="Quote-item-info-content">
            <div class="Quote-item-info-report-content">
                <p class="Quote-item-info-report-content-describe">
                    <!-- <span>1121</span> -->
                </p>
                <div v-if="articleObj.activityContentVo == null">
                    <div class="title">
                        <span>
                            <router-link
                            target="_blank"
                            :to="{
                            path:'/ArticleMain',
                            query:{
                                articleId:articleObj.id,
                                authorId:articleObj.user.id
                            },
                            }"
                            >{{ articleObj.title }}</router-link>
                            <!-- <el-link :underline="false" href="http://localhost:8080/#/ArticleMain" target="_blank">{{ articleObj.article.title }}</el-link> -->
                        </span>
                    </div>
                    <div class="summary">
                        <span>
                            <p class="summary-text">
                            {{ articleObj.summary }}
                            </p>
                        </span>
                    </div>
                </div>
                <p v-else >
                    <span :class="retract(articleObj.activityContentVo.id) > 0 ? 'Quote-item-info-report-content-text-show' : null" class="Quote-item-info-report-content-text" v-html="replaceContent(articleObj.activityContentVo.content)"></span>
                    <span style="cursor: pointer;color:#00AEEC" @click="isShow(articleObj.activityContentVo.id)">{{ retract(articleObj.activityContentVo.id) > 0 ? '收起' : '展开' }}</span>
                </p>
                
                <!-- <span style="cursor: pointer;color:#00AEEC"></span> -->
            </div>
        </div>
        <div v-if="articleObj.thumbnail != null" class="Quote-item-info-content-img">
            <span>
                <el-image 
                style="width: 180px; height: 180px"
                :src="articleObj.thumbnail" 
                fit="cover">
                </el-image>
            </span>
        </div>
        <div v-if="articleObj.activityContentVo != null" class="Quote-item-info-content-img">
            <span v-if="articleObj.activityContentV.contentImg != null">
                <span v-for="url in articleObj.activityContentVo.contentImg">
                    <el-image 
                    style="width: 180px; height: 180px"
                    :src="url" 
                    :preview-src-list="articleObj.activityContentVo.contentImg"
                    fit="cover">
                    </el-image>
                </span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'QuoteItem',
    data(){
        return{
            circleUrl:'',
            url: '',
            showObj:{
                showContentArr:[],
                showCommentArr:[]
            },
            srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
        }
    }
    ,props:{
        articleObj:Object,
    },
    methods:{
        isShow(id){
            const temp = this.showObj.showContentArr.filter((n)=>{return n==id})
            if( temp.length){
                this.showObj.showContentArr = this.showObj.showContentArr.filter((n)=>{
                    return n != id;
                })
                return;
            }
            this.showObj.showContentArr.push(id)
        },
        retract(id){
            const temp = this.showObj.showContentArr.filter((n)=>{
                return n==id;
            })
            if(temp.length) return temp.pop(0);
            return 0;
        },
        replaceContent(txt) {
            txt = txt.replace(new RegExp(' ', 'gm'), '&nbsp;') // gm 全局替换
            const arr = []
            txt.split('\n').forEach(item => {
                arr.push(`<p>${item.trim()}</p>`)
            })
            txt = arr.join('')
            // this.form.content = txt
            return txt;
            // console.log("result",txt)
        },
    },
    created(){
        // console.log("articleObj",articleObj)
    }
}
</script>

<style scoped lang="less">
.Quote-item-info{
    /* margin-left: 60px; */
    width: 95%;
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(235, 235, 235);
}
.Quote-item-info-title{
    display: flex;
    align-items: center;
}
.Quote-item-info-author{
    margin-left: 10px;
}
.Quote-item-info-author-name{
    font-size: 13px;
}
.Quote-item-info-time{
    margin-top: 10px;
    font-size: 10px;
    color: gray;
}
.Quote-item-info-content{
    margin-top: 5px;
}
.Quote-item-info-report-content-describe{
    margin-bottom: 5px;
    span{
        font-size: 14px;
    }
}
.Quote-item-info-report-content-text{
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}
.title span a{
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    color: black;

    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.summary{
    width: 100%;
    display: flex;
    align-items: top;
    font-size: 15px;
}
.summary-text{
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.Quote-item-info-content-img{
    width: 100%;
    padding: 10px 0;
    span{
        margin: 2px;
        width: 200px;
        height: 200px;
    }
}
.Quote-item-info-report-content-text-show{
    display: block;
}
</style>