## 初始化及工具安装

```shell
mdkir  mydemo
npm init
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

## 最基础的支持

新建main.js

新建index.html

```javascript
// webpack.config.js
module.exports = {
    entry: './station.ts',
    output: {
      filename: 'bundle.js'
    }
    // module begin
    // plugin begin
  };
```

## JavaScript的loader使用

es6转es5配置

npm install --save-dev @babel/core babel-preset-es2015

pm install --save-dev babel-loader

```javascript
  module: {
    //webpack使用loader的方式处理各种各样的资源
    rules: [
      {
        test: /\.js$/, //处理以.js结尾的文件
        exclude: /node_modules/, //处理除了nodde_modules里的js文件
        loader: 'babel-loader' //用babel-loader处理
    }
    ]
}
```

添加新的js文件main.js依赖hello.js

### sourcemap 配置

https://www.cnblogs.com/warm-stranger/p/12015860.html

## webpack-dev-server使用

iframe

inline



```shell
webpack-dev-server --inline --config webpack.config.js
```

## Plugin使用

### 常用插件介绍 

https://segmentfault.com/a/1190000016816813



### HtmlWebpackPlugin使用

https://segmentfault.com/a/1190000013883242



https://www.cnblogs.com/wonyun/p/6030090.html

```javascript
 plugins:[
    new HtmlWebpackPlugin({ // 打包输出HTML
        title: '信息化 ',
        minify: { // 压缩HTML文件
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: true, // 删除空白符与换行符
            minifyCSS: true// 压缩内联css
        },
        filename: 'index.html', //生成的html文件名
        template: 'index.html', //作为模板的html文件名 支持html、jade、ejs
        hash: true,
        chunks: ['main','hello']
    }),
    new HtmlWebpackPlugin({ // 打包输出HTML
        title: '信息化2 ',
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
```



## TS支持

npm install -D typescript ts-loader 



tsc --init

### loader配置

```javascript
{
    test: /\.tsx?$/,
    use: {
        loader: 'ts-loader'
    }
}
```

**resolve什么意思**？？？

webpack resolve配置说明 https://www.cnblogs.com/joyco773/p/9049760.html

```javascript
resolve: {
    extensions: [".ts", ".js"],
    alias: {
        "@":  path.resolve(__dirname,"src"),
    },
},
```

typescript两种方案？

https://my.oschina.net/u/4384335/blog/4282316/print



typescript  lib配置什么意思

typescript 配置说明https://segmentfault.com/a/1190000021421461

https://www.jianshu.com/p/8e1f8ca2837b



### Vue

https://www.jianshu.com/p/8ba2cdbfabd7

You are using the runtime-only build of Vue where the template compiler is not available.

错误及解决方法

https://blog.csdn.net/wxl1555/article/details/83187647



### jquery

```
npm install jquery  @types/jquery --save-dev
```

https://blog.csdn.net/a2500397/article/details/84872678

插件

插件的用法3之后版本有变化，要参考最新的使用方法

```
webpack.ProvidePlugin
```

### 静态资源处理

```
npm i copy-webpack-plugin --save-dev
```

### echart

```
npm install echarts --save
npm install --save @types/echarts
```

echarts必须用document对象获取 element

引用document需要再tsconfig lib中添加dom



### bootstrap



https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html



Use the following command to install Bootstrap and its peer dependencies, [jQuery](https://jquery.com/) and [Popper](https://popper.js.org/):

```
$ npm install bootstrap jquery popper.js --save
```

If you choose to import Bootstrap’s JavaScript plugins individually as needed, you must also install [exports-loader](https://github.com/webpack-contrib/exports-loader).

```
$ npm install exports-loader --save-dev
```

You’ll need to install the required loaders and postcss plugins for compiling and bundling Bootstrap precompiled [Sass](http://sass-lang.com/) files.

```shell
$ npm install autoprefixer css-loader node-sass postcss-loader sass-loader style-loader --save-dev
```

```css
npm install @types/bootstrap --save-dev
```



https://yanxiaojun617.gitbook.io/webpack4-bootstrap4-demo/use_html5_form_validation



# [webpack多页应用架构系列](https://segmentfault.com/a/1190000006843916)

https://segmentfault.com/a/1190000006843916



https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html