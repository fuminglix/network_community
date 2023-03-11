import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

import RegardItem from '@/page/home/RegardItem'
import RegardCommunityItem from '@/page/home/RegardCommunityItem'
export default new VueRouter({
    routes:[
        {
            name:'container',
            path:'/',
            components: {container:() => import('@/page/Container.vue')},
            children:[
                {
                    name:'index',
                    path:'index',
                    components:{indexView:() => import('@/page/main/Index.vue')}
                },
                {
                    name:'ArticleMain',
                    path:'ArticleMain',
                    components:{indexView:() => import('@/page/main/ArticleMain.vue')}
                },
                {
                    name:'Postbar',
                    path:'Postbar',
                    components:{indexView:() => import('@/page/main/Postbar.vue')},
                },
                {
                    name:'PostbarMain',
                    path:'PostbarMain',
                    components:{indexView:() => import('@/page/main/PostbarMain.vue')},
                },
                {
                    name:'discover',
                    path:'discover',
                    components:{indexView:() => import('@/page/discover/DiscoverMain.vue')},
                },
                {
                    name:'homeMain',
                    path:'homeMain',
                    components:{indexView:() => import('@/page/home/HomeMain.vue')},
                    children:[
                        {
                            name:'activity',
                            path:'activity',
                            components:{HomeMainView:() => import('@/page/home/Activity.vue')},
                        },
                        {
                            name:'favorites',
                            path:'favorites',
                            components:{HomeMainView:() => import('@/page/home/Favorites.vue')},
                        },
                        {
                            name:'regard',
                            path:'regard',
                            components:{HomeMainView:() => import('@/page/home/Regard.vue')},
                            children:[
                                {
                                    name:'regardItem',
                                    path:'regardItem',
                                    component:RegardItem
                                },
                                {
                                    name:'regardCommunityItem',
                                    path:'regardCommunityItem',
                                    component:RegardCommunityItem
                                }
                            ]
                        },
                        {
                            name:'community',
                            path:'community',
                            components:{HomeMainView:() => import('@/page/home/Community.vue')},
                        }
                    ]
                }
            ]
        },
        
    ]
})