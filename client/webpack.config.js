const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseConfig = {
    entry: path.resolve(__dirname, './index.tsx'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CopyPlugin({ patterns: [{ from: path.resolve(__dirname, './assets'), to: 'assets' }] }),
        new CleanWebpackPlugin(),
    ],
}


module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod'

    const envConfig = isProductionMode
        ? require('./webpack.prod.config')
        : require('./webpack.dev.config')

    return merge(baseConfig, envConfig);
}
