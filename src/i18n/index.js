import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import storage from '@/sdk/util/storage'

let lang = storage.get('lang')
if (!lang) {
  lang = 'en'
  storage.set('lang', 'en')
}
export const i18n = createI18n({
  locale: lang,
  globalInjection: true,
  // vite.config.js 中加载所有文件
  messages,
})
