module.exports = {
  base: '/website-router/',
  title: 'sme-router',
  theme: 'one',
  description: 'A lightweight router lib that implement with express route style.',
  // TODO: add google ana
  // ga: '',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'sme-router',
      description: 'A lightweight router lib that implement with express route style.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'sme-router',
      description: 'A lightweight router lib that implement with express route style.'
    }
  },
  themeConfig: {
    repo: 'SME-FE/sme-router',
    docsRepo: 'SME-FE/website-router',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Guide',
            link: '/basic'
          }
        ],
        sidebar: [
          {
            title: 'Guide',
            children: [
              '/basic',
              '/template',
              '/redirect',
              '/middleware',
              '/nested-routes'
            ]
          },
          '/api'
        ]
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: 'Home',
            link: '/zh/',
          },
          {
            text: 'Guide',
            link: '/zh/basic'
          }
        ],
        sidebar: [
          {
            title: 'Guide',
            children: [
              '/zh/basic',
              '/zh/template',
              '/zh/redirect',
              '/zh/middleware',
              '/zh/nested-routes'
            ]
          },
          '/zh/api'
        ]
      }
    }  
  }
}