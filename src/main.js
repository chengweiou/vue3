import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import { i18n } from './i18n'

import setGlobal from './fn'

const app = createApp(App)
app
  .use(router)
  .use(store)
  .use(i18n)

setGlobal(app.config.globalProperties)
app.mount('#app')
