<template>
  <div class="container mx-auto">
    <div v-for="(trip, index) in tripIdeas" :key="index" class="mt-24">
      {{ trip.fields.continent.fields.name }}
    </div>
    <hr />
    <div v-for="(trip, index) in asiaTrips" :key="index" class="mt-24">
      {{ trip.fields.continent.fields.name }}
    </div>
    <hr />
    <div v-for="(trip, index) in africaTrips" :key="index" class="mt-24">
      {{ trip.fields.continent.fields.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      continents: this.$store.getters['continents/continents'],
      tripIdeas: this.$store.getters['tripIdeas/tripIdeas'],
    }
  },
  computed: {
    asiaTrips() {
      return this.tripIdeas.filter(
        (trip) => trip.fields.continent.fields.name === 'Asia'
      )
    },
    africaTrips() {
      return this.tripIdeas.filter(
        (trip) => trip.fields.continent.fields.name === 'Africa'
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
