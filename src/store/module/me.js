import clone from '@/fn/util/clone'
const CLEAN_STATE = {
  user: {}, // 目前用于给db获取身份区别
}

const state = clone(CLEAN_STATE)
const actions = {
}

const mutations = {
}

export default {
  namespaced: true, state, actions, mutations,
}
