import { createStore } from 'vuex'

export const store = createStore({
  modules: moduleList(),
  plugins: pluginList(),
})

function moduleList() {
  const list = import.meta.globEager('./module/*.js')
  const result = {}
  for (const e in list) {
    const matched = e.match(/([A-Za-z0-9-_]+)\./i)
    if (!matched || matched.length <= 1) {
      return
    }
    const name = matched[1]
    result[name] = list[e].default
  }
  return result
}
function pluginList() {
  const list = import.meta.globEager('./plugin/*.js')
  const result = []
  for (const e in list) {
    result.push(list[e].default)
  }
  return result
}
