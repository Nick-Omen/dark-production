const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')

const app = express()

app.use(require('connect-history-api-fallback')())

const compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: webpackConfig.output.path,
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
        chunks: false,
        chunkModules: false,
        colors: true
    }
}))
app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(3000)
