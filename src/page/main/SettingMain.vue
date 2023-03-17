<template>
    <Common>
        <template slot="content-left">
            <div class="SettingMain-content">
                <div class="content-left-list">
                    <ul>
                        <li @click="toSettingPage('account')">
                            <div>
                                <span>账号与密码</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>待定</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="content-left-info">
                    <router-view></router-view>
                </div>
            </div>
        </template>
        <template slot="content-right">
            <div class="content-around">
                2
            </div>
        </template>
    </Common>
</template>

<script>
export default {
    name:'SettingMain',
    components:{},
    data(){
        return{

        }
    },
    methods:{
        toSettingPage(page){
            this.$router.push({
                name:page
            },()=>{})
        }
    }
}
</script>

<style scoped lang="less">
.SettingMain-content{
    background-color: rgb(251, 251, 251);
    display: flex;
}
.content-around{
    padding-left: 10px;
}
.content-left-list{
    width: 20%;
    // background-color: yellowgreen;

    ul li{
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgb(240, 240, 240);
        cursor: pointer;
    }
}
.content-left-info{
    width: 80%;
    background-color: rgb(251, 251, 251);
}
</style>