<template>
  <div class="destination-page">
    <!-- Hero images -->
    <StandardHero :pictures="destinationPics" :title="destinationName" />

    <!-- Information -->
    <div class="container mx-auto flex text-black">
      <!-- Content -->
      <div class="w-full xl:w-2/3 space-y-24">
        <!-- Destination Introduction -->
        <div id="introduction" class="space-y-16">
          <!-- Title section -->
          <div class="sticky top-0 z-10 xl:static pt-16">
            <div class="shadow-2xl">
              <div
                class="bg-brown flex flex-center text-white text-xl h-16 font-bold"
              >
                Destination
              </div>
              <div class="bg-white h-20 text-xl flex flex-center font-bold">
                {{ destinationName }}
              </div>
            </div>
          </div>

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
          <div class="px-8 xl:px-0">
            <BorderTitle text="하이라이트" />
            <div class="border-box space-y-4 px-4">
              <div
                v-for="(highlight, id) in destination.fields.highlights"
                :key="id"
                class="text-base sm:text-lg md:text-2xl text-center"
              >
                {{ highlight.fields.highlight }}
              </div>
            </div>
          </div>

          <!-- Pros & Cons -->
          <div class="px-8 xl:px-0">
            <BorderTitle text="장단점" />
            <div class="border-box">
              <ProsConsTable
                :pros="destination.fields.pros"
                :cons="destination.fields.cons"
              />
            </div>
          </div>

          <!-- Best Time -->
          <div class="px-8 xl:px-0">
            <BorderTitle text="여행적기" />
            <div
              class="border-box flex flex-center text-base sm:text-lg md:text-2xl"
            >
              {{ destination.fields.bestTime }}
            </div>
          </div>
        </div>

        <!-- Places of Interest -->
        <div
          v-for="place in destinationPlaces"
          :id="kebabCase(place.fields.englishName) + '-intro'"
          :key="place.id"
          class="space-y-16"
        >
          <!-- Title section -->
          <div class="sticky top-0 z-10 xl:static pt-16">
            <div class="shadow-2xl">
              <div
                class="bg-brown flex flex-center text-white text-xl h-16 font-bold"
              >
                Places to Visit
              </div>
              <div class="bg-white h-20 text-xl flex flex-center font-bold">
                {{ place.fields.name }}
              </div>
            </div>
          </div>

          <!-- Image Carousel -->
          <ImageCarousel :images="place.fields.images" />

          <!-- Highlights -->
          <div class="px-8 xl:px-0">
            <BorderTitle text="하이라이트" />
            <div class="border-box">
              <div
                v-for="(highlight, i) in place.fields.highlights"
                :key="i"
                class="text-base sm:text-lg md:text-2xl text-center"
              >
                {{ highlight.fields.highlight }}
              </div>
            </div>
          </div>

          <!-- Pros & Cons -->
          <div class="px-8 xl:px-0">
            <BorderTitle text="장단점" />
            <div class="border-box">
              <ProsConsTable
                :pros="place.fields.pros"
                :cons="place.fields.cons"
              />
            </div>
          </div>

          <!-- Best Time -->
          <div class="px-8 xl:px-0">
            <BorderTitle text="여행적기" />
            <div
              class="border-box flex flex-center text-base sm:text-lg md:text-2xl"
            >
              {{ place.fields.bestTime }}
            </div>
          </div>

          <!-- Hotels -->
          <div class="px-8 xl:px-0">
            <BorderTitle :text="place.fields.name + '의 호텔'" />
            <div
              class="relative border-l border-r border-b border-brown flex flex-center"
            >
              <HotelCarousel :hotels="place.fields.hotels" />
            </div>
          </div>
        </div>

        <!-- Trip Ideas -->
        <div
          v-if="destinationTrips.length > 0"
          id="trip-ideas"
          class="space-y-16"
        >
          <!-- Title section -->
          <div class="sticky top-0 z-10 xl:static pt-16">
            <div class="shadow-2xl">
              <div
                class="bg-brown flex flex-center text-white text-xl h-16 font-bold"
              >
                Trip Ideas
              </div>
              <div class="bg-white h-20 text-xl flex flex-center font-bold">
                {{ destination.fields.name }}
              </div>
            </div>
          </div>
          <TripIdeaCarouselSmall :trip-ideas="destinationTrips" />
        </div>
      </div>

      <!-- Navigation -->
      <div class="hidden xl:block xl:w-1/3 pl-16">
        <div class="space-y-2 sticky top-0 pt-16">
          <nuxt-link
            :to="{
              path: '/destinations/' + destination.fields.slug,
              hash: '#introduction'
            }"
            ><div>
              <div class="main-button">About {{ destination.fields.name }}</div>
            </div></nuxt-link
          >
          <div class="main-button cursor-pointer">Places to Visit</div>
          <div v-for="place in destinationPlaces" :key="place.id">
            <nuxt-link
              :to="{
                path: '/destinations/' + destination.fields.slug,
                hash: '#' + kebabCase(place.fields.englishName) + '-intro'
              }"
              ><div
                class="h-16 bg-brown-lighter bg-opacity-25 pl-2 hover:bg-brown"
              >
                <div
                  class="pl-2 w-full h-full flex items-center text-xl hover:bg-brown-dark hover:text-white hover:font-bold"
                >
                  {{ place.fields.name }}
                </div>
              </div></nuxt-link
            >
          </div>
          <div v-if="destinationTrips.length > 0">
            <nuxt-link
              :to="{
                path: '/destinations/' + destination.fields.slug,
                hash: '#trip-ideas'
              }"
              ><div class="main-button">Trip Ideas</div></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
  async asyncData({ store, params }) {
    await store.dispatch('destination/getDestinationBySlug', params.slug)
    await store.dispatch('tripIdeas/getTripIdeas')
    const destination = store.getters['destination/destination']
    const getTrips = await client.getEntries({
      content_type: 'tripIdea',
      'fields.destination.sys.id': destination.sys.id
    })
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
      destinationTrips: getTrips.items
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

<style lang="scss" scoped>
.border-box {
  @apply border-l border-r border-b border-brown py-8;
}
.main-button {
  @apply bg-brown-dark flex items-center pl-4 text-white text-xl h-16;
}
.main-button:hover {
  @apply bg-brown font-bold;
}
</style>
