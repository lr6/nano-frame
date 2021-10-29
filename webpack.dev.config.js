const path = require('path')

module.exports = {
    /* 入口 */
    entry: [
        "react-hot-loader/patch",
        path.join(__dirname, 'src/index.js')
    ],

    /* 输出到 dist 文件夹，输出名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    /* src 目录下以 .js 结尾的文件，要使用 babel 解析 */
    /* cacheDirectory 使用来缓存编译结果，下次编译加速 */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
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
    }
}
