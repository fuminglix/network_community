import request from '@/api/request'

// 添加文章
export function addArticle(data) {
  return request({
    url: '/article',
    method: 'post',
    headers: {
      isToken: true
    },
    data: data
  })
}
// 查询文章列表
export function articleList(query) {
    return request({
        url: '/article/articleList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}

//查询最热文章
export function hotArticleList() {
    return request({
        url: '/article/hotArticleList',
        headers: {
          isToken: false
        },
        method: 'get'
    })
}

//获取文章详情
export function getArticle(articleId) {
    return request({
        url: '/article/getArticle/' + articleId,
        headers: {
          isToken: false
        },
        method: 'get'
    })
}

//查询分类
export function category() {
  return request({
      url: '/article/category',
      headers: {
        isToken: false
      },
      method: 'get'
  })
}

export function updateViewCount(articleId) {
    return request({
        url: '/article/updateViewCount/' + articleId,
        headers: {
          isToken: false
        },
        method: 'put'
    })
    
}
