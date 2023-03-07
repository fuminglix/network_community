<template>
    <Common>
        <template slot="content-left">
            <SingleContent></SingleContent>
        </template>
        <template slot="content-right">
            <div class="hot">
                <div class="hot-title">
                    <span>热门</span>
                </div>
                <div v-for="item in 5" class="hot-content">
                    <div class="hot-content-text">
                        <span>1111</span>
                    </div>
                </div>
            </div>
            <Category></Category>
            <PostbarItem></PostbarItem>
        </template>
    </Common>
    <!-- <div class="index-container">
        <div class="content-around">
            <SingleContent></SingleContent>
        </div>
        <div class="content-right">
            <div class="hot">
                <div class="hot-title">
                    <span>热门</span>
                </div>
                <div v-for="item in 5" class="hot-content">
                    <div class="hot-content-text">
                        <span>1111</span>
                    </div>
                </div>
            </div>
            <Category></Category>
            <PostbarItem></PostbarItem>
        </div>
    </div> -->
</template>
<script>
import Common from '@/components/Common.vue';
import SingleContent from '@/components/main/SingleContent.vue'
import Category from '@/components/category/Category.vue'
import PostbarItem from '@/components/main/PostbarItem.vue'
export default {
    name:'Index',
    components:{
        SingleContent,
        Category,
        PostbarItem,
        Common
    },
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>
<style scoped>
.index-container{
    width: 1000px;
    height: 100%;
    margin: 10px auto;
    display: flex;
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
.content-around{
    width: 70%;
    border-radius: 5px;
}
.content-right{
    width: 30%;
}


.hot{
    margin: 0 10px;
    border-radius: 5px;
    padding: 10px;
    background-color: yellowgreen;
}
.hot-title{

}
.hot-content{
    margin-top: 5px;
}
/* .extend{
    width: 17%;
    margin-top: 20px;
    background-color: whitesmoke;
} */
</style>