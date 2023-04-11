<template>
    <div>
        <div class="search-header">
            <div class="search-nav">
                <el-menu router 
                default-active="/searchMain/singleContent" 
                class="el-menu-demo" 
                mode="horizontal" 
                @select="handleSelect">
                <el-menu-item index="/searchMain/singleContent">综合</el-menu-item>
                <el-menu-item index="/searchMain/searchUser">用户</el-menu-item>
                <el-menu-item index="#">社区</el-menu-item>
                </el-menu>
            </div>
            <div class="search-orderBy">
                
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
            // activeIndex: '/searchMain/singleContent',
            select:'/searchMain/singleContent',
            articleListTemp:[],
            userListTemp:[],
            queryParams:{
                search:"",
            }
        }
    },
    methods:{
        handleSelect(keyPath) {
            this.select = keyPath
            console.log("this.select",this.select);
            if(keyPath.indexOf('singleContent') != -1){
                // console.log("keyPath",keyPath)
                this.$router.push({
                    name:'singleContent',
                    params:{
                        articleList: this.articleListTemp,
                    }
                },()=>{})
            }
            if(keyPath.indexOf('searchUser') != -1){
                this.getUserList(this.queryParams)
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
                console.log("res",response)
                this.$router.push({
                    name:'singleContent',
                    query:{
                        articleList: this.articleListTemp
                    }
                },()=>{})
                this.$store.commit('CHANGEISSEARCH',false);
            })
        },
        getUserList(params){
            userList(params).then((response)=>{
                this.userListTemp = response
                console.log("userListTemp",response)
            })
            this.$store.commit('CHANGEISSEARCH',false);
        }
    },
    computed:{
        search(){
            console.log('computed:',this.$store.state.main.isSearch)
            return this.$store.state.main.isSearch;
        },
        searchInput(){
            return this.$store.state.main.search;
        }
    },
    watch:{
        '$route':'routeChange',
        '$store.state.keywords':'routeChange',
        searchInput(newValue,oldValue){
                this.queryParams.search = newValue;
                console.log("newValue",newValue)
                if(this.select.indexOf('singleContent') != -1){
                this.getArticleList(this.queryParams);
                }
                if(this.select.indexOf('searchUser') != -1){
                this.getUserList(this.queryParams);
                }
        },
        search(newValue,oldValue){
            if(newValue && this.select.indexOf('singleContent') != -1){
                this.getArticleList(this.queryParams);
            }
            if(newValue && this.select.indexOf('searchUser') != -1){
                this.getUserList(this.queryParams);
            }
        }
    },
    created(){ //生命周期函数
        this.queryParams.search = this.$store.state.main.search
        this.getArticleList(this.queryParams);
        console.log("route",this.$route)
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