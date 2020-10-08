import client from '../plugins/contentful'

export const state = () => ({
  currentDestination: {},
  isLoading: true
})

export const mutations = {
  setCurrentDestination(state, payload) {
    state.currentDestination = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async getDestinationBySlug({ commit }, slug) {
    commit('setLoading', true)
    const response = await client.getEntries({
      include: 3,
      content_type: 'destination',
      'fields.slug': slug
    })
    commit('setCurrentDestination', response.items[0])
    commit('setLoading', false)
  }
}

export const getters = {
  destination: (state) => state.currentDestination,
  destinationName: (state) => state.currentDestination.fields.name,
  loadingStatus: (state) => state.isLoading
}
