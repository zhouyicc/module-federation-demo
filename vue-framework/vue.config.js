const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
module.exports = {
  devServer: {
    headers: {
      // 'Access-Control-Allow-Origin': 'localhost:8080'
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'hello-world.js',
        remotes: {
          'vue2Project': 'vue2Project@http://localhost:10000/remoteProvide.js',
          'react2Project': 'react2Project@http://localhost:3000/remoteProvide.js',
        },
        shared: {
          vue: {
            eager: true,
            import: "vue",
            shareKey: "vue",
            shareScope: "default",
            singleton: true
          }
        }
      }),
      new ExternalTemplateRemotesPlugin()
    ]
  }
}