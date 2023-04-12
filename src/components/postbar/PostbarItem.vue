<template>
    <div>
        <div v-for="item in activityList" :key="item.id" class="postbar-left-container">
            <div class="postbar-left-title">
                <div class="postbar-avatar">
                    <el-avatar :size="48" :src="item.user.avatar"></el-avatar>
                </div>
                <div class="postbar-author">
                    <div class="postbar-author-name">
                        <span>{{ item.user.nickName }}</span>
                    </div>
                    <div class="postbar-content-time">
                        <span>{{ item.createTime }} · 发表</span>
                    </div>
                </div>
            </div>
            <div class="postbar-left-content">
                <div class="postbar-dispatch-text">
                    <span v-if="item.dispatchContent != null">
                        {{ item.dispatchContent }}
                    </span>
                </div>
                <div class="postbar-report-content">
                    <div v-if="item.isRef === '0'">
                        <p :class="retract(item.id) > 0 ? content : null" class="postbar-report-content-hidden" v-html="item.content">
                            <!-- {{ item.content }} -->
                        </p>
                        <span style="cursor: pointer;color:#00AEEC" @click="isShow(item.id)">{{ retract(item.id) > 0 ? '收起' : '展开' }}</span>
                        <div v-if="item.contentImg != null" class="Quote-item-info-content-img">
                            <span v-for="url,index in item.contentImg" :key="index">
                                <el-image 
                                style="width: 180px; height: 180px"
                                :src="url" 
                                :preview-src-list="item.contentImg"
                                fit="cover">
                                </el-image>
                            </span>
                        </div>
                    </div>
                    <QuoteItem v-else :articleObj="item.articleVo"></QuoteItem>
                </div>
                <div class="postbar-commentBar">
                    <div>
                        <img style="width:18px;height:18px" src="@/assets/dispatch3.png" alt="">
                        <span>1</span>
                    </div>
                    <div @click="toInteraction(item.id)">
                        <img style="width:15px;height:15px;margin-left: 40px;" src="@/assets/comment1.png" alt="">
                        <span>2</span>
                    </div>
                    <div>
                        <img style="width:17px;height:17px;margin-left: 40px;" src="@/assets/thumbs-up1.png" alt="">
                        <span>3</span>
                    </div>
                </div>
            </div>
            <!-- <router-view name="interaction"></router-view> -->
            <Comment v-if="isShowComment(item.id)" :articleId="item.id"></Comment>
        </div>
    </div>
</template>

<script>
import Comment from '@/components/main/Comment.vue';
import QuoteItem from '@/components/main/QuoteItem.vue';
export default {
    name:'PostbarItem',
    components:{
        Comment,
        QuoteItem
    },
    props:{
        activityContents:Array
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
            activityList:[],
            showObj:{
                showContentArr:[],
                showCommentArr:[]
            },
            // url: '',
            // srcList: [
            // 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            // 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            // 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            // 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            // 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            // 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            // ]
        }
    }
    ,
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
    created(){
        if(this.activityContents != null){
            this.activityList = this.activityContents
        }
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
.Quote-item-info-content-img{
    width: 100%;
    padding: 10px 0;
    span{
        margin: 2px;
        width: 200px;
        height: 200px;
    }
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
    margin-top: 10px;
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
.ShowComment{
    display: block;
}
.hiddenComment{
    display: none;
}
</style>