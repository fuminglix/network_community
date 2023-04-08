import request from '@/api/request'

// 查询文章列表
export function hotCommunityList(query) {
    return request({
        url: '/community/hotCommunityList',
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
export function myCommunityList(userId) {
    return request({
        url: '/community/myCommunityList/' + userId,
        headers: {
          isToken: true
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
