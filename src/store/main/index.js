//main仓库
const state = {
    loading: false,
    themeObj: 0,//主题
    keywords:'',//关键词
    errorImg: 'this.onerror=null;this.src="' + require('@/assets/at.png') + '"',
    baseURL:'/api'
    // baseURL:'http://localhost:8917/api'
}
const mutations = {}
const action = {}
const getters = {}

export default{
    state,
    mutations,
    action,
    getters
}