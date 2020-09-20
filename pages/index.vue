<template>
  <div class="landing-page">
    <div v-for="(continent, index) in continents" :key="index">
      {{ continent.fields.name }}
      <div v-for="(place, ind) in continent.fields.destinations" :key="ind">
        {{ place.fields.name }}
      </div>
    </div>
    <div v-for="(trip, id) in tripIdeas" :key="id">
      {{ trip.fields.name }}
    </div>
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
