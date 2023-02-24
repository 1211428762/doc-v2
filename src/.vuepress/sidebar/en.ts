import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/guide/': [
    {
      text: 'Elform业务表单',
      icon: 'article',
      link: '/guide',
      // children: [
      //   {
      //     text: '表单组件',
      //     collapsible: true,
      //     icon: 'edit',
      //     children: ['/guide/form-complete', '/guide/form-case'],
      //   },
      // ],
    },
    {
      text: '表格组件',
      icon: 'editor',
      collapsible: true,
      // link: '/guide/table-complete',
      children: [{ text: '表格示例', link: '/guide/table-complete' }],
    },
    {
      text: '表单组件',
      collapsible: true,
      icon: 'edit',
      children: ['/guide/form-complete', '/guide/form-case'],
    },
    {
      text: '表单规则校验',
      icon: 'enum',
      link: '/guide/rules/rules',
    },
  ],
  '/flow/': [
    // { text: '引言', link: '/flow/' },
    {
      text: 'button',
      link: '/flow/',
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
