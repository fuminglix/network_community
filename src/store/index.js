import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along'

import main from '@/store/main'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        main
    },
    plugins: [createVuexAlong()]
})