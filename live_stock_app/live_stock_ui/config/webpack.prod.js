const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const rootDir = path.resolve(__dirname, "..");

module.exports = webpackMerge(commonConfig, {
    mode: 'production',

    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    performance: {
        hints: false
    }
});    