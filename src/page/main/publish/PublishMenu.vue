<template>
    <div class="buildMain-content">
        <el-menu router 
            :default-active="activeIndex"
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect"
            background-color="#fff"
            text-color="#020202"
            active-text-color="#1296db">
        <el-menu-item index="/buildMain/publishMenu/publishContent">发布文章</el-menu-item>
        <el-menu-item index="#"></el-menu-item>
        <el-menu-item index="#2"></el-menu-item>
        <el-menu-item index="#3"></el-menu-item>
        </el-menu>
        <el-container class="buildMain-right-container"> 
            <router-view></router-view>
        </el-container>
    </div>
</template>
<script>
export default {
    name:'PublishMenu',
    data() {
      return {
        activeIndex: '/buildMain/publishMenu/publishContent',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key
        console.log(key, keyPath);
        console.log(this.$router);
      }
    }
}
</script>

<style scoped lang="less">
.buildMain-content{
    width: 90%;
    height: 85vh;
    // overflow: scroll;
    overflow-x: hidden;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    padding: 20px 0;
    border-radius: 5px;
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