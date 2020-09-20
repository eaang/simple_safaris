import client from '../plugins/contentful'

export const state = () => ({
  currentTripIdea: {},
  isLoading: true,
})

export const mutations = {
  setCurrentTripIdea(state, payload) {
    state.currentTripIdea = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  },
}

export const actions = {
  async getTripIdeaBySlug({ commit }, slug) {
    commit('setLoading', true)
    const response = await client.getEntries({
      content_type: 'tripIdea',
      'fields.slug': slug,
    })
    commit('setCurrentTripIdea', response.items[0])
    commit('setLoading', false)
  },
}

export const getters = {
  tripIdea: (state) => state.currentTripIdea,
  loadingStatus: (state) => state.isLoading,
  tripName: (state) => state.currentTripIdea.fields.name,
  tripDescription: (state) =>
    state.currentTripIdea.fields.description.content[0].content[0].value,
}
