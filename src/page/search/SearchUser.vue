<template>
    <div>
        <div v-for="item in userList" :key="item.id" class="searchUser-content">
            <div class="searchUser-avatar">
                <el-avatar :size="55" :src="item.avatar"></el-avatar>
            </div>
            <div class="searchUser-info">
                <span>{{ item.userName }}</span>
                <div class="searchUser-name">
                    <span>{{ item.profile }}</span>
                </div>
            </div>
            <div @mouseover="isRegard(item)" @mouseout="isRegard(item)" @click="removeRegard(item)" class="searchUser-btn">
                <!-- <el-button @mouseover="isRegard(item)" @mouseleave="isRegard(item)" @click="removeRegard(item)" type="info"> -->
                <span v-if="!flagArr[item]">已关注</span>
                <span v-else>取消关注</span>
            </div>
        </div>
        <el-empty v-if="userList.length == 0" :image-size="200"></el-empty>
    </div>
</template>

<script>
export default {
    name:'SearchUser',
    data(){
        return{
            circleUrl:'',
            flag:true,
            flagArr:[]
        }
    },
    methods:{
        isRegard(id){
            // console.log("star=>"+this.flagArr[id])
            if(this.flagArr[id] == null) this.flagArr[id] = false;
            this.flagArr.splice(id,1,!this.flagArr[id])
            // console.log("end=>"+this.flagArr[id])
        },
        removeRegard(id){
            console.log(id)
        }
    },
    computed:{
        userList(){
            console.log("userList",this.$route.query.userList)
            if(this.$route.params.userList != null) return this.$route.params.userList;
        }
    }
}
</script>

<style scoped lang="less">
.searchUser-content{
    margin-top: 20px;
    display: flex;
    align-items: center;
    position: relative;
}
.searchUser-info{
    margin-left: 20px;
    span {
        font-size: 16px;
        font-weight: 600;
    }
}
.searchUser-name{
    span{
        font-size: 13px;
        font-weight: 500;
        color: gray;
    }
}
.searchUser-btn{
    width: 96px;
    height: 33px;
    right: 10px;
    z-index: 10;
    border-radius: 5px;
    text-align: center;
    line-height: 33px;
    font-size: 14px;
    background-color: rgb(146, 146, 146);
    position: absolute;
    cursor: pointer;
}
</style>