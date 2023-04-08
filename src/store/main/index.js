//main仓库
const state = {
    loading: false,
    themeObj: 0,//主题
    keywords:'',//关键词
    errorImg: 'this.onerror=null;this.src="' + require('@/assets/at.png') + '"',
    baseURL:'/api',
    // baseURL:'http://localhost:8917/api'
    defaultAvatar:'http://rs6c4ew2k.hn-bkt.clouddn.com/86-9.jpg?e=1680247714&token=Au1Tszq7zBY0rfxaKBKCXebdYDSSznay0zPsZjl9:BPP7zAx93Aj0sB0LQPf_RThH0NU=',
    // isLogin:localStorage.getItem('userInfo') == null ? false : true
    isLogin:false,
    userInfo:{}
}
const action = {
    changeIsLogin(context,value){
        context.commit('CHANGEISLOGIN',value)
    },
}
const mutations = {
    CHANGEISLOGIN(state,value){
        state.isLogin = true
        if(!value) state.isLogin = false;
    },
    ADDUSERINFO(state,value){
        state.userInfo = value;
    },
    REMOVEUSERINFO(state){
        state.userInfo = null;
    }
}
const getters = {}

export default{
    state,
    action,
    mutations,
    getters
}