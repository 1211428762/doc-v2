import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/guide/': [
    {
      text: 'Elform业务表单',
      icon: 'note',
      link: '/guide',
      children: [
        {
          text: '表单组件',
          children: ['/guide/form-complete', '/guide/form-case'],
        },
        {
          text: '表格组件',
          // link: '/guide/table-complete',
          children: [{ text: '表格示例', link: '/guide/table-complete' }],
        },
      ],
    },
  ],
  '/flow/': [
    { text: '引言', link: '/flow/' },
    {
      text: 'button',
      link: '/flow/button',
    },
    {
      text: 'viewport',
      link: '/flow/viewport',
    },
    {
      text: 'dialog',
      link: '/flow/dialog',
    },
    {
      text: 'area',
      link: '/flow/area',
    },
    {
      text: 'toast',
      link: '/flow/toast',
    },
    {
      text: 'badge',
      link: '/flow/badge',
    },
    {
      text: 'flow-chart',
      link: '/flow/flow-chart',
    },
  ],
})
