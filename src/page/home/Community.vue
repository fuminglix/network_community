<template>
    <Common>
        <template slot="content-left">
            <div class="community-content">
                <div class="community-title">
                    <span>我的社区</span>
                </div>
                <div class="community-content">
                    <PostbarItemVue></PostbarItemVue>
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
                        <div v-for="item in 4" class="postbar-footsteps-content">
                            <div class="postbar-footsteps-img">
                                <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
                            </div>
                            <div class="postbar-footsteps-info">
                                <span class="postbar-footsteps-info-barName">二次元社区</span>
                                <div class="postbar-footsteps-info-total">
                                    <span>200w</span><br>
                                    <span>3000w</span>
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
import Common from '@/components/Common.vue';
import PostbarItemVue from '@/components/postbar/PostbarItem.vue';
import PersonalData from '@/components/home/PersonalData.vue';
export default {
    name:'Community',
    components:{
        Common,
        PostbarItemVue,
        PersonalData
    },
    data(){
        return{
            squareUrl:''
        }
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