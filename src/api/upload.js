import request from '@/api/request'

// 上传图片

export function uploadImg(img) {
  const formData = new FormData()
  formData.append('img', img)
  return request({
    url: '/upload',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: formData
  })
}
