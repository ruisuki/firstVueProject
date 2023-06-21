const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/xhzd/query'
        }
      }
    }
  }
})
