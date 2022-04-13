// const path = require("path");
const {ModuleFederationPlugin} = require('webpack').container;
const pkg = require('./package.json')
// const ModuleFedSingleRuntimePlugin = require('./plugin/index')
let publicPath = 'auto'
if (process.env.NODE_ENV === 'production') {
  publicPath = 'http://localhost:10000'
}
const config = {
  publicPath,
  devServer: {
    port: '10000',
    headers: {
      // 'Access-Control-Allow-Origin': 'http://localhost:8080'
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'vue2Project',
        // library: { type: 'var', name: 'vue2Project' },
        filename: 'remoteProvide.js',
        exposes: {
          './HelloWorld': './src/components/HelloWorld',
          './ElementUI': './src/element.js'
        },
        shared: {
          ...pkg.dependencies,
          vue: {
            singleton: true,
            requiredVersion: pkg.dependencies.vue,
            eager: true
          }
        }
      })
    ]
  }
}

module.exports = config