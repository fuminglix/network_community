<template>
    <Common>
        <template slot="content-left">
            <div v-for="item in 4" class="postbar-left-container">
                <div class="postbar-left-title">
                    <div class="postbar-avatar">
                        <el-avatar :size="48" :src="circleUrl"></el-avatar>
                    </div>
                    <div class="postbar-author">
                        <div class="postbar-author-name">
                            <span>浮名里</span>
                        </div>
                        <div class="postbar-content-time">
                            <span>1小时前 · 发表</span>
                        </div>
                    </div>
                </div>
                <div class="postbar-left-content">
                    <div class="postbar-dispatch-text">
                        <span>
                            123
                        </span>
                    </div>
                    <div class="postbar-report-content">
                        <p :class="retract(item) > 0 ? content : null" class="postbar-report-content-hidden">222222222222222222222222222222222222
                            2222222222222222222222222222222222222222
                            222222222222222222222222222222222222
                            2222222222222222222222222222222222222222222222222222222222222222222222222222
                            2222222222222222222222222222222222222222
                        </p>
                        <span style="cursor: pointer;color:#00AEEC" @click="isShow(item)">{{ retract(item) > 0 ? '收起' : '展开' }}</span>
                    </div>
                    <div class="postbar-commentBar">
                        <div>
                            <img style="width:18px;height:18px" src="@/assets/dispatch1.png" alt="">
                            <span>1</span></div>
                        <div @click="toInteraction(item)">
                            <img style="width:15px;height:15px;margin-left: 40px;" src="@/assets/comment1.png" alt="">
                            <span>2</span></div>
                        <div>
                            <img style="width:17px;height:17px;margin-left: 40px;" src="@/assets/thumbs-up1.png" alt="">
                            <span>3</span></div>
                    </div>
                </div>
                <!-- <router-view name="interaction"></router-view> -->
                <Comment :class="isShowComment(item) >0 ? 'ShowComment' : 'hiddenComment' "></Comment>
            </div>
        </template>
        <template slot="content-right">
            <div class="content-right-around">
                <div class="postbar-info">
                    <div class="postbar-basic-info">
                        <div class="postbar-avatar">
                            <el-avatar shape="square" :size="48" :src="circleUrl"></el-avatar>
                        </div>
                        <div class="postbar-introduce">
                            <div class="postbar-name">
                                <span>二次元社区</span>
                            </div>
                            <span class="postbar-introduce-text">介绍</span>
                        </div>
                    </div>
                    <div class="postbar-other-info">
                        <div>
                            <div>
                                <span>人数</span><br>
                                <a href="">100</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>帖子</span><br>
                                <a href="">1000</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>活跃度</span><br>
                                <a href="">80</a>
                            </div>
                        </div>
                    </div>
                    <div class="postbar-recommend">
                        <span>吧主推荐</span>
                        <SideItem></SideItem>
                    </div>
                </div>
                <div class="postbar-hot">
                    <span>热门讨论</span>
                    <SideItem></SideItem>
                </div>
            </div>
        </template>
    </Common>
</template>

<script>
import Common from '@/components/Common.vue';
import SideItem from '@/components/main/SideItem'
import Comment from '@/components/main/Comment.vue';
export default {
    name:'Postbar',
    components:{
        Common,
        SideItem,
        Comment
    },
    data(){
        return{
            circleUrl:'',
            content:[
                'postbar-report-content-show',
            ],
            buttonArr:['展开','收起'],
            button:'展开',
            flag:false,
            showObj:{
                showContentArr:[],
                showCommentArr:[]
            }
        }
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
        toInteraction(id){
            const temp = this.showObj.showCommentArr.filter((n)=>{
                return n==id;
            })
            if(temp.length){
                this.showObj.showCommentArr = this.showObj.showCommentArr.filter((n)=>{return n != id});
            }
            else{
                this.showObj.showCommentArr.push(id)
            }
        },
        retract(id){
            const temp = this.showObj.showContentArr.filter((n)=>{
                return n==id;
            })
            if(temp.length) return temp.pop(0);
            return 0;
        },
        isShowComment(id){
            const temp = this.showObj.showCommentArr.filter((n)=>{
                return n==id;
            })
            if(temp.length) return temp.pop(0);
            return 0;
        }
    },
    computed:{
    }
}
</script>

<style scoped lang="less">
.postbar-left-container{
    padding: 20px 10px 10px 20px;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: white;
}
.postbar-left-title{
    display: flex;

}
.postbar-author{
    margin-left: 15px;
}
.postbar-author-name span{
    line-height: 1.6;
    font-size: 16px;
}
.postbar-content-time span{
    font-size: 12px;
    color: gray;
}
.postbar-left-content{
    padding-left: 65px;
}
.postbar-dispatch-text{
    margin: 10px 0;
}
.postbar-report-content{
    
}
.postbar-report-content-hidden{
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.postbar-report-content-show{
    display: block;
}
.postbar-commentBar{
    display: flex;
}
.postbar-commentBar div{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.postbar-commentBar img{
    
}
.postbar-commentBar span{
    font-size: 14px;
    margin-left: 8px;
    color: #99a2aa;
}
.content-right-around{
    padding-left: 10px;
}
.postbar-info{
    padding: 10px;
    background-color: white;
    border-radius: 5px;
}
.postbar-basic-info{
    display: flex;
    align-items: center;
}
.postbar-introduce{
    padding-left: 10px;
    width: 75%;
}
.postbar-introduce-text{
    font-size: 13px;
    color: gray;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.postbar-other-info{
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    text-align: center;
    span{
        font-size: 14px;
        color: gray;
    }
    a{
        font-size: 14px;
        color: black;
    }
}
.postbar-recommend{
    padding: 10px 0 0 10px;
}
.postbar-hot{
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px 20px;
    background-color: white;
}
.ShowComment{
    display: block;
}
.hiddenComment{
    display: none;
}
</style>