import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router  from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
