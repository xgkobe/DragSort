/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-03-31 19:06:19
 */


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8087,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        client: {
            overlay: {
                errors: false,
                warnings: false,
            }
        }
    }
}