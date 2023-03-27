<template>
    <div class="Quote-item-info">
        <div class="Quote-item-info-title">
            <div class="Quote-item-info-title-avatar">
                <el-avatar :size="38" :src="circleUrl"></el-avatar>
            </div>
            <div class="Quote-item-info-author">
                <div class="Quote-item-info-author-name">
                    <span>浮名里</span>
                </div>
                <div class="Quote-item-info-time">
                    <span>1小时前 · 发表</span>
                </div>
            </div>
        </div>
        <div class="Quote-item-info-content">
            <div class="Quote-item-info-report-content">
                <p class="Quote-item-info-report-content-describe">
                    <span>1121</span>
                </p>
                <p v-if="0" class="Quote-item-info-report-content-text">222222222222222222222222222222222222
                    2222222222222222222222222222222222222222
                    222222222222222222222222222222222222
                    2222222222222222222222222222222222222222222222222222222222222222222222222222
                    2222222222222222222222222222222222222222
                    22222222222222222222222222222222222222222
                </p>
                <div v-else>
                    <div class="title">
                        <span>
                            <el-link :underline="false" href="http://localhost:8080/#/ArticleMain" target="_blank">文章标题</el-link>
                        </span>
                    </div>
                    <div class="summary">
                        <span>
                            <p class="summary-text">
                            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                            1111111111111111111111111111111111
                            11111111111111111111111111111111111111111111
                            </p>
                        </span>
                    </div>
                </div>
                <span style="cursor: pointer;color:#00AEEC"></span>
            </div>
        </div>
        <div v-if="srcList.length > 0" class="Quote-item-info-content-img">
            <span v-for="url in srcList">
                <el-image 
                style="width: 180px; height: 180px"
                :src="url" 
                :preview-src-list="srcList"
                fit="cover">
                </el-image>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'QuoteItem',
    data(){
        return{
            circleUrl:'',
            url: '',
            srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
        }
    }
}
</script>

<style scoped lang="less">
.Quote-item-info{
    /* margin-left: 60px; */
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(235, 235, 235);
}
.Quote-item-info-title{
    display: flex;
    align-items: center;
}
.Quote-item-info-author{
    margin-left: 10px;
}
.Quote-item-info-author-name{
    font-size: 13px;
}
.Quote-item-info-time{
    font-size: 10px;
    color: gray;
}
.Quote-item-info-content{
    margin-top: 5px;
}
.Quote-item-info-report-content-describe{
    margin-bottom: 5px;
    span{
        font-size: 14px;
    }
}
.Quote-item-info-report-content-text{
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}
.title span a{
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    color: black;

    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.summary{
    width: 100%;
    display: flex;
    align-items: top;
    font-size: 15px;
}
.summary-text{
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.Quote-item-info-content-img{
    width: 100%;
    padding: 10px 0;
    span{
        margin: 2px;
        width: 200px;
        height: 200px;
    }
}

</style>