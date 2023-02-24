import { navbar } from 'vuepress-theme-hope'

export const enNavbar = navbar([
  { text: '业务管理系统常用组件', icon: 'discover', link: '/guide/' },
  {
    text: '浪漫的程序员',
    icon: 'creative',
    // prefix: '/guide/',
    children: [
      { text: '学弟学妹的面试宝典', link: '/funs/interview/' },
      { text: '心跳', link: '/funs/heart/' },
      { text: '气泡', link: '/funs/buble/' },
      // {
      //   text: 'Bar',
      //   icon: 'creative',
      //   prefix: 'bar/',
      //   children: ['baz', { text: '...', icon: 'more', link: '' }],
      // },
      // {
      //   text: 'Foo',
      //   icon: 'config',
      //   prefix: 'foo/',
      //   children: ['ray', { text: '...', icon: 'more', link: '' }],
      // },
    ],
  },
  {
    text: 'Flow-UI',
    icon: 'note',
    link: '/flow/',
  },
])
