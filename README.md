*  该模板适合ie9以上的浏览器
*  整体分为本地开发环境，预上线环境（192.168.150.116）以及正式环境，预上线环境与正式环境配置基本一致，只是api的地址不同
*  命令解释：

```javascript
npm start         // 本地开发
npm run pre       // 生成预上线环境代码到pre目录
npm run build	  // 生成正式代码到dist目录
```
*  入口文件放在src/app.js, 配置在build/webpack.base.config.js
*  接口代理，开发环境方便调试('config/index.js'), 修改dev的proxyTable配置

```javascript
'/api': {
    target: 'http://192.168.39.12:3000',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
        '^/api': '/api'
    }
}
```

*  模拟接口返回，修改build/dev-server.js的apiRoutes，示例如下

```javascript
apiRoutes.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})
app.use('/api', apiRoutes)
```

* 静态资源路径，修改config/index.js

```javascript
// 示例：这是活动目录名为question的配置
build: {
  assetsPublicPath: '/act/question/dist/',
},
pre: {
  assetsPublicPath: '/act/question/',
}
```

*  分环境的接口域名配置

使用ENV变量来判断

```javascript
url = ENV !== 'production' ? 'http://y.web.ztgame.com/act' : 'http://y.ztgame.com/act'
```

