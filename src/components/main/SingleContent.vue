<template>
    <div>
        <div v-for="item in 8" class="content">
            <div class="content-left">
                <div class="title">
                    <span>
                        <el-link :underline="false" href="http://localhost:8080/#/ArticleMain" target="_blank">文章标题</el-link>
                    </span>
                </div>
                <div v-if="isShow(item) == item ? false : true" class="summary">
                    <div v-if="0" class="summary-around">
                        <img src="@/assets/at.png" alt="">
                    </div>
                    <span>
                        <p class="summary-text">
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        1111111111111111111111111111111111
                        11111111111111111111111111111111111111111111
                        </p>
                        <span @click="retract(item)" class="preview-btn">展开</span>

                    </span>
                </div>
                <div v-else class="summary">
                    <span>
                        <p class="summary-text-preview">
                        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        222222222222222222222222222222222222222222
                        <span @click="retract(item)" class="preview-btn">收起</span>
                        </p>
                    </span>
                </div>
                <div class="interaction">
                    <div class="interaction-left">
                        <div class="thumbs-up">
                        <img src="../../assets/thumbs-up3.png" alt="">
                        <span>133</span>点赞
                        </div>
                        <div class="comment">
                            <img src="../../assets/comment3.png" alt="">
                            <span>100</span> 条评论
                        </div>
                        <div class="share">
                            <img src="../../assets/collect2.png" alt="">
                            <span>收藏</span>
                        </div>
                        <div class="Collection">
                            <img src="../../assets/dispatch3.png" alt="">
                            <span>分享</span>  
                        </div>
                        <div class="report">
                            <img src="../../assets/report2.png" alt="">
                            <span>举报</span>
                        </div>
                    </div>
                    <div class="interaction-mid">
                        <div class="views">
                            <span>100</span>  次浏览 · <span>1小时前</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SingleContent',
    data(){
        return{
            showArr:[]
        }
    },
    methods:{
        retract(id){
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
        }
    },
    computed:{
    }
}
</script>

<style scoped lang="less">
.content{
    width: 100%;
    display: flex;
    align-items: top;
    background-color: white;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgb(237, 237, 237);
}
.content-left{
    width: 100%;
    margin: 20px 20px;
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
.summary-text-preview{
    line-height: 1.6;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
}
.summary-text-img{
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    background-color: green;
}
.summary img{
    width: 190px;
    height: 105px;
    float: left;
    vertical-align: top;
}
.summary-around{
    float: left;
    margin-right: 10px;
}
.preview-btn{
    cursor: pointer;
    color: rgb(68, 133, 229);
}
.interaction{
    width: 100%;
    display: flex;
    font-size: 14px;
}
.interaction-left{
    width: 60%;
    height: 20px;
    line-height: 20px;
    display: flex;
    align-content: center;
    margin: 10px 0;
    justify-content: space-between;
    .thumbs-up{
        width: 80px;
        color: gray;
        span{
            color: black;
        }
    }
}
.interaction-mid{
    width: 40%;
    font-size: 12px;
    color: rgb(132, 127, 127);
    margin-left: 40px;
    display: flex;
    align-items: center;
}
.interaction-right{
    display: flex;
    align-items: center;
}
.interaction-right span{
    margin-right: 3px;
    color: rgb(49, 108, 210);
}
.interaction img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
}
.interaction-left span{
    margin-left: 5px;
}
.comment,.share,.Collection,.report{
    cursor: pointer;
    color: rgb(133, 133, 133);

}
</style>