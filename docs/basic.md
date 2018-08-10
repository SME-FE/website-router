# Basic

[#live demo](https://sme-fe.github.io/sme-router/) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/pages/spring/index.js)

SME Router is written with express style, api look like express.

The same as express the order of registering route and middlewares is important.The order in which you define route or middleware with `router.route()` or `router.use()` is very important. They are invoked sequentially, thus the order defines route and middleware precedence

By the way, the following code is written in hash mode, you can change it to html5 history mode by `new SMERouter('router-view', 'html5')`. When using html5 mode, remember to configure your server setting. see [vue-router Example Server Configurations](https://router.vuejs.org/en/essentials/history-mode.html) for more details.

```js
import SMERouter from 'sme-router'

const router = new SMERouter('router-view')

router.route('/user/:id', (req, res, next) => {
  const { params, query, body , url, route } = req

  console.log(params.id) // output => 123
  console.log(query.name) // output => hwen
  console.log(body.mes) // output => hallo world
  console.log(url) // output => /user/123?name=hwen
  console.log(route) // output => /user/:id
})

router.go('/user/123?name=hwen', { mes: 'hallo world'})

```