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
                        <li @click="toRegardPage('regardItem')">
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
                <router-view></router-view>
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
export default {
    name:'Regard',
    components:{
        PersonalData
    },
    data(){
        return{

        }
    },
    methods:{
        toRegardPage(page){
            this.$router.push({
                name:page
            },()=>{})
        }
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
</style>