const { createProxyMiddleware } = require('http-proxy-middleware'); 
module.exports = function(app) { 
    app.use( 
        '/api', 
        createProxyMiddleware({ 
            target: 'https://bstbgsgy2g7o5x7q6ejgjr7u6q0dhhgj.lambda-url.ap-northeast-1.on.aws/', 
            changeOrigin: true,
            pathRewrite: { 
                '^/api': '/' 
            }       
        })     
    ); 
};