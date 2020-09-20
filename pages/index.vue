<template>
  <div class="landing-page">
    {{ continents }}
    {{ tripIdeas }}
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('continents/getContinents')
    await store.dispatch('tripIdeas/getTripIdeas', params.slug)
    return {
      continents: store.getters['continents/continents'],
      tripIdeas: store.getters['tripIdeas/tripIdeas'],
    }
  },
}
</script>

<style></style>
