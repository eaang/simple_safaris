<template>
  <div class="destination-page">
    <!-- Hero images -->
    <StandardHero :pictures="destinationPics" :title="destinationName" />

    <!-- Information -->
    <div class="container mx-auto flex">
      <!-- Content -->
      <div class="w-2/3">
        <div>Intro to {{ destinationName }}</div>
        <!-- Map -->
        <div class="w-full h-screen/50">
          <Map
            class="w-full h-full"
            :center="mapCenter"
            :places="mapPoints"
            :zoom="5"
          />
        </div>
        <!-- Highlights -->
        <div>
          <div>하이라이트</div>
          <div
            v-for="highlight in destination.fields.highlights"
            :key="highlight"
          >
            {{ highlight.fields.highlight }}
          </div>
        </div>
        <!-- Pros & Cons -->
        <div class="w-full h-screen/50">
          <div>장단점</div>

          <!-- Table Headers -->
          <div class="flex w-full">
            <div class="flex flex-center w-1/2">장점</div>
            <div class="flex flex-center w-1/2">단점</div>
          </div>

          <!-- Table Content -->
          <div class="flex w-full">
            <div class="w-1/2 text-black">
              <div
                v-for="pro in destination.fields.pros"
                :key="pro"
                class="flex"
              >
                <div><Check class="h-8 text-brown" /></div>
                <div>{{ pro }}</div>
              </div>
            </div>
            <div class="w-1/2 text-black">
              <div
                v-for="con in destination.fields.cons"
                :key="con"
                class="flex"
              >
                <div><Cross class="h-8 text-gray" /></div>
                <div>{{ con }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Navigation -->
      <div>
        <div>Intro</div>
        <div>Places to Visit</div>
        <div v-for="place in destinationPlaces" :key="place.id">
          {{ place.fields.name }}
        </div>
        <div>Hotels</div>
        <div v-for="place in destinationPlaces" :key="place.id">
          {{ place.fields.name }}
        </div>
        <div>Trip Ideas</div>
      </div>
    </div>

    <!-- Map & Pros / Cons -->
    <div class="section container mx-auto">
      <div class="grid grid-cols-2 gap-4 py-16">
        <!-- Map -->
        <div class="w-full h-screen/50">
          <Map
            class="w-full h-full"
            :center="mapCenter"
            :places="mapPoints"
            :zoom="5"
          />
        </div>
        <!-- Pros & Cons -->
        <div class="w-full h-screen/50">
          <div class="title title-main text-black text-center">장단점</div>

          <!-- Table Headers -->
          <div class="flex w-full mt-4">
            <div class="flex flex-center w-1/2 py-2 text-black text-2xl">
              장점
            </div>
            <div class="flex flex-center w-1/2 py-2 text-black text-2xl">
              단점
            </div>
          </div>

          <!-- Table Content -->
          <div class="flex w-full">
            <div class="w-1/2 text-black text-xl space-y-4">
              <div
                v-for="pro in destination.fields.pros"
                :key="pro"
                class="flex"
              >
                <div><Check class="h-8 text-brown" /></div>
                <div>{{ pro }}</div>
              </div>
            </div>
            <div class="w-1/2 text-black text-xl space-y-4">
              <div
                v-for="con in destination.fields.cons"
                :key="con"
                class="flex"
              >
                <div><Cross class="h-8 text-gray" /></div>
                <div>{{ con }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      {{ destination.fields }}
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
    const thisMapPoints = destination.fields.mapPoints
    const mapPoints = []
    thisMapPoints.forEach((point) => {
      mapPoints.push({
        name: point.fields.locationName,
        longitude: parseFloat(point.fields.longitude),
        latitude: parseFloat(point.fields.latitude)
      })
    })
    return {
      destination: destination,
      destinationName: store.getters['destination/destinationName'],
      destinationPics: destinationPics,
      destinationPlaces: destination.fields.places,
      destinationHotels: destination.fields.hotels,
      mapCenter: [
        parseFloat(destination.fields.mapCenter.fields.mapCentreLongitude),
        parseFloat(destination.fields.mapCenter.fields.mapCentreLatitude)
      ],
      mapPoints: mapPoints,
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
