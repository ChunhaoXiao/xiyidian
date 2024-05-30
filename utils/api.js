const {request}  = require("./requests")
module.exports = {
  get_cate: () => {
    return request("/cate", 'get')
  }
}