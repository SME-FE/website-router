# 基本

[#live demo](https://sme-fe.github.io/sme-router/#/spring/1945?month=10&day=24) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/pages/spring/index.js)

SME Router 是仿照 express 的风格编写的，前端路由库。所以 api 跟 express 有点类似。

跟 express 一样，在 SME Router 中，路由和中间件注册的顺序也是非常重要的。先注册的路由会先匹配，先注册的中间件也会先执行。

PS.下面的例子都是用 hash mode 写的。想改成 html5 history 模式，需要 `new SMERouter('router-view', 'html5')`。改成 html5 模式后，需要服务器支持。具体配置见 [vue-router 后端配置例子](https://router.vuejs.org/zh-cn/essentials/history-mode.html)

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