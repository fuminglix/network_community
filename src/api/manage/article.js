import request from '@/api/request'
// manage/article.js

// 添加文章
export function updateArticle(data) {
  return request({
    url: '/article',
    method: 'put',
    headers: {
      isToken: true
    },
    data: data
  })
}
// 查询当前用户的文章列表
export function myArticleList(query) {
    return request({
        url: '/article/manage/articleList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}

//查询最热文章
// export function hotArticleList() {
//     return request({
//         url: '/article/hotArticleList',
//         headers: {
//           isToken: false
//         },
//         method: 'get'
//     })
// }

//获取需要更新文章详情
export function getArticle(articleId) {
    return request({
        url: '/article/getUpdateArticle/' + articleId,
        headers: {
          isToken: true
        },
        method: 'get'
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
