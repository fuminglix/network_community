<template>
    <Common>
        <template slot="content-left">
            <div class="community-content">
                <div class="community-title">
                    <span>我的社区</span>
                </div>
                <div class="community-content">
                    <PostbarItemVue :activityContents="activityContents"></PostbarItemVue>
                </div>
            </div>
        </template>
        <template slot="content-right">
            <div class="content-around">
                <div class="postbar-footsteps">
                    <div class="postbar-footsteps-title">
                        <span>经常浏览</span>
                    </div>
                    <div class="postbar-footsteps-content-around">
                        <div v-for="item in myCommunityList" :key="item.id" class="postbar-footsteps-content">
                            <div class="postbar-footsteps-img">
                                <!-- <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar> -->
                                <el-image 
                                style="width: 40px; height: 40px;border-radius: 5px;"
                                :src="item.avatar" 
                                fit="cover">
                                </el-image>
                            </div>
                            <div class="postbar-footsteps-info">
                                <span class="postbar-footsteps-info-barName">{{ item.communityName }}社区</span>
                                <div class="postbar-footsteps-info-total">
                                    <span>{{ item.userNumber }}</span><br>
                                    <span>{{ item.contentNumber }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="personalData-around">
                    <PersonalData></PersonalData>
                </div>
            </div>
        </template>
    </Common>
</template>

<script>
import PostbarItemVue from '@/components/postbar/PostbarItem.vue';
import PersonalData from '@/components/home/PersonalData.vue';
import {regardCommunity} from '@/api/home/home'
import {myCommunityList} from '@/api/community'
export default {
    name:'Community',
    components:{
        PostbarItemVue,
        PersonalData
    },
    data(){
        return{
            squareUrl:'',
            activityContents:[],
            myCommunityList:[],
            queryParams:{
                pageNum:1,
                pageSize:10,
            }
        }
    },
    methods:{
        getRegardCommunityInfo(){
            regardCommunity(this.queryParams).then((response)=>{
                this.activityContents = response.rows
            })
        },
        getMyCommunityList(){
            myCommunityList().then((response)=>{
                this.myCommunityList = response.rows
            })
        }
    },
    created(){
        this.getRegardCommunityInfo();
        this.getMyCommunityList();
    }
}
</script>

<style scoped lang="less">
.community-content{
    padding: 0 0 20px 0;
}
.community-title{
    font-size: 15px;
    font-weight: 600;
    padding: 10px 20px 0 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(234, 234, 234);
    background-color: white;

}
.content-around{
    padding-left: 10px;
}

.postbar-footsteps{
    height: 130px;
    padding: 20px;
    font-size: 15px;
    font-weight: 600;
    background-color: white;
    border-radius: 5px;
}
.postbar-footsteps-content-around{
    width: 100%;
}
.postbar-footsteps-content{
    display: flex;
    width: 50%;
    margin-top: 10px;
    float: left;
}
.postbar-footsteps-info{
    margin-left: 8px;
    width: 90px;
}
.postbar-footsteps-info-barName{
    font-size: 13px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.postbar-footsteps-info-total{
    font-size: 10px;
    color: gray;
}
.personalData-around{
    margin-top: 10px;
}
</style>