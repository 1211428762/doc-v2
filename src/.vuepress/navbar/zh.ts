import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  { text: '表单表格组件', icon: 'discover', link: '/guide/' },
  {
    text: '浪漫的程序员',
    icon: 'creative',
    prefix: '/guide/',
    children: [
      {
        text: 'Bar',
        icon: 'creative',
        prefix: 'bar/',
        children: ['baz', { text: '...', icon: 'more', link: '' }],
      },
      {
        text: 'Foo',
        icon: 'config',
        prefix: 'foo/',
        children: ['ray', { text: '...', icon: 'more', link: '' }],
      },
    ],
  },
  {
    text: 'V2 Docs',
    icon: 'note',
    link: 'https://theme-hope.vuejs.press/',
  },
])
