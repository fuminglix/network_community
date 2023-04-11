<template>
  <div class="CommentManage-content">
    <el-header>
      <el-row :gutter="20">
        <el-col class="CommentManage-content-title" :span="20" :offset="0">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect">
            <el-menu-item index="1">文章管理</el-menu-item>
            <!-- <el-menu-item index="3">消息中心</el-menu-item> -->
          </el-menu>
        </el-col>
        <el-col :span="4" :offset="0">
          <el-input
            placeholder="搜索文章"
            suffix-icon="el-icon-search"
            v-model="searchInput"
            @change="searchMyArticle(searchInput)">
          </el-input>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col style="font-size: 14px" :span="17" :offset="0">
          <el-col :span="4" :offset="0">
            <span class="clickSpan" @click="showArticle(-1)">全部文章</span>
          </el-col>
          <el-col :span="4" :offset="0">
            <span class="clickSpan" @click="showArticle(1)">草稿</span>
          </el-col>
        </el-col>
        <el-col :span="3" :offset="0">
          <el-select v-model="queryParams.status" placeholder="请选择">
            <el-option
              v-for="item in progressOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4" :offset="0">
          <el-select v-model="queryParams.orderBy" placeholder="请选择">
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col class="btn-style" :span="18" :offset="0">
          <!-- <el-checkbox v-model="checked">全选</el-checkbox>
          <el-button>举报</el-button>
          <el-button>删除</el-button> -->
        </el-col>
        <el-col :span="6" :offset="0"> </el-col>
      </el-row>
      <div class="CommentManage-content-footer">
          <el-main class="CommentManage-content-msg-around">
            <div v-for="item in articleList" class="reply-content-item">
              <!-- <div class="comment-checkbox">
                          <el-checkbox v-model="checked"></el-checkbox>
                      </div> -->
              <div class="reply-content-img">
                <!-- <el-avatar :size="50" :src="circleUrl"></el-avatar> -->
                <el-image
                  style="width: 100px; height: 100px"
                  :src="item.thumbnail == null ? defaultImg : item.thumbnail"
                  fit="fill"
                ></el-image>
              </div>
              <div class="reply-content-userInfo">
                <div class="reply-content-userInfo-title">
                  <span>{{ item.title }}</span>
                </div>
                <!-- <div class="reply-content-userInfo-info">
                              <span>22222222
                              </span>
                          </div> -->
                <div class="reply-content-userInfo-time">
                  <p>
                    <span>{{ item.createTime }}</span>
                  </p>
                  <el-tag 
                  class="checkTag"
                  :type="typeList[parseInt(item.status)]"
                  effect="dark">{{ articleStatus(parseInt(item.status)) }}</el-tag>
                  <!-- <span class="el-icon-chat-dot-round" style="font-size: 13px">回复</span> -->
                </div>
              </div>
              <div class="reply-content-msg">
                <el-button @click="editArticle(item.id)">编辑</el-button>
                <el-popover placement="left" width="200" trigger="hover">
                  <el-button>默认按钮</el-button>
                  <span slot="reference" class="el-icon-s-operation"></span>
                </el-popover>
              </div>
            </div>
          </el-main>
      </div>
    </el-main>
  </div>
</template>
  
<script>
import {myArticleList} from '@/api/manage/article'
export default {
  name: "Article",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      option: "全部文章",
      value: "",
      searchInput:"",
      checked: true,
      circleUrl: "",
      url: "",
      sortOptions: [
        {
          value: 1,
          label: "发布时间排序",
        },
        {
          value: 2,
          label: "浏览量排序",
        },
        {
          value: 3,
          label: "评论数排序",
        },
        {
          value: 4,
          label: "收藏数排序",
        },
      ],
      progressOptions: [
        {
          value: -1,
          label: "全部文章",
        },
        {
          value: 0,
          label: "已通过",
        },
        {
          value: 1,
          label: "草稿",
        },
        {
          value: 2,
          label: "审核中",
        },
        {
          value: 3,
          label: "未通过",
        },
      ],
      progressOptionsValue: -1,
      sortOptionsValue:'',
      articleList:[],
      typeList:[
        'success',
        'warning',
        'danger'
      ],
      // 查询参数
      queryParams: {
          pageNum: 1,
          pageSize: 10,
          userId: 0,
          status:-1,
          orderBy:1,
          search:''
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getAllArticle(){
      this.queryParams.userId = this.userId
      myArticleList(this.queryParams).then((response)=>{
        this.articleList = response.rows
        // console.log(response)
      })
    },
    articleStatus(status){
      if(!status){
        return '审核通过'
      }else if(status == 1){
        return '草稿'
      }else if(status == 2){
        return '审核中'
      }else{
        return '未通过'
      }
    },
    editArticle(articleId){
      this.$router.push({
        name:'publishContent',
        query:{
          articleId
        }
      })
    },
    showArticle(status){
      this.queryParams.status = status;
      this.getAllArticle();
    },
    searchMyArticle(search){
      this.queryParams.search = search
    }
  },
  created(){
    this.getAllArticle()
  },
  computed:{
    userId(){
      return this.$store.state.main.userInfo.id;
    },
    defaultImg(){
      return this.$store.state.main.defaultImg;
    }
  },
  watch:{
    queryParams:{
      deep:true,
      handler(newValue,oldValue){
        this.getAllArticle()
      }
    },
  }
};
</script>

<style scoped lang="less">
.CommentManage-content {
  width: 100%;
}
.el-header {
  width: 90%;
  margin: 0 auto;
  background-color: white;
  color: #333;
  line-height: 60px;
}
.CommentManage-content-title {
  span {
    font-size: 15px;
    font-weight: 600;
  }
}
.el-main {
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
}
.btn-style {
  button {
    margin-left: 20px;
  }
}
.CommentManage-content-footer {
  
}
.CommentManage-content-msg-around {
  height: 72vh;
}
.reply-content-item {
  padding-top: 20px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(224, 224, 224);
}
.comment-checkbox {
  width: 2%;
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
}
.reply-content-img {
  width: 10%;
}
.reply-content-userInfo {
  width: 68%;
  padding-left: 10px;
}
.reply-content-userInfo-title {
  font-size: 14px;
  color: gray;
  span {
    font-size: 15px;
    font-weight: 600;
    margin-right: 20px;
    color: black;
  }
}
.reply-content-userInfo-info {
  span {
    line-height: 1.6;
    font-size: 15px;
  }
}
.reply-content-userInfo-time {
  display: flex;
  margin-top: 10px;
  align-items: center;
  p span {
    margin-right: 12px;
    font-size: 12px;
    color: gray;
  }
}
.checkTag{
  span{
    color: white;
  }
}
.reply-content-msg {
  width: 20%;
  //   background-color: rgb(226, 226, 226);
  border-radius: 5px;
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
    font-size: 22px;
    margin-left: 20px;
  }
  //   span{
  //       width: 50%;
  //       color: gray;
  //       line-height: 1.6;
  //       word-break: break-all;
  //       word-wrap: break-word;
  //       overflow: hidden;
  //       text-overflow: ellipsis;
  //       display: -webkit-box;
  //       -webkit-line-clamp: 3;
  //       -webkit-box-orient: vertical;
  //   }
}
.clickSpan{
  cursor: pointer;
}
::v-deep .CommentManage-content-footer .el-main{
  padding: 0;
}
</style>