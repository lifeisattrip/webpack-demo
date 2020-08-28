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
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                //保持原有的文件命名，注释掉的话就是md5的文件名方式
                // options: {
                //     name: 'images/[name].[ext]'
                // }
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },
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
    ],
    devServer: {
        open: true
    }
};
