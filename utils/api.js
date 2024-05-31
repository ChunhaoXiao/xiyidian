const {request}  = require("./requests")
module.exports = {
  get_cate: () => {
    return request("/cate", 'get')
  },
  login:(code) => {
    return request(`/login?code=${code}`,'get')
  },
  clothSave:(data) => {
    return request(`/cloth/save`,'post', data)
  }
}