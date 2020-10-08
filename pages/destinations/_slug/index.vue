<template>
  <div class="destination-page">
    <!-- Hero images -->
    <StandardHero :pictures="destinationPics" :title="destinationName" />

    <!-- Information -->
    <div class="container mx-auto flex text-black">
      <!-- Content -->
      <div class="w-full xl:w-2/3 space-y-24">
        <!-- Destination Introduction -->
        <div id="introduction">
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
              v-for="(highlight, id) in destination.fields.highlights"
              :key="id"
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
        >
          <!-- Title -->
          <div>
            {{ place.fields.name }}
          </div>
          <!-- Image Carousel -->
          <div v-for="image in place.fields.images" :key="image.id">
            <img :src="image.fields.file.url" :alt="image.fields.title" />
          </div>
          <!-- Highlights -->
          <div>
            <div>하이라이트</div>
            <div v-for="(highlight, i) in place.fields.highlights" :key="i">
              {{ highlight.fields.highlight }}
            </div>
          </div>
          <!-- Pros & Cons -->
          <ProsConsTable :pros="place.fields.pros" :cons="place.fields.cons" />
          <!-- Best Time -->
          <div>
            <div>여행적기: ({{ place.fields.bestTime }})</div>
          </div>
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
        {{ destination.sys.id }}
        <div v-if="destinationTrips.length > 0">
          <div v-for="idea in destinationTrips" :key="idea.id">
            <TripIdeaCard
              :slug="idea.fields.slug"
              :url="idea.fields.headerImages[0].fields.file.url"
              :alt="idea.fields.headerImages[0].fields.file.title"
              :title="idea.fields.name"
              :content="
                idea.fields.description.content[0].content[0].value.match(
                  /^([^.]+.)/
                )[0]
              "
              :price="idea.fields.startingPrice"
            />
          </div>
        </div>
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
          <div v-if="destinationTrips.length > 0">Trip Ideas</div>
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

<style lang="scss" scoped></style>
