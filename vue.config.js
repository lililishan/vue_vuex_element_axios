module.exports = {
    //axios域代理，解决axios跨域问题
    baseUrl: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://10.0.10.208',    //axios域代理，解决axios跨域问题
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/oaWeb': ''   //需要rewrite的,
                }
            }
        }
    }
}