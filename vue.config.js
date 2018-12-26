const path = require('path')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // build docs
const IS_COMPONENT = ['lib'].includes(process.env.BUILD_LIB) // build vui
const IS_TEST = ['test'].includes(process.env.NODE_ENV)
/* prod */
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
/* test */
const nodeExternals = require('webpack-node-externals')

function resolve (dir) {
  return path.join(__dirname, dir)
}
function wrap (render) { // 用于markdown的loader设置
  return function () {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}
module.exports = {
  lintOnSave: false,
  baseUrl: '/',
  runtimeCompiler: false,
  outputDir: IS_COMPONENT ? resolve('./lib') : resolve('./examples/dist'),
  assetsDir: '',
  pages: IS_COMPONENT ? {} : {
    index: {
      entry: 'examples/src/index.js',
      template: 'examples/src/index.tpl',
      filename: 'index.html',
      title: 'vui',
      chunks: ['chunk-vendors', 'chunk-common', 'vui']
    },
    mobile: {
      entry: 'examples/src/mobile.js',
      template: 'examples/src/index.tpl',
      filename: 'mobile.html',
      title: 'mobile',
      chunks: ['chunk-vendors', 'chunk-common', 'vui-mobile']
    }
  },
  chainWebpack: (config) => {
    if (IS_COMPONENT) {
      config
        .entry('app').clear().end()
        .entry('vui').add('./src/index.js').end()
        .output.filename('[name].js').library('vui').libraryTarget('umd')
      config.devtool(false)
    } else {
      config
        .entry('app').clear().end()
        .entry('vendor').add('vue').add('vue-router').end()
        .entry('vui').add('./examples/src/index.js').end()
        .entry('vui-mobile').add('./examples/src/mobile.js').end()
        .output.filename('[name].js')
    }
    config.resolve.extensions.add('.js').add('.vue').add('.json')

    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('packages', resolve('packages'))
      .set('lib', resolve('lib'))
      .set('components', resolve('example/src/components'))

    config.module
      .rule('compile').test(/\.js$/)
      .include.add(resolve('src')).add(resolve('test')).add(resolve('node_modules/webpack-dev-server/client')).end()
      .use('babel').loader('babel-loader')

    config.module
      .rule('markdown').test(/\.md$/)
      .use('vue-loader').loader('vue-loader').end()
      .use('vue-markdown-loader').loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        preventExtract: true,
        raw: true,
        preprocess: function (MarkdownIt, source) {
          MarkdownIt.renderer.rules.table_open = function () {
            return '<table class="table">'
          }
          MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
          return source
        }
      })

    config.optimization.namedModules(true)
    config.optimization.noEmitOnErrors(true)
  },
  css: {
    modules: false,
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {

    }
  },
  parallel: require('os').cpus().length > 1,

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') }
      ]
    },
    overlay: {
      warnings: false,
      errors: true
    },
    hot: true,
    compress: true,
    disableHostCheck: true,
    host: process.env.HOST || '0.0.0.0',
    https: false,
    hotOnly: false,
    open: IS_PROD,
    port: process.env.PORT || 8085,
    publicPath: '/',
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    }
  },

  configureWebpack: config => {
    delete (config.entry.app)
    if (IS_PROD && !IS_COMPONENT) {
      config.output.chunkFilename = '[id].[hash].js'
      config.output.filename = '[name].min.[hash].js'
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    } else if (IS_COMPONENT) {
      delete (config.optimization.splitChunks)
      config.externals = {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    } else if (IS_TEST) {
      delete (config.entry)
      config.devtool = '#cheap-module-source-map'
      config.target = 'node'
      config.externals = [nodeExternals()]
    }
  }
}
