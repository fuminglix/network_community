<template>
    <div class="item-content">
        <div class="author-content-title">
            <span>个人资料</span>
        </div>
        <div class="author-content-info">
            <div class="author-id">
                id<span> 00001</span>
            </div>
            <div class="author-birthday">
                生日<span> 10-15</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.item-content{
    background-color: white;
    border-radius: 5px;
    padding: 10px 20px 20px 20px;
    margin-bottom: 10px;
}
.author-content-title{
    font-size: 15px;
}
.author-content-info{
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgb(229, 229, 229);   
    display: flex;
}
.author-id,.author-birthday{
    width: 50%;
    font-size: 13px;
    color: rgb(157, 157, 157);
    span{
        color: rgb(44, 44, 44);
    }
}
</style>