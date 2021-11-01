const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

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
        filename: '[name].[hash].js',
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

    /* webpack-dev-server 配置 */
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        /*
        * historyApiFallback，让所有的404定位到index.html。
        * */
        historyApiFallback: true,
        /*
        * host 指定一个host,默认是localhost。
        * 如果你希望服务器外部可以访问，指定如下：host: "0.0.0.0"。比如你用手机通过IP访问。
        * */
        host: '0.0.0.0'
    },

    resolve: {
        alias: {
            "@": path.join(__dirname, 'src')
        }
    },

    devtool: 'inline-source-map',

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}
