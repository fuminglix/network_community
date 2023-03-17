<template>
    <el-container class="buildMain-container">
        <el-aside width="200px">
            <el-menu router 
            :default-active="this.$router.path">
                <el-menu-item index="/buildMain/publishContent">
                    <el-button style="margin: 10px 0 10px 8px;width: 140px;height: 40px;" type="primary">发布</el-button>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>内容管理</template>
                    <el-menu-item index="/buildMain/articleManage">稿件管理</el-menu-item>
                    <el-menu-item index="/buildMain/commentManage">评论管理</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>数据中心</template>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>待定</template>
                </el-submenu>
            </el-menu>
        </el-aside>
        
        <el-container class="buildMain-right-container"> 
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name:'BuildMain',
    data(){
        return{
        }
    },
    methods:{
        toPublish(){
            this.$router.push({
                name:'publishContent'
            },()=>{})
        }
    },
    computed:{
    }
}
</script>

<style scoped lang="less">
.buildMain-container{
    padding-top: 10px;
    border: 1px solid #eee;
    overflow-x: hidden;
    // height: 100%;
}
.el-aside {
    // height: 100%; 
    height: 90vh;
    overflow-x: hidden;
    color: rgb(202, 202, 202);
    background-color: white
}

.buildMain-right-container{
}
.el-header {
    width: 90%;
    margin: 0 auto;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
.el-main{
    width: 90%;
    margin: 0 auto;
    background-color: #6c6c6c;

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
