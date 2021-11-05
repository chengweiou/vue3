import service from '@/sdk/xxxService'
import uploadService from '@/sdk/uploadService'
import { clone, emptyFn } from '@/fn'

const CLEAN_STATE = {
  total: 0,
  page: { curr: 1 },
  filter: { k: '', skip: 0, limit: 10 },
  list: [],
  detail: emptyFn.xxx(),
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let {img, ...e} = payload
    let rest = await uploadService.mg().save({ file: payload.img, category: 'xxx', nameWithoutType: '', w: 500 })
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    e.imgsrc = rest.data
    rest = await service.mg().save(e)
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    state.list.push({ ...e, id: rest.data })
    commit('list', state.list)
    dispatch('modal/off', null, { root: true })
    dispatch('xxxDb/cleanSave', null, { root: true })
    return true
  },
  async remove({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.mg().remove(payload)
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', state.list.filter(e => e.id!=payload.id))
    return true
  },
  async update({ commit, dispatch, state, rootState }, payload, config = {}) {
    let {img, ...e} = payload
    if (payload.img) {
      let rest = await uploadService.mg().save({ file: payload.img, category: 'xxx', nameWithoutType: payload.id, w: 500 })
      if (rest.code !== 'OK') {
        dispatch('failBox/onRest', rest, { root: true })
        return
      }
      e.imgsrc = rest.data
    }

    let rest = await service.mg().update(e)
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return false
    }
    commit('detail', e)
    return true
  },
  async findById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.all().findById({ id: payload.id })
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
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
  changePage({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('filter', { ...state.filter, skip: (payload.curr - 1) * state.filter.limit })
    commit('page', payload)
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.all().count({ ...state.filter, ...payload })
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async find({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.all().find({ ...state.filter, ...payload })
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
    return true
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('reset', 'REMOVE')
    commit('resetFilter', 'REMOVE')
  },
  resetDetail({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('detail', {})
  },
}

const mutations = {
  reset(state, e) {
    state = clone(CLEAN_STATE)
  },
  detail(state, e) {
    state.detail = { ...clone(CLEAN_STATE).detail, ...e }
  },
  total(state, e) {
    state.total = e
  },
  page(state, e) {
    state.page = e
  },
  resetFilter(state, e) {
    state.filter = { ...clone(CLEAN_STATE).filter }
    state.list = []
  },
  filter(state, e) {
    state.filter = e
  },
  list(state, e) {
    state.list = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
