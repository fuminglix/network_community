import request from '@/api/request'

// 发送文章评论
export function sendComment(type,articleId,rootId,toCommentId,toCommentUserId,content) {
    return request({
        url: '/article/comment',
        method: 'post',
        headers: {
            isToken: true
          },
        data: {"articleId":articleId,"type":type,"rootId":rootId,"toCommentId":toCommentId,"toCommentUserId":toCommentUserId,"content":content}
    })
}


export function getArticleComment(query) {
    return request({
        url: '/article/comment/commentList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}


export function getActivityComment(query) {
    return request({
        url: '/article/comment/activityComment',
        method: 'get',
        params: query
    })
}