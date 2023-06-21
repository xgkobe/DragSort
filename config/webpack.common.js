/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-03-31 19:05:56
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const path = require('path');
const fs = require("fs");

const absolutePath = process.cwd(); // 获取文件根目录
module.exports = {
    entry: path.join(absolutePath, 'src/index'),
    output: {
        path: path.join(absolutePath, 'dist'),
        // publicPath: 'http://localhost:8087/',
        filename: 'script/[name].[contenthash:6].js',
        clean: true,
    },
    resolve: {
        alias: {
            '@': path.join(absolutePath, 'src'),
        },
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            // }
            {
                test: /\.(js|jsx)$/,
                use: [
                    'thread-loader',
                    {
                        loader: 'babel-loader',
                        // loader: 'esbuild-loader',
                        // options: {
                        //     loader: 'jsx',
                        //     target: 'es2015',
                        // }
                    }
                ],
                // exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                exclude: /\.m.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.less$/,
                include: /\.m.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.join(absolutePath, 'index.html'),
            minify: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        // new ModuleFederationPlugin({
        //     name: 'app01',
        //     filename: 'remoteEntry.js',
        //     library: { type: "var", name: "app01" }, // 
        //     exposes: {
        //         './tools': path.join(absolutePath, 'src/tools.js'),
        //     },
        // })
    ],
    optimization: {
        // usedExports: false,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                'antd': {
                    name: 'antd',
                    test: /[\\/]node_modules[\\/]antd[\\/]/,
                    priority: 30,
                    chunks: 'initial'
                },
            }
        }
    }
}