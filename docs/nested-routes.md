# Nested-routes

[#live demo](https://sme-fe.github.io/sme-router/#/summer/1914?month=07&day=30) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/pages/summer/index.js)

Nested Route by calling `next()` and `res.subRoute()`

```js
import SMERouter from 'sme-router'

const router = new SMERouter('router-view')

router.route('/main', (req, res, next) => {
  next(`
    <h2>Main title</h2>
    ${res.subRoute()}
  `)
})

router.route('/main/:content', (req, res, next) => {
  res.render(
    `Iam nested content`
  )
})

router.go('/main/sample')
```
