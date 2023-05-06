import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

import RegardItem from '@/page/home/RegardItem'
import FansItem from '@/page/home/FansItem'
import RegardCommunityItem from '@/page/home/RegardCommunityItem'
import Account from '@/page/main/setting/Account'
import Reply from '@/page/main/message/Reply'
import AtMe from '@/page/main/message/AtMe'
import Love from '@/page/main/message/Love'
import SystemMsg from '@/page/main/message/SystemMsg'
import ConfigMsg from '@/page/main/message/ConfigMsg'
export default new VueRouter({
    routes:[
        {
            name:'container',
            path:'/',
            components: {container:() => import('@/page/Container.vue')},
            children:[
                {
                    name:'index',
                    path:'/',
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
                            name:'article',
                            path:'article',
                            components:{HomeMainView:() => import('@/page/home/Article.vue')},
                        },
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
                                    name:'fansItem',
                                    path:'fansItem',
                                    component:FansItem
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
                },
                {
                    name:'activityMain',
                    path:'activityMain',
                    components:{indexView:() => import('@/page/main/ActivityMain.vue')},
                },
                {
                    name:'settingMain',
                    path:'settingMain',
                    components:{indexView:() => import('@/page/main/SettingMain.vue')},
                    children:[
                        {
                            name:'account',
                            path:'account',
                            component:Account
                        }
                    ]
                },
                {
                    name:'messageMain',
                    path:'messageMain',
                    components:{indexView:() => import('@/page/main/MessageMain.vue')},
                    children:[
                        {
                            name:'reply',
                            path:'reply',
                            component:Reply
                        },
                        {
                            name:'atMe',
                            path:'atMe',
                            component:AtMe
                        },
                        {
                            name:'love',
                            path:'love',
                            component:Love
                        },
                        {
                            name:'systemMsg',
                            path:'systemMsg',
                            component:SystemMsg
                        },
                        {
                            name:'configMsg',
                            path:'configMsg',
                            component:ConfigMsg
                        }
                    ]
                },
                {
                    name:'buildMain',
                    path:'buildMain',
                    components:{indexView:() => import('@/page/main/BuildMain.vue')},
                    children:[
                        {
                            name:'publishMenu',
                            path:'publishMenu',
                            component:()=>import('@/page/main/publish/PublishMenu.vue'),
                            children:[
                                {
                                    name:'publishContent',
                                    path:'publishContent',
                                    component:()=>import('@/page/main/publish/PublishContent.vue')
                                },
                                
                            ]
                        },
                        {
                            name:'commentManage',
                            path:'commentManage',
                            component:()=>import('@/page/main/manage/Comment.vue')
                        },
                        {
                            name:'articleManage',
                            path:'articleManage',
                            component:()=>import('@/page/main/manage/Article.vue')
                        }
                    ]
                },
                {
                    name:'searchMain',
                    path:'searchMain',
                    components:{indexView:() => import('@/page/main/SearchMain.vue')},
                    children:[
                        {
                            name:'searchArticle',
                            path:'searchArticle',
                            component:()=>import('@/page/search/SearchArticle.vue')
                        },
                        {
                            name:'searchUser',
                            path:'searchUser',
                            component:()=>import('@/page/search/SearchUser.vue')
                        },
                    ]
                },
                {
                    name:'studentMain',
                    path:'studentMain',
                    components:{indexView:() => import('@/page/discover/StudentMain.vue')},
                    children:[
                        {
                            name:'studentIndex',
                            path:'studentIndex',
                            component:()=>import('@/page/discover/studentModule/StudentIndex.vue')
                        },
                        {
                            name:'questionList',
                            path:'questionList',
                            component:()=>import('@/page/discover/studentModule/QuestionList.vue')
                        }
                    ]
                },
                {
                    name:'write',
                    path:'write',
                    components:{indexView:() => import('@/page/discover/studentModule/Write.vue')},
                },
                {
                    name:'answer',
                    path:'answer',
                    components:{indexView:() => import('@/page/discover/studentModule/Answer.vue')},
                }
            ]
        },
        {
            name:'login',
            path:'/login',
            components: {container:() => import('@/page/login/Login.vue')},
        }
        
    ]
})