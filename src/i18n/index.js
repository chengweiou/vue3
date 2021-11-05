import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import { storage } from '@/fn'

let lang = storage.get('lang') ?? 'zh'
storage.set('lang', lang)

export const i18n = createI18n({
  locale: lang,
  globalInjection: true,
  // vite.config.js 中加载所有文件
  messages,
})
