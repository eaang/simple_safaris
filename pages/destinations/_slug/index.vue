<template>
  <div class="container mx-auto">
    This is the page for a single destination.
    <div>Place: {{ destinationName }}</div>
    <div v-for="trip in destinationTrips" :key="trip.fields.id">
      -
      <a
        class="text-brown hover:opacity-75"
        :href="'/trips/' + trip.fields.slug"
      >
        {{ trip.fields.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params, $axios }) {
    const space = process.env.CTF_SPACE_ID
    const token = process.env.CTF_CD_ACCESS_TOKEN
    await store.dispatch('destination/getDestinationBySlug', params.slug)
    await store.dispatch('tripIdeas/getTripIdeas')
    const destinationTrips = await $axios
      .$get(
        'https://cdn.contentful.com/spaces/' +
          space +
          '/entries?access_token=' +
          token +
          '&content_type=tripIdea&fields.destination.sys.contentType.sys.id=destination&fields.destination.fields.slug[match]=' +
          params.slug
      )
      .then((res) => {
        return res.items
      })
    return {
      currentDestination: store.getters['destination/destination'],
      destinationName: store.getters['destination/destinationName'],
      destinationTrips
    }
  },
  head() {
    return {
      title: '- ' + this.destinationName
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters['destination/loadingStatus']
    }
  }
}
</script>

<style lang="scss" scoped></style>
