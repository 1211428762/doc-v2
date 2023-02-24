import { createApp } from 'vue'
import toast from './toast.vue'

const getInstance = () => {
  const app = createApp(toast)
  const dom = document.createElement('section')
  const instant = app.mount(dom)
  document.body.appendChild(dom)
  return instant
}

export default getInstance
