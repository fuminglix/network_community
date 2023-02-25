import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'container',
            path:'/',
            components: {container:() => import('@/page/Container.vue')},
            children:[{
                    name:'index',
                    path:'index',
                    components:{indexView:() => import('@/page/main/Index.vue')}
                },
                {
                    name:'ArticleMain',
                    path:'ArticleMain',
                    components:{indexView:() => import('@/components/main/ArticleMain.vue')}
                }
            ]
        },
        
    ]
})