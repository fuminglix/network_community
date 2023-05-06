<template>
    <div class="answer-content">
        <div class="question">
            <h1>{{ questionObj.title }}</h1>
            <p>{{ questionObj.content }}</p>
        </div>
        <div class="answer">
            <Common>
                <template slot="content-left">
                    <div v-if="answerId != null" class="articleMain-content">
                        <div class="articleMain-content-left">
                            <div class="title">
                                <span>
                                    <!-- <el-link type="default" :underline="false" href="http://localhost:8080/#/ArticleMain" target="_blank">{{ articleObj.title }}</el-link> -->
                                </span>
                            </div>
                            <div class="article">
                                <span>
                                    <p class="article-text article-content markdown-body" v-html="answerObj.content"></p>
                                </span>
                            </div>
                            <Comment :articleId="answerObj.id"></Comment>
                        </div>
                    </div>
                    <div v-else>
                        <div v-for="item in answerList" :key="item.id" class="content">
                            <div class="content-left">
                                <div class="answer-author">
                                    <el-image 
                                    style="width: 26px; height: 26px;border-radius: 13px;"
                                    :src="item.user.avatar" 
                                    fit="cover">
                                    </el-image>
                                    <span>{{ item.user.nickName }} 的回答</span>
                                </div>
                                <div v-if="isShow(parseInt(item.id)) == item.id ? false : true" @click="getAnswer(item.id)" class="summary">
                                    <div v-if="item.thumbnail == null ? 0 : 1" class="summary-around">
                                        <!-- <img :src=item.thumbnail alt=""> -->
                                        <el-image
                                        style="width: 190px; height: 105px"
                                        :src="item.thumbnail"
                                        fit="cover"></el-image>
                                    </div>
                                    <span>
                                        <p class="summary-text" v-html="item.content">
                                        </p>
                                        <span @click="retract(parseInt(item.id))" class="preview-btn">展开</span>
                                    </span>
                                </div>
                                <div v-else class="summary">
                                    <span>
                                        <p class="summary-text-preview article-content markdown-body" v-html="item.content">
                                        </p>
                                        <span @click="retract(parseInt(item.id))" class="preview-btn">收起</span>
                                    </span>
                                </div>
                                <div class="interaction">
                                    <div class="interaction-left">
                                        <div class="thumbs-up">
                                        <img src="@/assets/thumbs-up3.png" alt="">
                                        <span>{{ item.loveCount }}</span> 点赞
                                        </div>
                                        <div class="comment">
                                            <img src="@/assets/comment3.png" alt="">
                                            <span>{{ item.commentCount }}</span> 条评论
                                        </div>
                                        <div class="share">
                                            <img src="@/assets/dispatch3.png" alt="">
                                            <span>{{ item.relayCount }}</span> 分享
                                        </div>
                                        <div class="report">
                                            <img src="@/assets/report2.png" alt="">
                                            <span>举报</span>
                                        </div>
                                    </div>
                                    <div class="interaction-mid">
                                        <div class="views">
                                            <span>1小时前</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template slot="content-right">
                    <div v-if="answerId != null" class="author-around">
                        <div class="author-info">
                            <!-- <el-avatar :size="70" :src="answerObj.user.avatar"></el-avatar> -->
                            <el-image
                            style="width: 70px; height: 70px;border-radius: 35px;"
                            :src="answerObj.user.avatar"
                            fit="cover"></el-image>
                            <div class="author-introduce">
                                <div>
                                    <el-link 
                                    type="default" 
                                    :underline="false" 
                                    href="http://localhost:8080/#/ArticleMain" 
                                    target="_blank">{{ answerObj.user.nickName }}</el-link>
                                </div>
                                <div class="author-profile-around">
                                    <span class="author-profile">{{ answerObj.user.profile }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="author-regard-around">
                            <div class="author-regard">
                                <span>{{ answerObj.user.userTotal.regardCount }}</span>
                                <div>
                                    <span>关注</span>
                                </div>
                            </div>
                            <div class="author-fans">
                                <span>{{ answerObj.user.userTotal.fansCount }}</span>
                                <div>
                                    <span>粉丝</span>
                                </div>
                            </div>
                            <div class="author-Articles">
                                <span>{{ answerObj.user.userTotal.articleCount }}</span>
                                <div>
                                    <span>文章</span>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="other-article">
                            <span>其他文章</span>
                            <SideItem></SideItem>
                        </div> -->
                    </div>
                    <SideItem v-else></SideItem>
                    <!-- <div class="recommend-article-around">
                        <span>相似文章</span>
                        <SideItem></SideItem>
                    </div> -->
                </template>
            </Common>
        </div>
        
    </div>
</template>

<script>
import {question,answerDetails,answerListById} from '@/api/discover/student'
import { mavonEditor } from 'mavon-editor'
import SideItem from '@/components/discover/SideItem.vue';
export default {
    name:'Answer',
    components:{SideItem},
    data(){
        return{
            showArr:[],
            answerList:[],
            textarea1:'',
            answerId:null,
            questionId:null,
            questionObj:null,
            answerObj:{},
            authorInfo:{
                userTotal:{
                    regardCount:0,
                    fansCount:0,
                    articleCount:0,
                }
            },
            queryParam:{
                pageNum: 1,
                pageSize: 10,
                questionId:null,
            },
        }
    },
    methods:{
        getArticleById(){ //获取文章内容
            // getArticle(parseInt(this.$route.query.articleId)).then((response)=>{
            //     const markdownIt = mavonEditor.getMarkdownIt()
            //     this.articleObj = response
            //     this.articleObj.content = markdownIt.render(this.articleObj.content)
            //     console.log("articleObj",this.articleObj)
            // })
        },
        getAuthorInfoById(){
            // getAuthorInfo(parseInt(this.$route.query.authorId)).then((response)=>{
            //     this.authorInfo = response
            // })
        },
        getQuestion(id){
            question(id).then((response)=>{
                this.questionObj = response
            })
        },
        getAnswer(answerId){
            this.answerId = answerId
            const markdownIt = mavonEditor.getMarkdownIt()
            if(this.answerId != null){
                answerDetails(this.answerId).then((response)=>{
                    response.content = markdownIt.render(response.content)
                    this.answerObj = response
                })
            }else{
                this.queryParam.questionId = this.questionId
                answerListById(this.queryParam).then((response)=>{
                    this.answerList = response.rows
                    this.answerList = answerList.filter((answer)=>{
                        answer.content = markdownIt.render(answer.content)
                        return true;
                    })
                })
            }
        },
        toOtherPage(page){
            this.$router.push({
                name:page
            },()=>{})
        },
        retract(id){
            this.articleDetail
            if(this.showArr.filter((n)=>{return n==id}) > 0){
                this.showArr = this.showArr.filter((n)=>{
                    return n != id;
                })
                return;
            }
            this.showArr.push(id);
        },
        isShow(id){
            const temp = this.showArr.filter((n)=>{return n==id});
            if(temp.length) return id;
            return 0;
        },
    },
    created(){
        this.questionId = this.$route.query.questionId;
        this.answerId = this.$route.query.answerId
        this.getQuestion(this.questionId)
        this.getAnswer()
        console.log("query",this.$route.query)
    }
}
</script>

<style scoped lang="less">
.answer-content{
    width: 1000px;
    margin: 0 auto;
}
.question{
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
.articleMain-content{
    width: 100%;
    display: flex;
    align-items: top;
    background-color: white;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgb(237, 237, 237);
}
.articleMain-content-left{
    width: 100%;
    margin: 20px 20px;
}
.title span{
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.title span a{
    font-size: 18px;
    color: black;
}
.article{
    width: 100%;
    display: flex;
    margin-top: 10px;
    align-items: top;
    font-size: 15px;
}
.article-text{
    line-height: 1.6;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
}
.article-text-img{
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    background-color: white;
}
.article img{
    width: 190px;
    height: 105px;
    float: left;
    vertical-align: top;
}
.article-around{
    float: left;
    margin-right: 10px;
}
.answer-author{
    display: flex;
    align-items: center;
    span{
        margin: 0 10px;
        font-size: 14px;
    }
}
.author-around{
    margin-left: 10px;
    /* height: 60px; */
    // padding-left: 10px;
    padding: 10px 0;
    border-radius: 5px;
    background-color: white;
}
.author-info{
    // display: flex;
    // align-items: center;
    // height: 60px;
    text-align: center;
}
.author-introduce{
    width: 100%;
    // margin-left: 15px;
}
.author-introduce a{
    /* width: 100%; */
}
.author-introduce span{
    font-size: 13px;
}
.author-profile-around{
    width: 60%;
    margin: 0 auto;
}
.author-profile{
    width: 100%;
    color: gray;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.author-regard-around{
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
}
.author-regard,.author-fans,.author-Articles{
    text-align: center;
    :first-of-type span{
        font-size: 13px;
        color: gray;
    }
}
.other-article{
    margin: 20px 20px 0 20px;
}
.recommend-article-around{
    margin: 10px 0 0 10px;
    border-radius: 5px;
    background-color: white;
    padding: 10px 20px;
}
</style>