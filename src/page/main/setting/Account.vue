<template>
    <div class="account-content">
        <div class="account-pwd">
            <div class="account-pwd-text">
                <span>密码</span>
                <p>
                    <span>状态</span>
                </p>
            </div>
            <div class="account-pwd-edit">
                <el-link type="primary">编辑</el-link>
            </div>
        </div>
        <div class="account-phone">
            <div class="account-phone-text">
                <span>绑定手机</span>
                <p>
                    <span>状态</span>
                </p>
            </div>
            <div class="account-phone-edit">
                <el-link type="primary">编辑</el-link>
            </div>
        </div>
        <div class="account-mail">
            <div class="account-mail-text">
                <span>绑定邮箱</span>
                <p>
                    <span>状态</span>
                </p>
            </div>
            <div class="account-mail-edit">
                <el-link type="primary">编辑</el-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Account'
}
</script>

<style scoped lang="less">
.account-content{
    padding: 10px;
    border: 1px solid rgb(233, 233, 233);
}
.account-pwd,.account-phone,.account-mail{
    padding: 10px 8px;
    display: flex;
    position: relative;
    // background-color: yellowgreen;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.account-pwd-text,.account-phone-text,.account-mail-text{
    span{
        font-size: 15px;
        line-height: 1.7;
    }
    p span{
        color: gray;
    }
}
.account-pwd-edit,.account-phone-edit,.account-mail-edit{
    position: absolute;
    right: 10px;
    top: 30px;
}
</style>