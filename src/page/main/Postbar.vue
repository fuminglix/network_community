<template>
    <Common>
        <template slot="content-left">
            <PostbarItem :activityContents="communityInfoObj.activityContents"></PostbarItem>
        </template>
        <template slot="content-right">
            <div class="content-right-around">
                <div class="postbar-info">
                    <div class="postbar-basic-info">
                        <div class="postbar-avatar">
                            <!-- <el-avatar shape="square" :size="48" :src="circleUrl"></el-avatar> -->
                            <el-image 
                            style="width: 48px; height: 48px;border-radius: 5px;"
                            :src="communityInfoObj.community.avatar" 
                            fit="cover">
                            </el-image>
                        </div>
                        <div class="postbar-introduce">
                            <div class="postbar-name">
                                <span>{{ communityInfoObj.community.communityName }}</span>
                            </div>
                            <span class="postbar-introduce-text">{{ communityInfoObj.community.description }}</span>
                        </div>
                    </div>
                    <div class="postbar-other-info">
                        <div>
                            <div>
                                <span>人数</span><br>
                                <a href="">{{ communityInfoObj.community.userNumber }}</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>帖子</span><br>
                                <a href="">{{ communityInfoObj.community.contentNumber }}</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>活跃度</span><br>
                                <a href="">{{ communityInfoObj.community.activity }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="postbar-recommend">
                        <span>吧主推荐</span>
                        <SideItem></SideItem>
                    </div>
                </div>
                <div class="postbar-hot">
                    <span>热门讨论</span>
                    <SideItem></SideItem>
                </div>
            </div>
        </template>
    </Common>
</template>

<script>
import PostbarItem from '@/components/postbar/PostbarItem.vue';
import {CommunityInfo} from '@/api/community'
export default {
    name:'Postbar',
    components:{
        PostbarItem
    },
    data(){
        return{
            circleUrl:'',
            communityInfoObj:{},
            queryParams:{
                pageNum:1,
                pageSize:10,
                communityId:3,
            }
        }
    },
    methods:{
        getCommunityInfo(){
            this.queryParams.communityId = this.$route.query.communityId
            CommunityInfo(this.queryParams).then((response)=>{
                this.communityInfoObj = response
            })
        }
    },
    computed:{
    },
    created(){
        this.getCommunityInfo()
    }
}
</script>

<style scoped lang="less">
.content-right-around{
    padding-left: 10px;
}
.postbar-info{
    padding: 10px;
    background-color: white;
    border-radius: 5px;
}
.postbar-basic-info{
    display: flex;
    align-items: center;
}
.postbar-introduce{
    padding-left: 10px;
    width: 75%;
}
.postbar-introduce-text{
    font-size: 13px;
    color: gray;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.postbar-other-info{
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    text-align: center;
    span{
        font-size: 14px;
        color: gray;
    }
    a{
        font-size: 14px;
        color: black;
    }
}
.postbar-recommend{
    padding: 10px 0 0 10px;
}
.postbar-hot{
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px 20px;
    background-color: white;
}
</style>