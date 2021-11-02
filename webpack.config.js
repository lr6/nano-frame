const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    /* 入口 */
    entry: {
        app: [
            "react-hot-loader/patch",
            path.join(__dirname, 'src/index.js')
        ],
        vendor: [
            'react',
            'react-router-dom',
            'react-dom',
            'redux',
            'react-redux'
        ]
    },

    /* 输出到 dist 文件夹，输出名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    /* src 目录下以 .js 结尾的文件，要使用 babel 解析 */
    /* cacheDirectory 使用来缓存编译结果，下次编译加速 */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },

    resolve: {
        alias: {
            "@": path.join(__dirname, 'src')
        }
    },

    devtool: 'cheap-module-source-map',

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        // 添加压缩后，dist文件夹 从 3m 到 340k
        new UglifyJSPlugin(),
        // 添加环境变量为生产环境后，dist文件夹 从 340k 到 260k
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
}
