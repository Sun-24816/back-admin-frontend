const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack"); // 引入 Webpack
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 添加 Vue 的功能标志
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true, // 或者根据需求设置为 false
      }),
    ],
  },
});
