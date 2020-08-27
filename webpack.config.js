// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    //模式的区别
    mode: 'development',
    //如果是多个js可以命名 并在后面指定加入哪个js
    entry: {
        station: path.resolve(__dirname, 'src/business/station.ts'),
        index: path.resolve(__dirname, 'src/business/index.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".js", '.json'],
        alias: {
            vue$: "vue/dist/vue.esm.js", //加上这一句 fix where the template compiler is not available.
            "@": path.resolve(__dirname, "src"),
        },
    },
    module: {
        //webpack使用loader的方式处理各种各样的资源
        rules: [
            {test: /\.ts?$/, use: {loader: 'ts-loader'}},
            {test: /\.less$/, loader: 'style-loader!postcss-loader!less-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    // sourcemap配置
    optimization: {    // 1. 这个配置必须
        minimize: false
    },
    devtool: "source-map", // 2. 这个配置必须


    plugins: [
        //新的用法
        // All files inside webpack's output.path directory will be removed once
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/data', to: 'data'}
            ]
        }),
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: '政企信息化 ',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            filename: 'index.html', //生成的html文件名
            template: 'src/index.html', //作为模板的html文件名 支持html、jade、ejs
            hash: true,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: '政企信息化2 ',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            filename: 'station.html', //生成的html文件名
            template: 'src/station.html', //作为模板的html文件名 支持html、jade、ejs
            hash: true,
            chunks: ['station']
        })
    ]
};
