/*
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
*/

module.exports = {
    "pluginOptions": {
        "autoRouting": {
            "chunkNamePrefix": "page-"
        }
    },
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        /*devtool: 'source-map',*/
        /*plugins: [new BundleAnalyzerPlugin()],*/
        externals: {
            'katex': 'katex'
        },
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        },
    },
    lintOnSave: false,
    publicPath: '/',
    productionSourceMap: false,
};