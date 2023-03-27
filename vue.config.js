const { defineConfig } = require('@vue/cli-service')
const port = process.env.port || process.env.npm_config_port || 86 // 端口
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    proxy: {
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        // [process.env.VUE_APP_BASE_API]: {
        '/api': {
            // target: 'http://www.baidu.com',
            target: 'http://localhost:8917',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
  }
})
