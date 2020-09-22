export const state = () => ({})

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch('continents/getContinents', context)
    await dispatch('tripIdeas/getTripIdeas', context)
  },
}
