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
  destinationDescription: (state) => {
    if (state.currentDestination.fields.description) {
      return state.currentDestination.fields.description.content[0].content[0]
        .value
    }
    return ''
  },
  loadingStatus: (state) => state.isLoading
}
