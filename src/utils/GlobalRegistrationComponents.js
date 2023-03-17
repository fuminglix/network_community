import SideItem from '@/components/main/SideItem'
import SingleContent from '@/components/main/SingleContent'
import Comment from '@/components/main/Comment'
import Common from '@/components/Common'
export default{
    install(Vue) {
        Vue.component('SideItem', SideItem);
        Vue.component('SingleContent', SingleContent);
        Vue.component('Comment', Comment);
        Vue.component('Common', Common);
      }
    
}