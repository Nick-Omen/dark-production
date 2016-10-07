const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __DEV__ = true
const __PROD__ = false

const appDir = path.resolve(__dirname, 'app')
const distDir = path.resolve(__dirname, 'dist')

const webpackConfig = {
    name: 'client',
    target: 'web',
    devtool: 'source-map',
    module: {}
}

webpackConfig.entry = path.resolve(appDir, 'main.js')

webpackConfig.output = {
    filename: "app.js",
    path: distDir,
    publicPath: '/'
}

webpackConfig.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(appDir, 'index.tmp.html'),
        hash: false,
        favicon: path.resolve(__dirname, 'static', 'favicon.png'),
        filename: 'index.html',
        inject: 'body',
        minify: {
            collapseWhitespace: true
        }
    })
]

if (__DEV__) {
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    )
    webpackConfig.devServer = {
        inline: true

    }
} else if (__PROD__) {
    webpackConfig.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        })
    )
}

webpackConfig.module.loaders = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            cacheDirectory: true,
            presets: ['es2015', 'react', 'stage-0']
        }
    },
    {
        test: /\.json$/,
        loader: 'json'
    }
]

const BASE_CSS_LOADER = 'css?sourceMap&-minimize'
webpackConfig.module.loaders.push({
    test: /\.scss$/,
    exclude: null,
    loaders: [
        'style',
        BASE_CSS_LOADER,
        'sass?sourceMap'
    ]
})

webpackConfig.sassLoader = {
    includePaths: path.resolve(__dirname, 'app', 'styles')
}

webpackConfig.module.loaders.push(
    {test: /\.woff(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'},
    {test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'},
    {test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'},
    {test: /\.ttf(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'},
    {test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]'},
    {test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'},
    {test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
)

module.exports = webpackConfig
