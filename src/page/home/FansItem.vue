<template>
    <div>
        <div v-for="item in fansList" :key="item.id" class="regardItem-content">
            <div class="regardItem-avatar">
                <!-- <el-avatar :size="55" :src="circleUrl"></el-avatar> -->
                <el-image
                style="width: 54px; height: 54px;border-radius: 27px;"
                :src="item.avatar"
                fit="cover"></el-image>
            </div>
            <div class="regardItem-info">
                <span>{{ item.nickName }}</span>
                <div class="regardItem-name">
                    <span>{{ item.profile }}</span>
                </div>
            </div>
            <div @mouseover="isRegard(item)" @mouseout="isRegard(item)" @click="removeRegard(item)" class="regardItem-btn">
                <!-- <el-button @mouseover="isRegard(item)" @mouseleave="isRegard(item)" @click="removeRegard(item)" type="info"> -->
                <span v-if="!flagArr[item]">已关注</span>
                <span v-else>取消关注</span>
            </div>
        </div>
        <el-empty v-if="fansList.length < 1" :image-size="200"></el-empty>
    </div>
</template>

<script>
export default {
    name:'FansItem',
    data(){
        return{
            circleUrl:'',
            flag:true,
            flagArr:[],
            regardList:[],
            fansList:[],
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
    },
    watch:{
    },
    created(){
            if(this.$route.query.infoObj != null && this.$route.query.infoObj.length > 0){
                this.fansList = JSON.parse(this.$route.query.infoObj)
            }
            console.log("length",this.fansList.length)
        // }
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