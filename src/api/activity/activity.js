import request from '@/api/request'
//动态页获取信息

// 添加动态
export function addActivityContent(data) {
  return request({
    url: 'activity',
    method: 'post',
    headers: {
      isToken: true
    },
    data: data
  })
}

// 查询当前用户和他的关注用户信息
export function activityUserInfo(userId) {
    return request({
        url: '/user/activityUserInfo/'+ userId,
        method: 'get',
        headers: {
          isToken: true
        },
    })
}

// 查询当前动态信息
export function activityInfo(query) {
    return request({
        url: '/activity/activityInfo',
        method: 'get',
        headers: {
          isToken: true
        },
        params:query
    })
}

// //查询最热文章
// export function hotArticleList() {
//     return request({
//         url: '/article/hotArticleList',
//         headers: {
//           isToken: false
//         },
//         method: 'get'
//     })
// }

// //获取文章详情
// export function getArticle(articleId) {
//     return request({
//         url: '/article/getArticle/' + articleId,
//         headers: {
//           isToken: false
//         },
//         method: 'get'
//     })
// }

// //查询分类
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
