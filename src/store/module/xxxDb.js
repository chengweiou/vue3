import clone from '@/fn/util/clone'
import empty from '@/fn/data/empty'

const CLEAN_STATE = {
  db: true,
  cache: false,
  save: empty.xxx,
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('save', {...payload, ...clone(CLEAN_STATE).save})
  },
}

const mutations = {
  save(state, e) {
    state.save = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
