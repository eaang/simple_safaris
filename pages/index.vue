<template>
  <div class="relative landing-page">
    <TheTransparentHeader
      :continents="continents"
      :trip-ideas="tripIdeas"
      class="absolute w-screen z-50"
    />
    <TheSidenav class="absolute inset-x-0 top-0" />
    <TheFullheightHero class="z-40" />
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
