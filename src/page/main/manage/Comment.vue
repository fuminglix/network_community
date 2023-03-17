<template>
  <div class="CommentManage-content">
    <el-header>
        <el-row :gutter="20">
            <el-col class="CommentManage-content-title" :span="20" :offset="0">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">文章评论</el-menu-item>
                    <!-- <el-menu-item index="3">消息中心</el-menu-item> -->
                </el-menu>
            </el-col>
            <el-col :span="4" :offset="0">
                <el-input
                    placeholder="请输入文章评论"
                    suffix-icon="el-icon-search"
                    v-model="input1">
                </el-input>
            </el-col>
        </el-row>
    </el-header>
    <div class="mid-nav">
        <div style="margin: 0 20px">
            <el-row :gutter="0">
                <el-col :span="17" :offset="0">
                    <span>全部评论</span>
                </el-col>
                <el-col :span="7" :offset="0">
                    <el-select 
                    v-model="value" 
                    placeholder="请输入文章关键字搜索"
                    :filterable="true">
                        <el-option
                        :value="option">
                            <span>{{ option }}</span>
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col class="btn-style" :span="18" :offset="0">
                    <el-checkbox v-model="checked">全选</el-checkbox>
                    <el-button>举报</el-button>
                    <el-button>删除</el-button>
                </el-col>
                <el-col :span="6" :offset="0">
                    <ul class="selectSort">
                        <li>
                            <span>最近发布</span>
                        </li>
                        <i></i>
                        <li>
                            <span>点赞最多</span>
                        </li>
                        <i></i>
                        <li>
                            <span>回复最多</span>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
    <el-main>
        <div class="CommentManage-content-footer">
            <div class="CommentManage-content-msg-around">
                <div v-for="item in 5" class="reply-content-item">
                    <div class="comment-checkbox">
                        <el-checkbox v-model="checked"></el-checkbox>
                    </div>
                    <div class="reply-content-img">
                        <el-avatar :size="50" :src="circleUrl"></el-avatar>
                    </div>
                    <div class="reply-content-userInfo">
                        <div class="reply-content-userInfo-title">
                            <span>fuminglix</span>
                        </div>
                        <div class="reply-content-userInfo-info">
                            <span>22222222
                            </span>
                        </div>
                        <div class="reply-content-userInfo-time">
                            <p>
                                <span>2022年5月13日 12:08</span>
                            </p>
                            <span class="el-icon-chat-dot-round" style="font-size: 13px;"> 回复</span>
                        </div>
                    </div>
                    <div class="reply-content-msg">
                        <el-image
                        style="width: 100px; height: 100px"
                        :src="url"
                        :fit="fit"></el-image>
                        <span>
                            1232222222222222222222222222222222222222222222
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </el-main>
  </div>
</template>

<script>
export default {
    name:'CommentManage',
    data(){
        return{
            activeIndex: '1',
            activeIndex2: '1',
            option:'全部文章',
            value:'',
            input1:'',
            checked:true,
            circleUrl:'',
            url:''
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
      }
    }
}
</script>

<style scoped lang="less">
.CommentManage-content{
    width: 100%;
}
.el-header {
    width: 90%;
    margin: 0 auto;
    background-color:white;
    color: #333;
    line-height: 60px;
}
.CommentManage-content-title{
    span{
        font-size: 15px;
        font-weight: 600;
    }
}
.mid-nav{
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 0 0;
    background-color: #ffffff;
}
.el-main{
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;

}
.el-footer{
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
}
.btn-style{
    button{
        margin-left: 20px;
    }
}
.selectSort{
    display: flex;
    li{
        // margin-right: 20px;
        cursor: pointer;
        margin: 0 10px;
        font-size: 14px;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
    i{
        height: 12px;
        margin-top: 20px;
        border: 1px solid rgb(203, 203, 203);
    }
    li:hover{
        font-weight: 600;
        color: rgb(8, 151, 198);
    }
}
.CommentManage-content-footer{
    width: 100%;
}
.CommentManage-content-msg-around{
    width: 100%;
    height: 62vh;

}
.reply-content-item{
    padding-top: 20px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.comment-checkbox{
    width: 2%;
    margin-right: 20px;
    height: 50px;
    line-height: 50px;
}
.reply-content-img{
    width: 4%;
}
.reply-content-userInfo{
    width: 74%;
    padding-left: 10px;
}
.reply-content-userInfo-title{
    font-size: 14px;
    color: gray;
    span{
        font-size: 15px;
        font-weight: 600;
        margin-right: 20px;
        color: black;
    }
}
.reply-content-userInfo-info{
    span{
        line-height: 1.6;
        font-size: 15px;
    }
}
.reply-content-userInfo-time{
    display: flex;
    margin-top: 10px;
    align-items: center;
    p{

    }
    span{
        margin-right: 12px;
        font-size: 12px;
        color: gray;
    }
}
.reply-content-msg{
    width: 20%;
    background-color: rgb(226, 226, 226);
    border-radius: 5px;
    display: flex;
    align-items: center;
    span{
        width: 50%;
        color: gray;
        line-height: 1.6;
        word-break: break-all;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
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