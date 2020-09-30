<template>
  <div class="trip-idea-page">
    <!-- Hero Section -->

    <div class="relative h-screen/75 w-full bg-blue-700 flex flex-center">
      <div class="mt-16 title-header">{{ tripName }}</div>
    </div>
    {{ tripIdea.fields.name }}
    {{ tripDescription }}
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
  },
  asyncData({ store }) {
    return { tripIdea: store.getters['tripIdea/tripIdea'] }
  },
  computed: {
    tripName() {
      return this.tripIdea.fields.name
    },
    tripDescription() {
      return this.tripIdea.fields.description.content[0].content[0].value
    },
  },
}
</script>

<style lang="scss" scoped></style>
