const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config()

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] 
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({title: process.env.SITE_TITLE, template: 'public/index.html', inject: 'body'})],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './public'),
        port: 3001
    },
};