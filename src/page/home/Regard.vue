<template>
  <Common>
        <template slot="content-left">
            <div class="regard-content">
                <div class="regard-list">
                    <ul>
                        <li @click="toRegardPage('regardItem')">
                            <div>
                                <span>我的关注</span>
                            </div>
                        </li>
                        <li @click="toRegardPage('fansItem')">
                            <div>
                                <span>我的粉丝</span>
                            </div>
                        </li>
                        <li @click="toRegardPage('regardCommunityItem')">
                            <div>
                                <span>我关注的社区</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="router-view">
                    <router-view></router-view>
                </div>
            </div>
        </template>
        <template slot="content-right">
            <div class="content-around">
                <PersonalData></PersonalData>
            </div>
        </template>
    </Common>
</template>

<script>
import PersonalData from '@/components/home/PersonalData.vue'
import {regardUserInfo} from '@/api/home/home'
import {myCommunityList} from '@/api/community'
export default {
    name:'Regard',
    components:{
        PersonalData
    },
    data(){
        return{
            regardObj:{},
            regardCommunity:{},
            queryParam:{
                pageNum: 1,
                pageSize: 20,
            },
            communityQueryParam:{
                pageNum: 1,
                pageSize: 20,
                userId: -1,
            },
        }
    },
    methods:{
        toRegardPage(page){
            if(page == 'regardItem'){
                // infoObj = this.regardObj
                this.$router.push({
                    name:page,
                    query:{
                        'infoObj': JSON.stringify(this.regardObj.regardList)
                    }
                },()=>{})
            }
            if(page == 'fansItem'){
                // infoObj = this.regardObj
                this.$router.push({
                    name:page,
                    query:{
                        'infoObj': JSON.stringify(this.regardObj.fansList)
                    }
                },()=>{})
            }
            if(page == 'regardCommunityItem'){
                // infoObj = this.regardCommunity
                this.$router.push({
                    name:page,
                    query:{
                        'infoObj': JSON.stringify(this.regardCommunity)
                    }
                },()=>{})
            }
            // this.$router.push({
            //         name:page,
            //         query:infoObj
            //     },()=>{})
            // console.log("==>",infoObj)
        },
        getRegardUserInfo(){
            regardUserInfo(this.queryParam).then((response)=>{
                this.regardObj = response
                console.log("regardObj",this.regardObj)
                this.$router.push({
                    name:'regardItem',
                    query:{
                        'infoObj': JSON.stringify(response.regardList)
                    }
                },()=>{})
            })
        },
        getRegardCommunityList(){
            this.communityQueryParam.userId = this.$store.state.main.userInfo.id
            myCommunityList(this.communityQueryParam).then((response)=>{
                this.regardCommunity = response
            })
        }
    },
    created(){
        this.getRegardUserInfo();
        this.getRegardCommunityList();
    }
}
</script>

<style scoped lang="less">
.content-around{
    padding-left: 10px;
}
.regard-content{
    // width: 100%;
    background-color: white;
    padding: 20px 20px;
}
.regard-list{
    border-bottom: 1px solid rgb(231, 231, 231);
    ul{
        width: 60%;
        display: flex;
        justify-content: space-around;
    }
    li{
        cursor: pointer;
        width: 100%;
        // margin-bottom: 10px;
        padding-bottom: 20px;
    }
}
// .router-view{
//     width: 100%;
//     height: 57vh;
// }
</style>