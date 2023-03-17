<template>
    <Common>
        <template slot="content-left">
            <SingleContent></SingleContent>
        </template>
        <template slot="content-right">
            <div class="hot">
                <div class="hot-title">
                    <img src="@/assets/hot_red.png" alt="">
                    <span>热门</span>
                </div>
                <div class="hot-content">
                    <SideItem></SideItem>
                </div>
            </div>
            <div class="category-container">
                <Category></Category>
            </div>
            <div class="indexPostbarItem-container">
                <IndexPostbarItem></IndexPostbarItem>
            </div>
        </template>
    </Common>
</template>
<script>
import Category from '@/components/category/Category.vue'
import IndexPostbarItem from '@/components/main/IndexPostbarItem.vue'
export default {
    name:'Index',
    components:{
        Category,
        IndexPostbarItem
    },
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>
<style scoped lang="less">
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
    background-color: white;
}
.hot-title{
    display: flex;
    align-items: center;
    img{
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    span{
        font-size: 15px;
    }
}
.hot-content{
    margin-top: 20px;
}
.category-container{
    padding: 10px;
}
.indexPostbarItem-container{
    padding: 10px;
}
</style>