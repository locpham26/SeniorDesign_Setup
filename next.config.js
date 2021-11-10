const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssNano = require("cssnano");
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: "./styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
  webpack: (config) => {
    config.optimization.minimizer.push(
      new OptimizeCssAssetsPlugin({
        cssProcessor: cssNano,
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      })
    );
    return config;
  },
});
