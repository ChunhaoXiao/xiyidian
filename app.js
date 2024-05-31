// app.js
const API = require("./utils/api")
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("app lunch","code:",res.code)
        API.login(res.code).then(data => {
         console.log("login data:", data)
         this.globalData.openId = data.openid
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    openId:""
  }
})
