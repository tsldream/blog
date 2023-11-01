module.exports = {
  title: 'Tian Silong',
  description: 'Everything wins the mind',
  theme: 'reco',
  // 和仓库名相同
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link', { rel: 'icon', href: '/blogs/avatar.jpg' }],
    // 主题 移动端优化
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    // 主题模式 博客模式
    type: 'blog',
    author: 'Tian silong',
    logo: '/avatar.jpg',
    // 个人信息的头像
    authorAvatar: '/avatar.jpg',
    mode: 'light ', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
    // 内置搜索
    search: true,
    searchMaxSuggestions: 10,
    // 子侧边栏
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebarDepth: 1,
    lastUpdated: '更新时间',
    // 设置时区偏移量（8小时）
    timezoneOffset: 8 * 60 * 60 * 1000,
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      // 时间线
      { text: 'timeLine', link: '/timeLine/', icon: 'reco-date' }
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认4
        text: '标签' // 默认文案 “标签”
      },
      //  github
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/tsldream' }
      ]
    }
    // 友情链接
    // friendLink: [
    //   {
    //     title: 'vuepress-theme-reco',
    //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     logo: 'http://v1.vuepress-reco.recoluan.com/icon_vuepress_reco.png',
    //     link: 'http://v1.vuepress-reco.recoluan.com'
    //   },
    //   {
    //     title: '午后南杂',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: 'recoluan@qq.com',
    //     link: 'https://www.recoluan.com'
    //   }
    // ],
    // 侧边栏
    // sidebar: {
    //   '/blogs/': [
    //     {
    //       title: '随笔',
    //       collapsable: true,
    //       children: [
    //         { title: '平安喜乐', path: '/blogs/1' },
    //         { title: '随遇而安', path: '/blogs/2' }
    //       ]
    //     }
    //   ],
    //   '/pages/': [
    //     {
    //       title: '随笔1',
    //       collapsable: true,
    //       children: [
    //         { title: '平安喜乐1', path: '/pages/1' },
    //         { title: '随遇而安1', path: '/pages/2' }
    //       ]
    //     }
    //   ]
    // },
  },
  plugins: [
    // 分页插件
    [
      '@vuepress-reco/vuepress-plugin-pagation',
      {
        perPage: 5 // 每页展示条数
      }
    ],
    // 樱花插件
    [
      'sakura',
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false // false 默认图 true 换图 需要填写httpUrl地址
        }
      }
    ],
    // 鼠标点击效果
    [
      'cursor-effects',
      {
        size: 4, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ]
  ]
}
