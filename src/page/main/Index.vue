<template>
    <Common>
        <template slot="content-left">
            <SingleContent :articleList="articleList"></SingleContent>
        </template>
        <template slot="content-right">
            <div class="hot">
                <div class="hot-title">
                    <img src="@/assets/hot_red.png" alt="">
                    <span>热门</span>
                </div>
                <div class="hot-content">
                    <SideItem :hotArticleList="hotArticleList"></SideItem>
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
import {articleList} from '@/api/article'
import {hotArticleList} from '@/api/article'
import { mavonEditor } from 'mavon-editor'
import Cookies from 'js-cookie'
export default {
    name:'Index',
    components:{
        Category,
        IndexPostbarItem
    },
    data(){
        return{
            // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                categoryId: 0
            },
            articleList:[],
            hasMore:true,
            hotArticleList:[]
        }
    },
    methods:{
        getList(){
            articleList(this.queryParams).then((response)=>{
                this.articleDetail(response.rows)
                console.log("articleList=>",this.articleList)
                if(response.total<=this.articleList.length){
                    this.hasMore=false
                }else{
                    this.hasMore=true
                    this.queryParams.pageNum++
                }
            })
        },
        showSearchShowList(initData){//展示数据
            if(initData){
                this.articleList = []
            }
            this.getList()
        },
        addMoreFun:function(){//查看更多
            this.showSearchShowList(false);
        },
        routeChange(){
            var that = this;
            this.queryParams.categoryId = (that.$route.query.classId==undefined?0:parseInt(that.$route.query.classId));//获取传参的classId
            this.checkIsLogin()
            this.showSearchShowList(true);
            this.getHotArticleList();
        },
        articleDetail(articleList){ //将数据中的markdown文章转换成html元素
            const markdownIt = mavonEditor.getMarkdownIt()
            this.articleList = articleList.filter((article)=>{
                article.content = markdownIt.render(article.content)
                return true;
            })
        },
        getHotArticleList(){ //获取热门文章数据
            hotArticleList().then((response)=>{
                this.hotArticleList = response
            })
        },
        checkIsLogin(){
            if(Cookies.get('user-Token') == null){
                this.$store.commit('CHANGEISLOGIN',false)
                if(localStorage.getItem("userInfo") != null){
                    localStorage.removeItem('userInfo');
                    this.$store.commit('REMOVEUSERINFO');
                }
            }
            
        }
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
    '$route':'routeChange',
    '$store.state.keywords':'routeChange'
    },
    created(){ //生命周期函数
        // console.log(this.$route);
        var that = this;
        that.routeChange();
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
    padding: 0 10px 10px 10px;
}
</style>