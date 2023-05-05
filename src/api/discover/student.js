import request from '@/api/request'

// 添加问题
export function addQuestion(data) {
  return request({
    url: '/discover/question',
    method: 'post',
    headers: {
      isToken: true
    },
    data: data
  })
}

// 查询回答列表
export function answerList(query) {
    return request({
        url: '/discover/answer/answerList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}

// 查询回答详情
export function answerDetails(id) {
  return request({
      url: '/discover/answer/' + id,
      method: 'get',
      headers: {
        isToken: false
      },
  })
}

// 查询问题列表
export function questionList(query) {
  return request({
      url: '/discover/question/questionList',
      method: 'get',
      headers: {
        isToken: false
      },
      params: query
  })
}

// 查询问题详情
export function question(id) {
  return request({
      url: '/discover/question/' + id,
      method: 'get',
      headers: {
        isToken: true
      },
  })
}

// 添加回答
export function answer(data) {
  return request({
    url: '/discover/answer',
    method: 'post',
    headers: {
      isToken: true
    },
    data: data
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
