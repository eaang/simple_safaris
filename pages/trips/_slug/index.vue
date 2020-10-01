<template>
  <div class="trip-idea-page">
    <!-- Hero Section -->
    <div class="relative h-screen/75 w-full">
      <div class="absolute inset-x-0 top-0 z-0">
        <agile
          ref="carousel"
          :options="carouselOptions"
          @after-change="counter = $refs.carousel.getCurrentSlide()"
        >
          <div
            v-for="image in tripPics"
            :key="image.id"
            class="slide h-screen/75 w-full pt-16"
          >
            <div
              class="h-full w-full flex flex-center bg-cover bg-center"
              :style="{
                'background-image': 'url(' + image.fields.file.url + ')',
              }"
            >
              <div class="title-header text-center w-full">{{ tripName }}</div>
            </div>
          </div>

          <!-- Custom buttons -->
          <template slot="prevButton"
            ><div
              v-if="tripPics.length > 1"
              class="absolute inset-y-0 left-0 flex items-center justify-around px-12 pt-16 text-2xl"
            >
              <div
                class="rounded-full border-2 border-white p-6 text-white hover:bg-white hover:text-brown"
              >
                <ArrowLeft class="h-6 w-6" />
              </div>
            </div>
          </template>
          <template slot="nextButton"
            ><div
              v-if="tripPics.length > 1"
              class="absolute inset-y-0 right-0 flex items-center justify-around px-12 pt-16 text-2xl"
            >
              <div
                class="rounded-full border-2 border-white p-6 text-white hover:bg-white hover:text-brown"
              >
                <ArrowRight class="h-6 w-6" />
              </div>
            </div>
          </template>
        </agile>
        <!-- Custom dots -->
        <ul
          v-if="tripPics.length > 1"
          class="flex justify-around absolute inset-x-0 bottom-0 py-12"
        >
          <div class="flex">
            <li
              v-for="(image, i) in tripPics"
              :key="i"
              class="border-2 border-white rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-white"
              :class="{ 'bg-white': i === counter }"
              @click="
                counter = i
                $refs.carousel.goTo(counter)
              "
            ></li>
          </div>
        </ul>
      </div>
    </div>

    <!-- Map & Description -->
    <div class="section container mx-auto space-y-8">
      <Map :center="tripMapCenter" :places="tripMapPoints" :zoom="6" />
      <div class="w-full flex justify-center">
        <div
          class="text-center text-gray text-sm md:text-base lg:text-lg w-4/5"
        >
          {{ tripDescription }}
        </div>
      </div>
    </div>

    <!-- Schedule Highlights -->
    <div class="section container mx-auto space-y-16 px-16 sm:px-0">
      <div class="title title-main text-black text-center">
        Schedule Highlights
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div v-for="(highlight, id) in tripHighlights" :key="id">
          <div class="flex justify-center h-40">
            <img
              class="object-scale-down"
              :src="highlight.fields.icon.fields.file.url"
              :alt="highlight.fields.icon.fields.file.title"
            />
          </div>
          <div class="text-gray text-base lg:text-lg text-center">
            <div class="font-bold text-lg lg:text-xl xl:h-16">
              {{ highlight.fields.title }}
            </div>
            <div class="h-24 text-center">
              {{ highlight.fields.summary }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile,
  },
  async fetch({ store, params }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
  },
  async asyncData({ store, params, $axios }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
    const thisTrip = store.getters['tripIdea/tripIdea']
    const thisMap = thisTrip.fields.map
    const thisMapPoints = thisTrip.fields.mapPoints
    const mapPoints = []
    thisMapPoints.forEach((point) => {
      mapPoints.push({
        name: point.fields.locationName,
        longitude: parseFloat(point.fields.longitude),
        latitude: parseFloat(point.fields.latitude),
      })
    })
    return {
      tripIdea: thisTrip,
      tripName: thisTrip.fields.name,
      tripPics: thisTrip.fields.headerImages,
      tripDescription: thisTrip.fields.description.content[0].content[0].value,
      tripMapCenter: [
        parseFloat(thisMap.fields.mapCentreLongitude),
        parseFloat(thisMap.fields.mapCentreLatitude),
      ],
      tripMapPoints: mapPoints,
      tripHighlights: thisTrip.fields.scheduleHighlight,
    }
  },
  data() {
    return {
      counter: 0,
      carouselOptions: {
        navButtons: false,
        fade: true,
        infinite: true,
        autoplay: false,
        dots: false,
        speed: 4000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              navButtons: true,
            },
          },
        ],
      },
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters['tripIdea/loadingStatus']
    },
  },
  mounted() {
    setInterval(() => {
      this.$refs.carousel.goToNext()
      this.counter++
    }, 8000)
  },
}
</script>

<style lang="scss" scoped></style>
