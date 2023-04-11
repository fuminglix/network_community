<template>
    <div>
        <div class="search-header">
            <div class="search-nav">
                <el-menu router 
                :default-active="activeIndex"
                class="el-menu-demo" 
                mode="horizontal" 
                @select="handleSelect">
                <el-menu-item index="/searchMain/searchArticle">综合</el-menu-item>
                <el-menu-item index="/searchMain/searchUser">用户</el-menu-item>
                <el-menu-item index="#">社区</el-menu-item>
                </el-menu>
            </div>
            <div class="search-orderBy">
                {{ searchInput }}
            </div>
        </div>
        <Common>
            <template slot="content-left">
                <i></i>
                <router-view></router-view>
            </template>
            <template slot="content-right">
                <div class="often-search">
                    <div class="often-search-title">
                        <img src="@/assets/hot_red.png" alt="">
                        <span>热门</span>
                    </div>
                    <div class="often-search-content">
                        <SideItem></SideItem>
                    </div>
                </div>
            </template>
        </Common>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import {articleList,userList} from '@/api/search/search'
export default {
    name:'SearchMain',
    data(){
        return{
            activeIndex:'/searchMain/searchArticle',
            articleListTemp:[],
            userListTemp:[],
            queryParams:{
                search:"",
            }
        }
    },
    methods:{
        handleSelect(keyPath) {
            this.activeIndex = keyPath
            // console.log("this.select",this.select);
            if(keyPath.indexOf('searchArticle') != -1){
                // console.log("keyPath",keyPath)
                this.$router.push({
                    name:'searchArticle',
                    params:{
                        articleList: this.articleListTemp,
                    }
                },()=>{})
                // console.log("route",this.$route)
            }
            if(keyPath.indexOf('searchUser') != -1){
                // this.getUserList(this.queryParams)
                this.$router.push({
                    name:'searchUser',
                    params:{
                        userList: this.userListTemp,
                    }
                },()=>{})
            }
        },
        routeChange(){
        },
        getArticleList(params){
            articleList(params).then((response)=>{
                const markdownIt = mavonEditor.getMarkdownIt()
                this.articleListTemp = response.filter((article)=>{
                    article.content = markdownIt.render(article.content)
                    return true;
                })
                console.log("res",this.articleListTemp)
                this.$store.commit('CHANGEISSEARCH',false);
                this.$store.commit('CHANGESEARCH','')
                this.$router.push({
                    name:'searchArticle',
                    params:{
                        articleList: this.articleListTemp,
                    }
                },()=>{})
            })
        },
        getUserList(params){
            userList(params).then((response)=>{
                this.userListTemp = response
                console.log("userListTemp",response)
            })
            this.$store.commit('CHANGEISSEARCH',false);
            this.$store.commit('CHANGESEARCH','')
            this.$router.push({
                    name:'searchUser',
                    params:{
                        userList: this.userListTemp,
                    }
                },()=>{})
        },
    },
    computed:{
        search(){
            console.log('computed:',this.$store.state.main.isSearch)
            return this.$store.state.main.isSearch;
        },
        searchInput(){
            console.log('searchInput:',this.$store.state.main.search)
            if(this.$store.state.main.search != ''){
                this.queryParams.search = this.$store.state.main.search;
                this.getArticleList(this.queryParams)
                this.getUserList(this.queryParams)
                console.log("articleListTemp=>",this.articleListTemp)
                console.log("userListTemp=>",this.userListTemp)
            }
            return this.$store.state.main.search;
        }
    },
    watch:{
        '$route':'routeChange',
        '$store.state.keywords':'routeChange',
        articleListTemp(newValue,oldValue){
            console.log("newValue",newValue)
        },
        userListTemp(newValue,oldValue){
        }
    },
    created(){ //生命周期函数
        // this.getArticleList(this.queryParams)
        // this.$router.push({
        //     name:'searchArticle',
        //     params:{
        //         articleList: this.articleListTemp,
        //     }
        // },()=>{})
    },
}
</script>

<style lang="less">
.search-header{
    width: 100%;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
}
.search-nav{
    width: 1000px;
    margin: 0 auto;
    // color: black;
}
.search-orderBy{
    width: 1000px;
    margin: 0 auto;
}
.often-search{
    background-color: aquamarine;
    padding: 10px 0 10px 10px;
    margin-left: 10px;
    border-radius: 5px;
}
.often-search-title{
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
</style>