import { clone } from '@/fn'
const CLEAN_STATE = {
  user: {}, // 目前用于给db获取身份区别
}

const state = clone(CLEAN_STATE)
const actions = {
}

const mutations = {
}

function initState(s) {
  Object.keys(CLEAN_STATE).forEach(key => {
    s[key] = CLEAN_STATE[key]
  })
}

export default {
  namespaced: true, state, actions, mutations,
}
