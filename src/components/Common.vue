<template>
  <div class="index-container">
        <div class="content-left-around">
            <!-- <div class="content">
                <div class="content-left"> -->
                    <slot name="content-left">left</slot>
                <!-- </div>
            </div> -->
        </div>
        <div class="content-right">
            <slot name="content-right">right</slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.index-container{
    width: 1000px;
    height: 100%;
    margin: 10px auto;
    display: flex;
}
.content-left-around{
    width: 70%;
    border-radius: 5px;
    /* background-color: aquamarine; */
}
.content-right{
    width: 30%;
    /* background-color: pink; */
}
.content{
    width: 100%;
    display: flex;
    align-items: top;
    background-color: white;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgb(237, 237, 237);
}
.content-left{
    width: 100%;
    margin: 20px 20px;
}
</style>