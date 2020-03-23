const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule("html-loader")
      .test(/\.html$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
  },
  transpileDependencies: ["vue-echarts", "resize-detector"],
  css: {
    loaderOptions: {
      less: {
        modifyVars: require(resolve("src/themes/themeLoader")),
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 7000
  }
};
