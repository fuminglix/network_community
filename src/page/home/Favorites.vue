<template>
    <Common>
        <template slot="content-left">
            <SingleContent></SingleContent>
        </template>
        <template slot="content-right">
            <div class="content-around">
                <div class="favorites-list-content">
                    <div class="my-favorites-list-around">
                        <span>我创建的收藏</span>
                        <div class="my-favorites-list-content">
                            <div class="my-favorites-list-item">
                                <i class="el-icon-collection"></i><span class="">默认收藏夹</span>
                                <div class="my-favorites-list-item-rightNum">3</div>
                                <div class="my-favorites-list-item-righticon">
                                    <el-popover
                                        placement="top"
                                        title=""
                                        width="80"
                                        trigger="hover"
                                        content="">
                                        <i class="el-icon-s-operation" slot="reference"></i>
                                        <div class="update-btn">
                                            <div>
                                                <span>修改信息</span>
                                            </div>
                                            <div>
                                                <span>删除</span>
                                            </div>
                                        </div>
                                    </el-popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </template>
    </Common>
</template>
<script>
export default {
    name:'Favorites',
    components:{},
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="less">
.content-around{
    padding-left: 10px;
}
.favorites-list-content{
    background-color: white;
    border-radius: 5px;
    padding: 10px 0 20px 0;
}
.my-favorites-list-around>span:first-child{
    color: gray;
    font-size: 15px;
    margin-left: 20px;
}
.my-favorites-list-content{
    margin-top: 10px;
}
.my-favorites-list-item{
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    i{
        font-size: 20px;
    }
    span{
        margin-left: 8px;
        font-size: 15px;
    }
}
.my-favorites-list-item:hover{
    cursor: pointer;
    background-color: rgb(231, 231, 231);
    // color: white;
    .my-favorites-list-item-rightNum{
        display: none;
    }
    .my-favorites-list-item-righticon{
        display: block;
        // color: white;
    }
}
.my-favorites-list-item-rightNum{
    position: absolute;
    right: 20px;
}
.my-favorites-list-item-righticon{
    position: absolute;
    top: 16px;
    right: 13px;
    display: none;
}
.update-btn{
    width: 100%;
    div{
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background-color: yellowgreen;
    }
}
</style>