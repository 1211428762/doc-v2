import { navbar } from 'vuepress-theme-hope'

export const enNavbar = navbar([
  { text: ' Components for CMS', icon: 'discover', link: '/guide/' },
  {
    text: 'Romantic Programmer',
    icon: 'creative',
    children: [
      { text: "Interview  for Juniors", link: '/funs/interview/' },
      { text: 'Heartbeat', link: '/funs/heart/' },
      { text: 'Bubbles', link: '/funs/buble/' },
    ],
  },
  {
    text: 'Flow-UI',
    icon: 'note',
    link: '/flow/',
  },
])