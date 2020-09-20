<template>
  <div>
    <div>
      {{ tripName }}
    </div>
    <div>
      {{ tripDescription }}
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
  },
  computed: {
    currentTrip() {
      return this.$store.getters['tripIdea/tripIdea']
    },
    tripName() {
      return this.$store.getters['tripIdea/tripName']
    },
    tripDescription() {
      return this.$store.getters['tripIdea/tripDescription']
    },
    isLoading() {
      return this.$store.getters['tripIdea/loadingStatus']
    },
  },
}
</script>

<style lang="scss" scoped></style>
