<template>
  <div class="CommentManage-content">
    <el-header>
      <el-row :gutter="20">
        <el-col class="CommentManage-content-title" :span="20" :offset="0">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">文章管理</el-menu-item>
            <!-- <el-menu-item index="3">消息中心</el-menu-item> -->
          </el-menu>
        </el-col>
        <el-col :span="4" :offset="0">
          <el-input
            placeholder="搜索文章"
            suffix-icon="el-icon-search"
            v-model="input1"
          >
          </el-input>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col style="font-size: 14px" :span="17" :offset="0">
          <el-col :span="4" :offset="0">
            <span>全部文章</span>
          </el-col>
          <el-col :span="4" :offset="0">
            <span>草稿</span>
          </el-col>
        </el-col>
        <el-col :span="3" :offset="0">
          <el-select v-model="progressOptionsValue" placeholder="请选择">
            <el-option
              v-for="item in progressOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4" :offset="0">
          <el-select v-model="sortOptionsValue" placeholder="请选择">
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
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
        <div class="CommentManage-content-msg-around">
          <div v-for="item in 1" class="reply-content-item">
            <!-- <div class="comment-checkbox">
                        <el-checkbox v-model="checked"></el-checkbox>
                    </div> -->
            <div class="reply-content-img">
              <!-- <el-avatar :size="50" :src="circleUrl"></el-avatar> -->
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                fit="fill"
              ></el-image>
            </div>
            <div class="reply-content-userInfo">
              <div class="reply-content-userInfo-title">
                <span>title</span>
              </div>
              <!-- <div class="reply-content-userInfo-info">
                            <span>22222222
                            </span>
                        </div> -->
              <div class="reply-content-userInfo-time">
                <p>
                  <span>2022年5月13日 12:08</span>
                </p>
                <span class="el-icon-chat-dot-round" style="font-size: 13px">
                  回复</span
                >
              </div>
            </div>
            <div class="reply-content-msg">
              <el-button>编辑</el-button>
              <el-popover placement="left" width="200" trigger="hover">
                <el-button>默认按钮</el-button>
                <span slot="reference" class="el-icon-s-operation"></span>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>
  
  <script>
export default {
  name: "Article",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      option: "全部文章",
      value: "",
      input1: "",
      checked: true,
      circleUrl: "",
      url: "",
      sortOptions: [
        {
          value: "选项1",
          label: "发布时间排序",
        },
        {
          value: "选项2",
          label: "浏览量排序",
        },
        {
          value: "选项3",
          label: "评论数排序",
        },
        {
          value: "选项4",
          label: "收藏数排序",
        },
      ],
      progressOptions: [
        {
          value: "选项1",
          label: "已通过",
        },
        {
          value: "选项2",
          label: "审核中",
        },
        {
          value: "选项3",
          label: "未通过",
        },
      ],
      progressOptionsValue: "",
      sortOptionsValue:''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
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
//   .selectSort{
//       display: flex;
//       li{
//           // margin-right: 20px;
//           cursor: pointer;
//           margin: 0 10px;
//           font-size: 14px;
//           text-align: center;
//           height: 50px;
//           line-height: 50px;
//       }
//       i{
//           height: 12px;
//           margin-top: 20px;
//           border: 1px solid rgb(203, 203, 203);
//       }
//       li:hover{
//           font-weight: 600;
//           color: rgb(8, 151, 198);
//       }
//   }
.CommentManage-content-footer {
}
.CommentManage-content-msg-around {
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
  p {
  }
  span {
    margin-right: 12px;
    font-size: 12px;
    color: gray;
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
</style>