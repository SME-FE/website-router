# Middleware

[#live demo](https://sme-fe.github.io/sme-router/#/spring/1945?month=10&day=24) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/index.js#L24)

You can add middleware to the router. Middlwares will be called in order before executing each route handler. It's useful to parse request object.

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