// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    //如果是多个js可以命名 并在后面指定加入哪个js
    entry: {
        main: './main.js',
        hello: './hello.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        //webpack使用loader的方式处理各种各样的资源
        rules: [
            {
                test: /\.js$/, //处理以.js结尾的文件
                exclude: /node_modules/, //处理除了nodde_modules里的js文件
                loader: 'babel-loader' //用babel-loader处理
            }
        ]
    },
    //sourcemap配置
    optimization: {    // 1. 这个配置必须
        minimize: false
    },
    devtool: "source-map", // 2. 这个配置必须


    plugins: [
        //新的用法
        // All files inside webpack's output.path directory will be removed once
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: '政企信息化 ',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            filename: 'index.html', //生成的html文件名
            template: 'index.html', //作为模板的html文件名 支持html、jade、ejs
            hash: true,
            chunks: ['main', 'hello']
        }),
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: '政企信息化2 ',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            filename: 'index2.html', //生成的html文件名
            template: 'index.html', //作为模板的html文件名 支持html、jade、ejs
            hash: true,
            chunks: ['hello']
        })
    ]
};
