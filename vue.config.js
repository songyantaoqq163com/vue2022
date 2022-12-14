module.exports = {
    // 关闭eslint
    lintOnSave:false,
    // 代理跨域
    devServer: {
        host:"localhost",
        proxy: {
            // 如果请求前缀是 /api 就触发代理进行工作
          '/api': {
            target: 'http://192.168.8.192',
            // pathRewrite: { '^/api': '' },
          },
        },
      },
    }