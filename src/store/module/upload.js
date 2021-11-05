import service from '@/sdk/uploadService'
import { clone, emptyFn } from '@/fn'

const CLEAN_STATE = {
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.mg().save({ file: payload.img, category: payload.category, w: 1000, single: true })
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return ''
    }
    return rest.data
  },
}

const mutations = {
}

export default {
  namespaced: true, state, actions, mutations,
}
