<template>
    <div class="comment-container">
        <div class="comment-order">
            <div class="order-by-hot">
                <span>按热度排序</span>
            </div>
            <div class="order-by-time">
                <span>按时间排序</span>
            </div>
        </div>
        <div class="edit-comment">
            <div class="edit-avatar">
                <!-- <el-avatar :size="48" :src="userAvatar"></el-avatar> -->
                <el-image 
                style="width: 48px; height: 48px;border-radius: 24px;"
                :src="userAvatar" 
                fit="cover">
                </el-image>
            </div>
            <div class="edit-input">
                <el-input
                    style="width: 100%"
                    type="textarea"
                    rows="2"
                    resize="none"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>
            </div>
            <div class="edit-btn">
                <el-button type="primary" @click="sendMsg" class="comment-btn">发表评论</el-button>
            </div>
        </div>
        <div class="comment-info-around">
            <div class="tmsg-commentshow">
                <ul class="tmsg-commentlist">
                    <li class="tmsg-c-item" v-for="(item,index) in commentList" :key="item.id">
                        <article class="">
                            <header class="i-header">
                                <!-- <el-avatar :size="48" :src="item.avatar"></el-avatar> -->
                                <el-image 
                                style="width: 48px; height: 48px;border-radius: 24px;"
                                :src="item.avatar" 
                                fit="cover">
                                </el-image>
                                <div class="i-userInfo">
                                    <div class="i-name common-color">
                                        {{item.nickName}}
                                    </div>
                                    <section>
                                        <p class="common-content" v-html="item.content"></p>
                                        <!-- <p v-html="analyzeEmoji(item.content)">{{analyzeEmoji(item.content)}}</p> -->
                                        <div class="i-commentInfo">
                                            <div class="i-time">
                                                <time>{{item.createTime}}</time>
                                            </div>
                                            <div class="tmsg-replay" @click="showComment(item.id,index,item.id,false)">
                                                回复
                                            </div>
                                            <div class="i-report">
                                                <el-popover
                                                    :open-delay=50
                                                    :close-delay=100
                                                    placement="bottom"
                                                    width="30"
                                                    trigger="hover">
                                                    <el-row :gutter="20">
                                                        <el-col :span="24" :offset="6">
                                                            <el-button>举报</el-button>
                                                        </el-col>
                                                    </el-row>
                                                    <span slot="reference" class="el-icon-circle-plus-outline"></span>
                                                </el-popover>
                                                
                                            </div>
                                        </div>
                                    </section>
                                    <div v-if="item.isShowComment != null ? item.isShowComment : false" class="i-comment">
                                        <el-input
                                        type="textarea"
                                        :rows="1"
                                        placeholder="请输入内容"
                                        resize="none"
                                        :autosize="{ maxRows: 10}"
                                        v-model="rootCommentTextarea">
                                        </el-input>
                                        <div class="i-comment-footer">
                                            <div class="emoji">
                                                
                                            </div>
                                            <div class="commentBtn">
                                                <!-- <el-button type="primary">发表</el-button> -->
                                                <button @click="respondMsg(item.id,item.id,item.createBy,false)">发表</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </article>
                        <ul v-show="item.children" class="tmsg-commentlist" style="padding-left:60px;">
                            <li class="tmsg-c-item" v-for="citem,cindex in item.children" :key="citem.id">
                                <article class="">
                                    <header class="i-header">
                                            <!-- <el-avatar :size="30" :src="citem.avatar"></el-avatar> -->
                                            <el-image 
                                            style="width: 30px; height: 30px;border-radius: 15px;"
                                            :src="citem.avatar" 
                                            fit="cover">
                                            </el-image>
                                            <div class="i-userInfo">
                                                <div class="i-name common-color">
                                                    <span class="i-name-span">{{citem.nickName}}</span>
                                                    <strong v-if="citem.toCommentUserName!=null">回复</strong>
                                                    <span v-if="citem.toCommentUserName!=null" class="i-toCommentUserName">{{"@"+citem.toCommentUserName}}</span> 
                                                    <p>{{citem.content}}</p>
                                                </div>
                                                <section>
                                                    
                                                    <!-- <p v-html="analyzeEmoji(citem.content)">{{citem.content}}</p> -->
                                                    <div class="i-commentInfo">
                                                        <div class="i-time">
                                                            <time>{{citem.createTime}}</time>
                                                        </div>
                                                        <div v-show="haslogin" class="tmsg-replay" @click="showComment(citem.id,cindex,index,true)">
                                                            回复
                                                        </div>
                                                        <div class="i-report">
                                                            <el-popover
                                                                :open-delay=50
                                                                :close-delay=100
                                                                placement="bottom"
                                                                width="30"
                                                                trigger="hover">
                                                                <el-row :gutter="20">
                                                                    <el-col :span="24" :offset="6">
                                                                        <el-button>举报</el-button>
                                                                    </el-col>
                                                                </el-row>
                                                                <span slot="reference" class="el-icon-circle-plus-outline"></span>
                                                            </el-popover>
                                                        </div>
                                                    </div>
                                                </section>
                                                <div v-if="citem.isShowComment != null ? citem.isShowComment : false" class="i-comment">
                                                    <el-input
                                                    type="textarea"
                                                    :rows="1"
                                                    placeholder="请输入内容"
                                                    resize="none"
                                                    :autosize="{ maxRows: 10}"
                                                    v-model="childrenCommentTextarea">
                                                    </el-input>
                                                    <div class="i-comment-footer">
                                                        <div class="emoji">
                                                            
                                                        </div>
                                                        <div class="commentBtn">
                                                            <!-- <el-button type="primary">发表</el-button> -->
                                                            <button @click="respondMsg(item.id,citem.id,citem.createBy,true)">发表</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </header>
                                </article>
                            </li>
                        </ul>
                    </li>

                </ul>
                <h1 v-show='hasMore' class="tcolors-bg" @click="addMoreFun" >查看更多</h1>
                <h1 v-show='!hasMore' class="tcolors-bg" >没有更多</h1>
            </div>
        </div>
    </div>
