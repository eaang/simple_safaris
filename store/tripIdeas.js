import client from '../plugins/contentful'

export const state = () => ({
  tripIdeas: []
})

export const mutations = {
  setTripIdeas(state, payload) {
    state.tripIdeas = payload
  }
}

export const actions = {
  async getTripIdeas({ commit }) {
    const response = await client.getEntries({
      content_type: 'tripIdea'
    })
    if (response.items.length > 0) {
      commit('setTripIdeas', response.items)
    }
  }
}

export const getters = {
  tripIdeas: (state) => state.tripIdeas
}
