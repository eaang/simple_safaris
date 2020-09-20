<template>
  <div>
    This is the page for a single destination.
    <div>{{ destinationName }}</div>
    {{ destinationDescription }}
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('destination/getDestinationBySlug', params.slug)
  },
  computed: {
    currentDestination() {
      return this.$store.getters['destination/destination']
    },
    destinationName() {
      return this.$store.getters['destination/destinationName']
    },
    destinationDescription() {
      return this.$store.getters['destination/destinationDescription']
    },
    isLoading() {
      return this.$store.getters['destination/loadingStatus']
    },
  },
}
</script>

<style lang="scss" scoped></style>
