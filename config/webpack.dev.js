/*
 * @Description: 
 */
const {merge} = require("webpack-merge");
const base = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(base, {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}) 