const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 代理跨域
  devServer: {
    // host:"localhost",
    host: '0.0.0.0',
    proxy: {
      // 如果请求前缀是 /api 就触发代理进行工作
      '/api': {
        target: 'http://192.168.8.192',
        // pathRewrite: { '^/api': '' },
      },
    },
  },


  chainWebpack: config => {
    config.module.rule("svg").exclude.add(resolve("src/icons/svg")).end();
    config.module.rule("icons").test(/\.svg$/).include.add(resolve("src/icons/svg")).end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  }


}