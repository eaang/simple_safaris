<template>
  <div class="trip-idea-page">
    <!-- Hero Section -->
    <div class="relative h-screen/75 w-full bg-blue-700 flex flex-center">
      <div class="mt-16 title-header">{{ tripName }}</div>
    </div>

    <!-- Main content -->
    <div>{{ tripDescription }}</div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
    const thisTrip = store.getters['tripIdea/tripIdea']
    return {
      tripIdea: thisTrip,
      tripName: thisTrip.fields.name,
      tripDescription: thisTrip.fields.description.content[0].content[0].value,
    }
  },
  computed: {
    currentTrip() {
      return this.$store.getters['tripIdea/tripIdea']
    },
    isLoading() {
      return this.$store.getters['tripIdea/loadingStatus']
    },
  },
}
</script>

<style lang="scss" scoped></style>
