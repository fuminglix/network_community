import request from '@/api/request'
//查询请求

// 查询文章列表
export function articleList(query) {
    return request({
        url: '/article/search',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}

// 查询用户
export function userList(query) {
    return request({
        url: '/user/search',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}