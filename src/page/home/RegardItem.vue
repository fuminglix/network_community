<template>
    <div>
        <div v-for="item in 2" class="regardItem-content">
            <div class="regardItem-avatar">
                <el-avatar :size="55" :src="circleUrl"></el-avatar>
            </div>
            <div class="regardItem-info">
                <span>fumingli</span>
                <div class="regardItem-name">
                    <span>简介</span>
                </div>
            </div>
            <div @mouseover="isRegard(item)" @mouseout="isRegard(item)" @click="removeRegard(item)" class="regardItem-btn">
                <!-- <el-button @mouseover="isRegard(item)" @mouseleave="isRegard(item)" @click="removeRegard(item)" type="info"> -->
                <span v-if="!flagArr[item]">已关注</span>
                <span v-else>取消关注</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'RegardItem',
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
.regardItem-content{
    margin-top: 20px;
    display: flex;
    align-items: center;
    position: relative;
}
.regardItem-info{
    margin-left: 20px;
    span {
        font-size: 16px;
        font-weight: 600;
    }
}
.regardItem-name{
    span{
        font-size: 13px;
        font-weight: 500;
        color: gray;
    }
}
.regardItem-btn{
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