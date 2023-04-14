import request from '@/api/request'
//home\home.js

// 添加文章
// export function updateArticle(data) {
//   return request({
//     url: '/article',
//     method: 'put',
//     headers: {
//       isToken: true
//     },
//     data: data
//   })
// }

// 查询当前用户的个人信息和数据
export function userInfo() {
    return request({
        url: '/user/getUserInfo',
        method: 'get',
        headers: {
          isToken: true
        },
    })
}

//查询用户的关注信息
export function regardUserInfo(query) {
    return request({
        url: '/user/getRegardUserInfo',
        headers: {
          isToken: true
        },
        method: 'get',
        params:query
    })
}

//查询用户关注的社区信息
export function regardCommunityInfo(query) {
    return request({
        url: '/user/getRegardUserInfo',
        headers: {
          isToken: true
        },
        method: 'get',
        params:query
    })
}

//获取当前用户的文章列表
export function articleList(){
    return request({
        url: '/article/getArticleList',
        headers: {
          isToken: true
        },
        method: 'get'
    })
}

//查询当前用户的社区信息
export function regardCommunity(query) {
    return request({
        url: '/community/regardCommunityInfo',
        method: 'get',
        headers: {
          isToken: true
        },
        params: query
    })
  }
//查询分类
// export function category() {
//   return request({
//       url: '/article/category',
//       headers: {
//         isToken: false
//       },
//       method: 'get'
//   })
// }

// export function updateViewCount(articleId) {
//     return request({
//         url: '/article/updateViewCount/' + articleId,
//         headers: {
//           isToken: false
//         },
//         method: 'put'
//     })
    
// }
