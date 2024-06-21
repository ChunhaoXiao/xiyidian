const {request}  = require("./requests")
module.exports = {
  get_cate: () => {
    return request("/cate", 'get')
  },
  login:(code) => {
    return request(`/login?code=${code}`,'get')
  },
  clothSave:(data,openid) => {
    return request(`/cloth/save?openId=${openid}`,'post', data)
  },

  getQrcode:() => {
    return request(`/wechat/qrcode`,'get',{},'arraybuffer')
  }
}