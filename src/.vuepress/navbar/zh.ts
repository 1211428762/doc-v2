import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  { text: '业务管理系统常用组件', icon: 'discover', link: '/zh/guide/' },
  {
    text: '浪漫的程序员',
    icon: 'creative',
    children: [
      { text: '学弟学妹的面试宝典', link: '/zh/funs/interview/' },
      { text: '心跳', link: '/zh/funs/heart/' },
      { text: '气泡', link: '/zh/funs/buble/' },
     
    ],
  },
  {
    text: 'Flow-UI',
    icon: 'note',
    link: '/zh/flow/',
  },
])
