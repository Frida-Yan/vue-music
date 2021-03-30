const path = require("path")
module.exports = {
  // 关闭eslint规范
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        ws: true,
	      changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
    },
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.module
      .rule("less")
      .test(/\.less$/)
      .oneOf("vue")
      .use("px2rem-loader")
      .loader("px2rem-loader")
      .before("postcss-loader") // this makes it work.
      .end()
    config.resolve.alias.set(
      "components",
      path.join(__dirname, "./src/components")
    )
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            // 以设计稿750为例， 750/ 10 = 75
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
}
