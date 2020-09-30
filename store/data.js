import axios from 'axios'

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
    return axios.get('https://selectel.ru/data/page.json').then((res) => {
      return state.commit('setData', res.data)
    })
  }
}

export const getters = {
  getData (state) {
    return state.data
  },

  getPromoData (state) {
    return state.data.promoblock
  },

  getAdvantagesData (state) {
    return state.data.advantages
  },

  getProductsData (state) {
    return state.data.products
  },

  getFaqData (state) {
    return state.data.faq
  },

  getBannersData (state) {
    return state.data.banners
  }
}
