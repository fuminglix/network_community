<template>
  <div>
        <div v-for="item in 4" class="regardCommunityItem-content">
            <div class="regardCommunityItem-avatar">
                <el-avatar :size="55" shape="square" :src="circleUrl"></el-avatar>
            </div>
            <div class="regardCommunityItem-info">
                <span>fumingli</span>
                <div class="regardCommunityItem-name">
                    <span>简介</span>
                </div>
            </div>
            <div @mouseover="isRegard(item)" @mouseout="isRegard(item)" @click="removeRegard(item)" class="regardCommunityItem-btn">
                <!-- <el-button @mouseover="isRegard(item)" @mouseleave="isRegard(item)" @click="removeRegard(item)" type="info"> -->
                <span v-if="!flagArr[item]">已关注</span>
                <span v-else>取消关注</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'RegardCommunityItem',
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
    }
}
</script>

<style scoped lang="less">
.regardCommunityItem-content{
    margin-top: 20px;
    display: flex;
    align-items: center;
    position: relative;
}
.regardCommunityItem-info{
    margin-left: 20px;
    span {
        font-size: 16px;
        font-weight: 600;
    }
}
.regardCommunityItem-name{
    span{
        font-size: 13px;
        font-weight: 500;
        color: gray;
    }
}
.regardCommunityItem-btn{
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