import VueRouter from "vue-router";
import Vue from "vue";
import Index from "../page/index"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'index',
            path:'/index',
            component:Index
        }
    ]
})