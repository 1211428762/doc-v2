import { defineClientConfig } from '@vuepress/client'
import * as Icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import toastInstance from '@/components/flow-components/toast/index'
// import FormList from '@/components/FormList'
// import TableList from './components/TableList'
import globalFuns from '@/components/global'
import inspiration from '@/inspiration'
// import { initI18n } from '@/i18n'
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // app.use(ElementPlus).use(globalFuns).use(initI18n)
    app.use(ElementPlus).use(globalFuns)
    if (!__VUEPRESS_SSR__) {
      app.config.globalProperties.$ftoast = toastInstance()
      // console.log()
      // inspiration.loadCatDependence().then((res) => {
      //   app.provide('$L2Dwidget', window.L2Dwidget)
      //   console.log(window.L2Dwidget)
      // })
      // console.log(window.L2Dwidget)
    }
    for (const icon in Icons) {
      // eslint-disable-next-line import/namespace
      app.component('ElIcon' + icon, Icons[icon])
    }
  },
})
