import VueRouter from "vue-router";
import Vue from "vue";
import Index from "@/components/Index"
import MainIndex from "@/page/main/MainIndex"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'container',
            path:'/',
            components: {container:() => import('@/components/Index.vue')},
            children:[{
                    name:'index',
                    path:'index',
                    components:{index:() => import('@/page/main/MainIndex.vue')}
            }]
        },
        
    ]
})