</template>

<script>
import {sendComment,getArticleComment,getLinkComment} from '@/api/comment'
import {getToken} from '@/utils/auth'
export default {
    name:'comment',
    data(){
        return{
            circleUrl:'',
            textarea:'',
            rootCommentTextarea:'',
            childrenCommentTextarea:'',
            commentList:[],
            hasMore:false,
            // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                articleId: 0,
                type:0,
                // activityId: 0,
            },
            sendCommentObj:{
                type:0,//回复评论的当前的commentId
                articleId:0,//文章id
                // activityId: 0,//动态id
                rootId:-1,//根评论id，如果是针对文字评论直接用-1表示
                toCommentId:-1,//所回复评论的id
                toCommentUserId:-1,//所评论的用户id
            },
            respondCommentObj:{
                type:0,//回复评论的当前的commentId
                articleId:0,//文章id
                // activityId: 0,//动态id
            }
        }
    },
    props:{
        articleId:String,
        // activityId:String,
    },
    methods:{
        //事件处理器
        setData(initData,result){
            var msg = result.rows;
            if(initData){
                //刷新列表
                this.commentList = msg;
            }else{
                //加载更多
                this.commentList = this.commentList.concat(msg);
            }
            
            this.hasMore = result.total>this.commentList.length
            },
        //选择表情包
        // choseEmoji(inner){
        //     this.textarea +='[' + inner + ']';
        // },
        // analyzeEmoji(cont){//编译表情替换成图片展示出来
        // +++++++++++++++++++++    var pattern1 = /\[[\u4e00-\u9fa5]+\]/g;
        //     var pattern2 = /\[[\u4e00-\u9fa5]+\]/;
        //     var content = cont.match(pattern1);
        //     var str = cont;
        //     if(content){
        //         for(var i=0;i<content.length;i++){
        //             for(var j=0;j<this.OwOlist.length;j++){
        //                 if("["+this.OwOlist[j].title +"]" == content[i]){
        //                     var src = this.OwOlist[j].url;
        //                     break;
        //                 }
        //             }
        //             str = str.replace(pattern2,'<img src="static/img/emot/image/'+src+'"/>');
        //         }
        //         // console.log(str);
        //     }
        //     return str;
        // },
        //发送留言
        sendMsg(){//留言
            var that = this;
            if(!this.haslogin){
                this.sendError(this.haslogin)
                return;
            }
            if(that.textarea.trim != ''){
                // that.sendTip = '咻~~';
                console.log("sendCommentObj",this.sendCommentObj)
                // let {type,articleId,activityId,rootId,toCommentId,toCommentUserId} = that.sendCommentObj
                let {type,articleId,rootId,toCommentId,toCommentUserId} = that.sendCommentObj
                sendComment(type,articleId,rootId,toCommentId,toCommentUserId,this.textarea).then((response)=>{
                    that.textarea = '';
                    console.log("rootId",that.sendCommentObj.rootId)
                    // that.sendCommentObj.toCommentId = -1;
                    // that.sendCommentObj.toCommentUserId=-1;

                    that.routeChange();
                    that.sendSuccess();
                    that.removeRespond();
                    var timer02 = setTimeout(function(){
                        // that.sendTip = '发送~';
                        clearTimeout(timer02);
                    },1000)
                })
            }else{
                // that.sendTip = '内容不能为空~'
                var timer = setTimeout(function(){
                    // that.sendTip = '发送~';
                    clearTimeout(timer);
                },3000)
            }
        },
        respondMsg(rootId,toCommentId,toCommentUserId,isChildren){//回复留言
            if(!this.haslogin){
                this.sendError(this.haslogin)
                return;
            }
            let textarea = isChildren ? this.childrenCommentTextarea : this.rootCommentTextarea
            if( textarea.trim != '' ){
                // that.sendTip = '咻~~';
                // console.log("sendCommentObj",this.sendCommentObj)
                let {type,articleId} = this.respondCommentObj
                sendComment(type,articleId,rootId,toCommentId,toCommentUserId,textarea).then((response)=>{
                    isChildren ? this.childrenCommentTextarea = '' : this.rootCommentTextarea = ''
                    this.commentList = this.commentList.filter((c)=>{
                        if(c.id == response[0].rootId){
                            c.children = response
                        }
                        return true
                    })
                    // console.log("=>",this.commentList)
                    // that.routeChange();
                    this.sendSuccess();
                    this.removeRespond();
                    var timer02 = setTimeout(function(){
                        // that.sendTip = '发送~';
                        clearTimeout(timer02);
                    },1000)
                })
            }else{
                this.$message.warning("内容不能为空！")
                // var timer = setTimeout(function(){
                //     // that.sendTip = '发送~';
                //     clearTimeout(timer);
                // },3000)
            }
            // // console.log(leavePid,pid);
            // var that = this;
            // if(localStorage.getItem('userInfo')){
            //     var dom = event.currentTarget;
            //     dom = dom.parentNode;
            //     this.isRespond = true;
            // //   this.leavePid = leavePid;
            //     this.rootId = rootId
            //     this.toCommentId = toCommentId;
            //     this.toCommentUserId = toCommentUserId
            //     dom.appendChild(this.$refs.respondBox);
            // }else{
            //     that.$confirm('登录后即可点赞和收藏，是否前往登录页面?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //     }).then(() => {//确定，跳转至登录页面
            //         //储存当前页面路径，登录成功后跳回来
            //         localStorage.setItem('logUrl',that.$route.fullPath);
            //         that.$router.push({path:'/Login?login=1'});
            //     }).catch(() => {

            //     });
            // }
        },
        removeRespond(){//取消回复留言
            this.isRespond = false;
            // that.sendCommentObj.rootId = -1;
            // that.sendCommentObj.toCommentId = -1;
            // that.sendCommentObj.toCommentUserId=-1;
            // this.$refs.tmsgBox.insertBefore(this.$refs.respondBox,this.$refs.listDom);
        },
        showCommentList(initData){//评论列表
            var that = this;
            // that.aid = that.$route.query.aid==undefined ? 1 : parseInt(that.$route.query.aid);//获取传参的aid
            if(that.articleId != null){
                that.queryParams.articleId = parseInt(that.articleId)
            }
            //判断当前用户是否登录
            // var token = getToken();
            // if(token){
            //     that.haslogin = true;
            // }else{
            //     that.haslogin = false;
            // }

            //公用设置数据方法
            if(that.$route.name == 'ArticleMain' || that.$route.name=='index' || that.$route.name=='article'){//文章列表的评论
                that.sendCommentObj.type = 0;
                that.queryParams.type = 0;
                that.respondCommentObj.type = 0;
                getArticleComment(that.queryParams).then((response)=>{
                    console.log("response",response)
                    that.setData(initData,response);
                })
            }else if(that.$route.name == 'Postbar' || that.$route.name == 'activityMain' || that.$route.name == 'activity' || that.$route.name == 'community'){
                that.sendCommentObj.type = 1;
                that.queryParams.type = 1;
                that.respondCommentObj.type = 1;
                getArticleComment(that.queryParams).then((response)=>{
                    that.setData(initData,response);
                })  
            }else if(that.$route.name == 'answer' || that.$route.name == 'studentIndex'){
                that.sendCommentObj.type = 2;
                that.queryParams.type = 2;
                that.respondCommentObj.type = 2;
                getArticleComment(that.queryParams).then((response)=>{
                    that.setData(initData,response);
                })  
            }
        },
        addMoreFun(){//查看更多
            this.queryParams.pageNum++
            this.showCommentList(false);
        },
        routeChange(){//重新加载
            var that = this;
            this.queryParams.pageNum = 1
            this.showCommentList(true);
        },
        sendSuccess(){ //评论发送成功提示
            this.$message.success('发送成功！');
        },
        sendError(islogin){ //评论发送失败提示
            // 判断是否登录
            if(islogin){
                this.$message.error('发送失败！');
                return;
            }
            // 未登录提示用户去登陆
            this.$confirm('请先去登陆', '用户未登录', {
                confirmButtonText: '去登陆',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.toOtherPage("login")
                // this.$message({
                //     type: 'success',
                //     message: '删除成功!'
                // });
                }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '已取消删除'
                // });          
                });
        },
        showComment(id,index,rootIndex,isChildren){
            if(isChildren){
                const isShowComment = this.commentList[rootIndex].children[index].isShowComment
                if(isShowComment == null){
                    this.$set(this.commentList[rootIndex].children[index],'isShowComment',true)
                    return;
                }
                this.commentList[rootIndex].children[index].isShowComment = !this.commentList[rootIndex].children[index].isShowComment
                return;
            }
            if(this.commentList[index].isShowComment != null){
                this.commentList[index].isShowComment = !this.commentList[index].isShowComment
                return;
            }
            this.commentList = this.commentList.filter((comment)=>{
                if(comment.id === id){
                    this.$set(comment,'isShowComment',true)
                }
                return true
            })
        },
        toOtherPage(page){
            this.$router.push({
                name:page
            },()=>{})
        }
    },
    created() { //生命周期函数
        // console.log(this.$route);
        var that = this;
        that.sendCommentObj.articleId = parseInt(that.articleId)
        that.respondCommentObj.articleId = parseInt(that.articleId)
        console.log("articleId",that.articleId)
        console.log("name",that.$route.name)
        that.routeChange();
    },
    mounted(){//页面加载完成后
    },
    watch:{
        commentList:{
            deep:true,
            handler(){
                // console.log("commentList改变了！")
            }
        },
        articleId:{
            deep:true,
            handler(newValue,oldValue){
                if(newValue != null){
                    this.sendCommentObj.articleId = parseInt(newValue)
                    this.respondCommentObj.articleId = parseInt(newValue)
                    this.queryParams.articleId = parseInt(newValue)
                    this.showCommentList(true);
                    console.log("newValue",newValue)
                    return;
                }
                this.sendCommentObj.articleId = parseInt(oldValue)
                this.respondCommentObj.articleId = parseInt(oldValue)
                this.showCommentList(true);
                console.log("oldValue",oldValue)
            }
        }
    },
    computed:{
        haslogin(){
            return this.$store.state.main.isLogin
        },
        userAvatar(){
            if(localStorage.getItem('userInfo') == null) return '';
            return JSON.parse(localStorage.getItem('userInfo')).avatar
        },
    }
}
</script>

