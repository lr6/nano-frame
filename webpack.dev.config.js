const merge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common.config')

const devConfig = {
    devtool: 'inline-source-map',
    // entry: {
    //     app: [
    //         'babel-polyfill',
    //         'react-hot-loader/patch',
    //         path.join(__dirname, 'src/index.js')
    //     ]
    // },
    output: {
        // 这里本来应该是[chunkhash]的，
        // 但是由于[chunkhash]和react-hot-loader不兼容。只能妥协
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'postcss-loader']
        }]
    },

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

    // resolve: {
    //     alias: {
    //         "@": path.join(__dirname, 'src')
    //     }
    // },
}

module.exports = merge({
    customizeArray(a, b, key) {
        if(key === 'enter.app') {
            return b
        }
        return undefined
    }
})(commonConfig, devConfig)
