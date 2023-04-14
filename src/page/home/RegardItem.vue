<template>
    <div>
        <div v-for="item in regardList" :key="item.id" class="regardItem-content">
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
        <el-empty v-if="regardList.length < 1" :image-size="200"></el-empty>
    </div>
</template>

<script>
export default {
    name:'RegardItem',
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
        // infoObj(){
        //     if(this.$route.query.infoObj != null)
        //         return this.$route.query.infoObj;
        // },
        
    },
    watch:{
        // infoObj:{
        //     deep:true,
        //     handler(newValue,oldValue){
        //         console.log("newValue",newValue)
        //         if(newValue.regardList != null){
        //         this.regardList = newValue.regardList
        //         }
        //         if(newValue.fansList != null){
        //             this.fansList = newValue.fansList
        //         }
        //     }
        // }
    },
    created(){
        console.log("query",this.$route.query)
        console.log("infoObj",JSON.parse(this.$route.query.infoObj))
        if(this.$route.query.infoObj != null && this.$route.query.infoObj.length > 0){
            this.regardList = JSON.parse(this.$route.query.infoObj)
        }
        // if(this.$route.query.regardList != null){
            // let infoObj = this.$route.query.infoObj
            // if(infoObj.regardList.length > 0){
            //     this.regardList = infoObj.regardList
            // }
            // if(infoObj.fansList.length > 0){
            //     this.fansList = infoObj.fansList
            // }
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