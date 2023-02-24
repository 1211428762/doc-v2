import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme.js'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
export default defineUserConfig({
  base: '/doc-v2/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Flow-UI',
      description: 'Flow-UI plus',
    },
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: '文档演示',
    //   description: 'vuepress-theme-hope 的文档演示',
    // },
  },
  // bundler: viteBundler({
  //   viteOptions: {
  //     build: { outDir: './' },
  //   },
  // }),

  alias: {
    '@': path.resolve(__dirname, ''), // 这样配置后 @ 可以指向 src 目录
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
})
