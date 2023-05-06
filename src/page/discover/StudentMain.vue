<template>
  <Common>
    <template slot="content-left">
        <router-view></router-view>
    </template>
    <template slot="content-right">
        <SideItem></SideItem>
    </template>
  </Common>
</template>

<script>
import SideItem from '@/components/discover/SideItem.vue';
export default {
    name:'StudentMain',
    components:{SideItem},
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">

</style>