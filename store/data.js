import data from '../store/data.json'

export const state = () => ({
  data: {}
})

export const mutations = {
  setData (state, data) {
    state.data = data
  }
}

export const actions = {
  fetchData (state) {
    return state.commit('setData', data)
  }
}

export const getters = {
  getData (state) {
    return state.data
  },

  getPromoData (state) {
    return state.data.promoblock
  }
}
