# 模板

[#live demo](https://sme-fe.github.io/sme-router/#/autumn/1918?month=11&day=12) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/pages/autumn/index.js)

你可以使用任何 webpack 支持的 [template-loader](https://doc.webpack-china.org/loaders/#-templating-),因为 `res.render` 只是简单地插入字符串

下面例子的 webpack 完整配置，可以在 [这里](https://github.com/SME-FE/sme-router/blob/master/build/webpack.example.config.js) 查看

使用前，你应该安装 `pug-loader` 或 `handlebars-loader`

1.using pug [#demo](https://sme-fe.github.io/sme-router/#/autumn/1918?month=11&day=12&type=pug)

因为 pug-loader 在 webpack3 使用有 bug（2017-10-22），所以你应该安装`"pug-loader": "~2.2.1"`.
并在 loader 的配置后面加上 `?`，不然还是会报错

webpack config

```js
 module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader?'
      }
  }
```

```js
import pugTemplate from './autumn.pug'

export default function autumn (req, res, next) {
  var { params, query, body } = req
  res.render(pugTemplate(req))
}
```

2.using handlebars [#demo](https://sme-fe.github.io/sme-router/#/autumn/1918?month=11&day=12&type=hbs)

webpack config

```js
 module: {
    rules: [
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader'
        }
      }
  }
```

```js
import hbsTemplate from './autumn.hbs'

export default function autumn (req, res, next) {
  var { params, query, body } = req

  // 你可以使用 handlebars 自定义 json helpers 来处理 json
  res.render(hbsTemplate({
    paramsStr: JSON.stringify(params),
    queryStr: JSON.stringify(query),
    bodyStr: JSON.stringify(body),
    body: body
  }))
}
```