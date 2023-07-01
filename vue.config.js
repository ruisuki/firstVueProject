const { defineConfig } = require('@vue/cli-service')

// 导入处理路径的模块
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  // 开启devServer服务
  devServer: {
    // 设置开启http服务的目录
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    // 是否自动打开页面
    open: true,
    // 主机地址
    // host: '192.168.27.1',
    // host: process.env.HOST || '127.0.0.1',
    // 设置端口
    port: 8080,
    // 是否设置保存代码自动刷新（热更新）
    hot: true,
    // 网络代理(这是辅助开发的服务/生产环境下这个数据就用不了)
    proxy: {
      '/api': {
        // 目标代理地址
        // target: 'http://v.juhe.cn/xhzd/query',
        // target: 'localhost:4000',
        target:'http://dict.youdao.com/suggest',
        // 设置跨域
        changeOrigin: true,
        // 重载
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
})
  // module.exports = defineConfig({
  //   transpileDependencies: true,
  //   devServer: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://v.juhe.cn',
  //         changeOrigin: true,
  //         pathRewrite: {
  //           '^/api': '/xhzd/query'
  //         }
  //       }
  //     }
  //   }
  // })