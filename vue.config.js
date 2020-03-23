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
    devtool: 'source-map'
  },
  lintOnSave: false,
  publicPath: '/'
};