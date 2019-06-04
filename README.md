*  该模板适合ie9以上的浏览器
*  整体分为本地开发环境，预上线环境（192.168.150.116）以及正式环境，预上线环境与正式环境配置基本一致，只是api的地址不同
*  命令解释：

```javascript
yarn start         // 本地开发
yarn pre       // 生成预上线环境代码到pre目录
yarn build	  // 生成正式代码到dist目录
```
*  入口文件放在src/main.js, 配置在vue.config.js
*  接口代理，开发环境方便调试(config/index.js), 修改proxyTable配置

```javascript
proxyTable: {
    '/surveyapi/**': {
        target: 'http://gapi.dev.ztgame.com/',
            changeOrigin: 'true'
    }
},
```

*  静态资源路径，修改config/index.js里各环境的assetsPublicPath

```javascript
// 示例：在域名根目录的配置为'/',否则配置为代码放置的目录路径
pre: {
    assetsPublicPath: '/adminTest/',
}
```

*  分环境的接口域名配置

使用NODE_ENV变量来判断

```javascript
url = process.env.NODE_ENV !== 'production' ? 'http://y.web.ztgame.com/act' : 'http://y.ztgame.com/act'
```

* 不需要打包的静态资源放在static目录