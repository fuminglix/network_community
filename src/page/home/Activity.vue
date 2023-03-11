<template>
    <div class="homemain-body">
        <Common>
            <template slot="content-left">
                <SingleContent></SingleContent>
            </template>
            <template slot="content-right">
                <div class="content-around">
                    <div class="item-content">
                        <div class="notice-content-title">
                            <span>公告</span>
                        </div>
                        <div class="notice-content-info">
                            <span>
                                2222222222222222222
                            </span>
                        </div>
                    </div>
                    <PersonalData></PersonalData>
                </div>
            </template>
        </Common>
    </div>
</template>

<script>
import Common from '@/components/Common.vue';
import SingleContent from '@/components/main/SingleContent.vue';
import PersonalData from '@/components/home/PersonalData.vue';
export default {
    name:'Activity',
    components:{
        Common,
        SingleContent,
        PersonalData
    }

}
</script>

<style scoped lang="less">
.content-around{
    padding-left: 10px;
}
.item-content{
    background-color: white;
    border-radius: 5px;
    padding: 10px 20px 20px 20px;
    margin-bottom: 10px;
}
.notice-content-title{
    font-size: 15px;
    font-weight: 600;
}
.notice-content-info{
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgb(229, 229, 229);
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