

/*
 * @Description: 
 */
const {merge} = require("webpack-merge");
const base = require("./webpack.common.js");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path')


module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({
                cleanStaleWebpackAssets: true,
                cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../dist")],
        }),
    ]
}) 