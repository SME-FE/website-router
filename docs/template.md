# Template

[#live demo](https://sme-fe.github.io/sme-router/#/autumn/1918?month=11&day=12) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/pages/autumn/index.js)

In fact you can use any [template-loader](https://webpack.js.org/loaders/#templating) that webpack support, cause `res.render` just simply insert the string

You can get the complete webpack config of the example blow from [here](https://github.com/SME-FE/sme-router/blob/master/build/webpack.example.config.js)

may be you should install `pug-loader` or `handlebars-loader` first

1.using pug [#demo](https://sme-fe.github.io/sme-router/#/autumn/1918?month=11&day=12&type=pug)

I think there is a bug with pug-loader in webpack3(2017-10-22), so you may better to install `"pug-loader": "~2.2.1"`， and config the loader with `?` before `pug-loader` fix this bug

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

  // Of course, you can use handlebars json helpers instead of using JSON.stringify
  res.render(hbsTemplate({
    paramsStr: JSON.stringify(params),
    queryStr: JSON.stringify(query),
    bodyStr: JSON.stringify(body),
    body: body
  }))
}
```
