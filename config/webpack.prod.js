/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-03-31 19:05:560
 */
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'production',
    optimization: {
        usedExports: false,
        minimize: true,
        // minimizer: [
        //     new TerserWebpackPlugin()
        // ],
        // splitChunks: {
        //     cacheGroups: {
        //         lodash: {
        //             name: 'chunk-lodash',
        //             priority: 20,
        //             test: /[\\/]node_modules[\\/]lodash[\\/]/,
        //             chunks: 'all',
        //         },
        //     },
        // },
    }
}