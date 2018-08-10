# 中间件

[#live demo](https://sme-fe.github.io/sme-router/#/spring/1945?month=10&day=24) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/index.js#L24)

中间件添加使用 `router.use`，跟路由一样，注册的顺序也是很重要的。中间件会在每个匹配路由的 `handler` 执行前，先执行一遍

```js
import SMERouter from 'sme-router'

const router = new SMERouter('router-view')

router.use((req) => {
  req.body.count += 3
})

router.use((req) => {
  req.body.count *= 2
})

router.use((req) => {
  req.body.order = `NO.${req.body.count}`
})

router.route('/user/:name', (req, res, next) => {
  console.log(req.body.count) // output => 8
  console.log(req.body.order) // output => NO.8
})

router.go('/user/Leo', { count: 1 })
```