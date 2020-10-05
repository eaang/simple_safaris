import client from '../plugins/contentful'

export const state = () => ({
  continents: []
})

export const mutations = {
  setContinents(state, payload) {
    payload.forEach((continent) => {
      continent.fields.destinations.sort(
        (a, b) => a.fields.listOrder - b.fields.listOrder
      )
    })
    state.continents = payload
  }
}

export const actions = {
  async getContinents({ commit }) {
    const response = await client.getEntries({
      content_type: 'continent'
    })
    if (response.items.length > 0) {
      commit('setContinents', response.items)
    }
  }
}

export const getters = {
  continents: (state) => state.continents
}
