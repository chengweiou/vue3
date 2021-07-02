import service from '@/sdk/xxxService'
import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  total: 0,
  filter: { k: '', skip: 0, limit: 10 },
  list: [],
  detail: {},
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.save(payload)
    if (rest.code !== 'OK') {
      return
    }
    state.list.push({ ...payload, id: rest.data })
    commit('list', state.list)
  },
  async update({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.update(payload)
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return false
    }
    commit('detail', payload)
    return true
  },
  async findById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.findById({ id: payload.id })
    if (rest.code !== 'OK') {
      return
    }
    commit('detail', rest.data)
  },
  resetFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('resetFilter', 'REMOVE')
  },
  changeFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('filter', { ...state.filter, ...payload })
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    // can work on temp search
    let rest = await service.count({ ...state.filter, ...payload })
    if (rest.code !== 'OK') {
      return
    }
    commit('total', rest.data)
  },
  async find({ commit, dispatch, state, rootState }, payload, config = {}) {
    // can work on temp search
    let rest = await service.find({ ...state.filter, ...payload })
    if (rest.code !== 'OK') {
      return
    }
    commit('list', rest.data)
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('reset', 'REMOVE')
  },
}

const mutations = {
  reset(state, e) {
    state = clone(CLEAN_STATE)
  },
  detail(state, e) {
    state.detail = e
  },
  filter(state, e) {
    state.filter = e
  },
  total(state, e) {
    state.total = e
  },
  resetFilter(state, e) {
    state.filter = { ...clone(CLEAN_STATE).filter }
    state.list = []
  },
  list(state, e) {
    state.list = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
