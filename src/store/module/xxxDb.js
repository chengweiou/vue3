import { clone, emptyFn } from '@/fn'
const CLEAN_STATE = {
  db: true,
  cache: false,
  save: {...emptyFn.xxx(), id: null},
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('save', {...clone(CLEAN_STATE).save, ...payload})
  },
  async cleanSave({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('save', clone(CLEAN_STATE).save)
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
