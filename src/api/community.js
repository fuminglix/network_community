import request from '@/api/request'

// 查询热门社区列表
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

//查询首页推荐社区列表信息
export function recommendCommunity(query) {
  return request({
      url: '/community/recommendCommunity',
      method: 'get',
      headers: {
        isToken: false
      },
      params: query
  })
}

//发布时获取我加入的社区列表详情
export function myCommunityList(query) {
    return request({
        url: '/community/myCommunityList',
        headers: {
          isToken: true
        },
        method: 'get',
        params:query
    })
}

//查询当前社区信息
export function CommunityInfo(query) {
  return request({
      url: '/community/CommunityInfo',
      method: 'get',
      headers: {
        isToken: false
      },
      params: query
  })
}
// export function updateViewCount(articleId) {
//     return request({
//         url: '/article/updateViewCount/' + articleId,
//         headers: {
//           isToken: false
//         },
//         method: 'put'
//     })
    
// }
