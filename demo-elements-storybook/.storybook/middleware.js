const proxy = require('http-proxy-middleware')
module.exports = function expressMiddleware (router) {
  router.use(
    '/api',
    proxy({
      target: `http://locahost:5000`, // 服务器 api地址
      changeOrigin: true
    })
  )
}








