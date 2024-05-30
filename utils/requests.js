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
            } else { /*
              if (message === '验证结果不一致') {
                message = '请使用您本人姓名申请的手机号进行注册。感谢理解和支持！'
              }
              if (message === '手机与验证码不匹配') {
                message = '您输入的短信验证码不正确'
              }
              !hiddenTip && $error(message, 'none')*/
            }
          } else {
            /*
            if (message === '验证结果不一致') {
              message = '请使用您本人姓名申请的手机号进行注册。感谢理解和支持！'
            }
            if (message === '手机与验证码不匹配') {
              message = '您输入的短信验证码不正确'
            }
            !hiddenTip && $error(message, 'none')*/
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