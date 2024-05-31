const config = require('./config')
const { BASE_URL, header, timeout } = config
//const utils = require('../utils/util')
// const {
//   showLoading,
//   hideLoading,
//   $error
// } = utils

const request = (_url, method, data, showLoadingIcon = true, hiddenTip,showLoadingTitle='加载中...') => {
  const url = BASE_URL + _url

  // if(!getApp().globalData.openid) {
  //   //wx.navigateTo("/")
  // }
  //showLoadingIcon && showLoading(showLoadingTitle)
    //header["Authorization"]='Bearer '+utils.getAccessToken();
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method,
        data,
        header,
        timeout,
        success(res) {
          console.log("res", res)
          //hideLoading()
          const { statusCode, data } = res
          let { code, message = 'Error' } = data
          if(statusCode == 200) {
            if (code === 1) {
              resolve(data.data)
            } else { 
            }
          } else {
            reject(data)
          }
        },
        fail(res) {
          //hideLoading()
          console.log('fail err', res)
          reject(res.data)
        },
        complete(res) {
        }
      })
    })
  }






// const request2 = (url, method, data) => {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url,
//       method,
//       data,
//       header,
//       timeout,
//       success(res) {
//         const { statusCode } = res
//         if(statusCode == 200) {
          
//         } else {

//         }
//       },
//       fail(res) {
        
//       },
//       complete(res) {
//       }
//     })
//   })
// }

// const refreshToken= () => {
//   const app = getApp()
//   const { loginData: { openId } } = app.globalData
//   return request(`/wechat/token/refreshtoken`, 'POST', { openId: openId,refreshToken:utils.getRefreshAccessToken() }, false)
// }

module.exports = {
  request,
 // request2
}