module.exports = {
  //axios域代理，解决axios跨域问题
  // baseUrl: '/',
  proxy: {
      '/oaWeb': {
          target: 'http://10.0.10.208',    //axios域代理，解决axios跨域问题
          changeOrigin: true,
          ws: true,
          pathRewrite: {
              '^/oaWeb': ''   //
          }
      }
  }
}