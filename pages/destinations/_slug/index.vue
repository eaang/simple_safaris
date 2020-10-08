<template>
  <div class="destination-page">
    <!-- Hero images -->
    <StandardHero :pictures="destinationPics" :title="destinationName" />

    <!-- Highlights -->
    <div class="section container mx-auto space-y-16 px-16">
      <div class="title title-main text-black text-center">
        Intro to {{ destinationName }}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div
          v-for="highlight in destination.fields.highlights"
          :key="highlight.id"
        >
          <div
            v-if="highlight.fields.icon !== undefined"
            class="flex justify-center h-40"
          >
            <img
              class="object-scale-down"
              :src="highlight.fields.icon.fields.file.url"
              :alt="highlight.fields.icon.fields.file.title"
            />
          </div>
          <div class="text-gray text-base lg:text-lg text-center">
            <div class="font-bold text-lg lg:text-xl xl:h-16">
              {{ highlight.fields.highlight }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      This is the page for a single destination.
      <div>Place: {{ destinationName }}</div>
      <div v-if="destinationTrips.length > 0">
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
      <div v-else>No trips!</div>
      <div v-for="(highlight, id) in destination.fields.highlights" :key="id">
        {{ highlight.fields }}
      </div>
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
    const destination = store.getters['destination/destination']
    const pics = destination.fields.headerImages
    const destinationPics = []
    pics.forEach((pic) => {
      destinationPics.push({ url: pic.fields.file.url })
    })
    return {
      destination: destination,
      destinationName: store.getters['destination/destinationName'],
      destinationPics: destinationPics,
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