<style scoped lang="less">
.comment-container{
    margin-top: 10px;
}
.comment-order{
    display: flex;
    border-bottom: 1px solid rgb(220, 220, 220);
}
.order-by-hot,.order-by-time{
    /* width: 100px; */
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.order-by-hot{
    /* background-color: pink; */

}
.order-by-time{
    margin-left: 40px;
    /* background-color: aqua; */
}
.edit-comment{
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding: 0 0 0 20px;
}
.edit-input{
    margin-left: 20px;
    width: 80%;
}
/*评论列表*/
.tmsg-comments .tmsg-comments-tip{
    display: block;
    border-left: 2px solid #363d4c;
    padding: 0 10px;
    margin: 40px 0;
    font-size: 20px;
}
.tmsg-commentlist {
    margin-bottom:20px;

}
.tmsg-commentshow>.tmsg-commentlist{
    border-bottom: 1px solid #e5eaed;
}
.tmsg-c-item{
    // border-top: 1px solid #e5eaed;
}
.tmsg-c-item article{
    margin:20px 0;
}
.tmsg-c-item article{
    margin-bottom:10px;
}
.tmsg-c-item article img{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    float: left;
    transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    margin-right: 15px;
    object-fit: cover;
}
.tmsg-c-item article img:hover{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
}
.tmsg-c-item article{
    width: 100%;
    font-size: 14px;
    margin:5px 8px 7px 0;
    color:#444;
    font-weight: bold;
    display: inline-block;
    header{
        width: 100%;
    }
}
.tmsg-c-item article .i-class{
    display: inline-block;
    margin-left:10px;
    background: #dff0d8;
    color:#3c763d;
    border-radius: 5px;
    padding: 3px 6px;
    font-size: 12px;
    font-weight: 400;
}
.tmsg-c-item article header .i-time{
    color:#aaa;
    font-size: 12px;
    margin-right: 10px;
    width: 25%;
}
.tmsg-c-item article section p{
    font-weight: 500;
    margin-top: 10px;
}
.tmsg-c-item article section .tmsg-replay{
    width: 5%;
    margin:10px 0;
    font-size: 12px;
    color:#64609E;
    cursor: pointer;
}
.i-report{
    width: 70%;
    position: relative;
    span{
        position: absolute;
        right: 0;
        font-size: 20px;
        color: rgb(163, 163, 163);
    }
    .btn{
        text-align: center;
    }
}
.i-name{
    font-size: 15px;
    display: flex;
    align-items: center;
    .i-name-span{
        font-size: 12px;
    }
    strong{
        color: black;
        margin: 0 5px 0 10px;
        font-weight: 500;
        // font-size: 15px;
    }
    .i-toCommentUserName{
        color: #1296db;
    }
    p{
        font-size: 15px;
        color: black;
        margin-left: 10px;
        font-weight: 500;
    }
}
.i-header{
    display: flex;
    margin-top: 10px;
}
.i-userInfo{
    width: 92%;
    margin-left: 20px;
}
.common-content{
    width: 100%;
    word-break: break-all;
    word-wrap: break-word;
}
.edit-btn{
    width: 15%;
    height: 100%;
    padding-left: 10px;
}
.comment-btn{
    height: 54px;
}
.comment-info-around{
    padding-left: 20px;
}
.i-commentInfo{
    width: 100%;
    display: flex;
    align-items: center;
}
.common-color{
    color: gray;
}
.vip-color{
    color: #FB7299;
}
.i-comment{
    width: 95%;
    border-radius: 5px;
    padding: 10px 10px 0 10px;
    border: 1px solid rgb(216, 216, 216);
}
::v-deep .i-comment .el-textarea__inner{
    font-family: Microsoft YaHei;
    font-size: 15px;
    color: black;
    border: none;
    position: none;
    padding: 0;
    border-radius: 0;
    border-bottom: 1px solid rgb(235, 235, 235);
}
.i-comment-footer{
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    .emoji{
        width: 90%;
    }
    .commentBtn{
        button{
            width: 70px;
            color: white;
            height: 35px;
            border-radius: 5px;
            border: none;
            background-color: #1296db;
            cursor: pointer;
        }
    }
}
</style>