const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const path = require('path');
const rootDir = path.resolve(__dirname, "..");

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
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

    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        stats: 'minimal',
        open: 'Chrome'
    }
});