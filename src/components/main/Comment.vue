<template>
    <div class="comment">
        <div class="comment-order">
            <div class="order-by-hot">
                <span>按热度排序</span>
            </div>
            <div class="order-by-time">
                <span>按时间排序</span>
            </div>
        </div>
        <div class="edit-comment">
            <div class="edit-avatar">
                <el-avatar :size="48" :src="circleUrl"></el-avatar>
            </div>
            <div class="edit-input">
                <el-input
                    style="width: 100%"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea1">
                </el-input>
            </div>
        </div>
        <div class="comment-info-around">
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222
        </div>
    </div>
</template>

<script>
export default {
    name:'comment',
    data(){
        return{
            circleUrl:'',
            textarea1:''
        }
    }
}
</script>

<style scoped>
.comment{
    margin-top: 30px;
}
.comment-order{
    display: flex;
    border-bottom: 1px solid rgb(220, 220, 220);
}
.order-by-hot,.order-by-time{
    /* width: 100px; */
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.order-by-hot{
    /* background-color: pink; */

}
.order-by-time{
    margin-left: 40px;
    /* background-color: aqua; */
}
.edit-comment{
    display: flex;
    align-items: center;
    margin: 20px 0;
}
.edit-input{
    margin-left: 20px;
    width: 80%;
}
</style>