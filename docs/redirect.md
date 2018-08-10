# Redirect

[#live demo](https://sme-fe.github.io/sme-router) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/index.js#L19)

You should use `router.route('*')` to redirect unmatch url

```js
import SMERouter from 'sme-router'

const router = new SMERouter('router-view')

router.route('/index', (req, res, next) => {
  res.render('hallo world')
})

router.route('*', (req, res, next) => {
  res.redirect('/index')
})

router.go('/other') // will be redirected to /index
```