// pages/add/add.js
const API = require('../../utils/api')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type:"",
    cate:[],
    formData:null,
    quantity:1,
    forms:[1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    API.get_cate().then(data => {
      console.log('data',data)
      this.setData({
        cate:data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onChange(e) {
    let order = e.target.dataset.order
    console.log("order:", order)
    let key = `formData[${order}].type`
    let key2 = `formData[${order}].quantity`
    this.setData({
      [key]:e.detail
    })
    if(!this.data.formData[order].quantity) {
      this.setData({
        [key2]:1
      })
    }
    //console.log(this.data.formData)
  },

  updateQuantity(e) {
    const order = e.target.dataset.order
    console.log("order--->", order)
    let key = `formData[${order}].quantity`
    this.setData({
      [key]:e.detail
    })
  },

  addForm() {
    const forms = this.data.forms
    forms.push(forms.length+1)
    this.setData({
      forms:forms
    })
  },
  removeForm(e) {
    const order = e.target.dataset.order
    const forms = this.data.forms.filter(item => item != order)
    console.log("forms", forms)
    const formData = this.data.formData
    delete(formData[order])
    this.setData({
      forms:forms,
      formData:formData
    })
    
  },
  submitForm() {
    console.log(this.data.formData)
    console.log(Object.values(this.data.formData))
    const postData = {openid:"xxx", cloth:Object.values(this.data.formData)}
    API.clothSave(postData).then(data => {
      console.log(data)
    })
  }
})