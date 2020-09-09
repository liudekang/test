const { createProxyMiddleware, } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:8080',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/',
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }));
  app.use(createProxyMiddleware('/kugouApi', {
    target: 'http://mobilecdnbj.kugou.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/kugouApi': '/api',
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }));
  app.use(createProxyMiddleware('/trackercdnbjApi/', {
    target: 'http://trackercdnbj.kugou.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/trackercdnbjApi/': '/',
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }));
  app.use(createProxyMiddleware('/wyyApi', {
    target: 'https://api.uomg.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/wyyApi': '',
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }));
};
