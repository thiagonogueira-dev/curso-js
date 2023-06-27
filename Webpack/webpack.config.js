const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugins = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugins({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{
        rules: [{
            test: /\.(s[ac]|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona a DOM injetando a tag
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }]
    }
}