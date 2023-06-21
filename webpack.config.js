/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-03-31 18:57:23
 */
const {merge} = require('webpack-merge');
const commonConfig = require('./config/webpack.common');
const prodConfig = require('./config/webpack.prod');
const devConfig = require('./config/webpack.dev');

module.exports = () => {
    switch(process.env.NODE_ENV) {
        case 'development':
            return merge(commonConfig, devConfig);
        default:
            return merge(commonConfig, prodConfig);
    }
}


