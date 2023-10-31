import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/zh/guide/': [
    {
      text: 'Elform业务表单',
      icon: 'article',
      link: '/zh/guide',
      // children: [
      //   {
      //     text: '表单组件',
      //     collapsible: true,
      //     icon: 'edit',
      //     children: ['/zh/guide/form-complete', '/zh/guide/form-case'],
      //   },
      // ],
    },
    {
      text: '表格组件',
      icon: 'editor',
      collapsible: true,
      // link: '/zh/guide/table-complete',
      children: [{ text: '表格示例', link: '/zh/guide/table-complete' }],
    },
    {
      text: '表单组件',
      collapsible: true,
      icon: 'edit',
      children: ['/zh/guide/form-complete', '/zh/guide/form-case'],
    },
    {
      text: '表单规则校验',
      icon: 'enum',
      link: '/zh/guide/rules/rules',
    },
  ],
  '/zh/flow/': [
    // { text: '引言', link: '/zh/flow/' },
    {
      text: 'button',
      link: '/zh/flow/',
    },
    {
      text: 'viewport',
      link: '/zh/flow/viewport',
    },
    {
      text: 'dialog',
      link: '/zh/flow/dialog',
    },
    {
      text: 'area',
      link: '/zh/flow/area',
    },
    {
      text: 'toast',
      link: '/zh/flow/toast',
    },
    {
      text: 'badge',
      link: '/zh/flow/badge',
    },
    {
      text: 'flow-chart',
      link: '/zh/flow/flow-chart',
    },
  ],
})
