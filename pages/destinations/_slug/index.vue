<template>
  <div class="destination-page">
    <!-- Hero images -->
    <StandardHero :pictures="destinationPics" :title="destinationName" />

    <!-- Information -->
    <div class="container mx-auto flex">
      <!-- Content -->
      <div class="w-2/3">
        <!-- Destination Introduction -->
        <div id="introduction" class="py-16">
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
          <ProsConsTable
            :pros="destination.fields.pros"
            :cons="destination.fields.cons"
          />
          <!-- Best Time -->
          <div>
            <div>여행적기: ({{ destination.fields.bestTime }})</div>
          </div>
        </div>

        <!-- Places of Interest -->
        <div
          v-for="place in destinationPlaces"
          :id="kebabCase(place.fields.englishName) + '-intro'"
          :key="place.id"
          class="py-16"
        >
          <!-- Title -->
          <div>{{ place.fields.name }}</div>
          <!-- Image Carousel -->
          <div v-for="image in place.fields.images" :key="image.id">
            <img :src="image.fields.file.url" :alt="image.fields.title" />
          </div>
          <!-- Highlights -->
          <div>
            <div>하이라이트</div>
            <div v-for="highlight in place.fields.highlights" :key="highlight">
              {{ highlight.fields.highlight }}
            </div>
          </div>
          <!-- Pros & Cons -->
          <ProsConsTable :pros="place.fields.pros" :cons="place.fields.cons" />
          <!-- Best Time -->
          <div>
            <div>여행적기: ({{ place.fields.bestTime }})</div>
          </div>
        </div>

        <!-- Hotels -->
        <div
          v-for="place in destinationPlaces"
          :key="place.id"
          class="py-16"
        ></div>
      </div>
      <!-- Navigation -->
      <div class="hidden xl:block xl:w-1/3 pl-16">
        <div class="sticky top-0 pt-16">
          <nuxt-link
            :to="{
              path: '/destinations/' + destination.fields.slug,
              hash: '#introduction'
            }"
            ><div>Intro</div></nuxt-link
          >
          <div>Places to Visit</div>
          <div v-for="place in destinationPlaces" :key="place.id">
            <nuxt-link
              :to="{
                path: '/destinations/' + destination.fields.slug,
                hash: '#' + kebabCase(place.fields.englishName) + '-intro'
              }"
              ><div>{{ place.fields.name }}</div></nuxt-link
            >
          </div>
          <div>Hotels</div>
          <div v-for="place in destinationPlaces" :key="place.id">
            {{ place.fields.name }}
          </div>
          <div>Trip Ideas</div>
        </div>
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
  data() {
    return {
      hotelCarouselOptions: {
        navButtons: false,
        fade: false,
        infinite: true,
        autoplay: false,
        dots: false,
        speed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              navButtons: true
            }
          }
        ]
      }
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
  },
  methods: {
    kebabCase(str) {
      return str
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/([A-Z])([A-Z])/g, '$1-$2')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped></style>
