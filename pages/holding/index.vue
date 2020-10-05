<template>
  <div class="landing-page">
    <div class="container mx-auto">
      <div v-for="continent in continents" :key="continent.fields.name">
        {{ continent.fields.name }}
        <div
          v-for="place in continent.fields.destinations"
          :key="place.fields.name"
        >
          <a :href="'/destinations/' + place.fields.slug">{{
            place.fields.name
          }}</a>
        </div>
      </div>
      <div v-for="trip in tripIdeas" :key="trip.fields.name">
        <a :href="'/trips/' + trip.fields.slug">{{ trip.fields.name }}</a>
      </div>
      <div
        class="rounded-lg px-4 py-2 bg-teal-500 text-white w-40 text-center cursor-pointer"
        @click="clicked"
      >
        CLICK ME
      </div>
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
      counter: 0
    }
  },
  methods: {
    clicked() {
      this.counter++
    }
  }
}
</script>

<style></style>
