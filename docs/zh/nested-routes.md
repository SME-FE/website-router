# 二级路由

[#live demo](https://sme-fe.github.io/sme-router/#/summer/1914?month=07&day=30) [#source code](https://github.com/SME-FE/sme-router/blob/master/example/pages/summer/index.js#L5)

二级路由需要用到 `next()` 方法传递下去，以及 `res.subRoute()` 生成二级页面渲染的节点

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