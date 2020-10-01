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
              <div class="title-header text-center w-full">
                {{ tripName }}
              </div>
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
            <div v-else class="invisible"></div>
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
            <div v-else class="invisible"></div>
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
      <Map
        v-if="tripIdea.fields.map !== undefined"
        :center="tripMapCenter"
        :places="tripMapPoints"
        :zoom="5"
      />
      <div v-else class="h-16"></div>
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
              {{ highlight.fields.title }}
            </div>
            <div class="h-24 text-center">
              {{ highlight.fields.summary }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trip Content -->
    <div class="container mx-auto flex text-black">
      <!-- Trip Days -->
      <div class="trip-days-info w-2/3 space-y-24">
        <div
          v-for="(day, id) in tripDays"
          :id="kebabCase(day.fields.location)"
          :key="id"
          class="space-y-16"
        >
          <!-- Title section -->
          <div class="sticky top-0 md:static pt-16">
            <div class="shadow-2xl">
              <div
                class="bg-brown flex flex-center text-white text-xl h-16 font-bold"
              >
                {{ day.fields.dayNumbers }}
              </div>
              <div class="bg-white h-20 text-xl flex flex-center font-bold">
                {{ day.fields.location }}
              </div>
            </div>
          </div>

          <!-- Location image & description-->
          <div>
            <img
              class="object-scale-down"
              :src="day.fields.locationImage.fields.file.url"
              :alt="day.fields.locationImage.fields.file.fileName"
            />
            <div class="space-y-4 pt-4">
              <div class="text-3xl text-gray-dark">
                {{ day.fields.location }}
              </div>
              <div class="text-lg text-brown">
                {{ day.fields.description.content[0].content[0].value }}
              </div>
            </div>
          </div>
          <!-- Transportation -->
          <div>
            <BorderTitle text="Transportation" />
            <div class="border-l border-r border-b border-brown py-8 space-y-4">
              <div
                v-for="(step, index) in day.fields.transportationSteps"
                :key="index"
                class="flex flex-col flex-center"
              >
                <div class="flex flex-center space-x-2">
                  <div v-if="step.fields.modeOfTransportation === 'Car'">
                    <img src="/transport/ic-car.svg" />
                  </div>
                  <div v-if="step.fields.modeOfTransportation === 'Plane'">
                    <img src="/transport/ic-plane.svg" />
                  </div>
                  <div class="text-xl">{{ step.fields.direction }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Hotel -->
          <div>
            <BorderTitle text="Stay" />
            <div
              class="relative border-l border-r border-b border-brown flex flex-center"
            >
              <agile
                v-if="day.fields.hotels.length > 1"
                ref="stayCarousel"
                :options="stayCarouselOptions"
                class="w-full"
              >
                <div
                  v-for="(hotel, index) in day.fields.hotels"
                  :key="index"
                  class="slide"
                >
                  <div class="w-full py-16 flex flex-center">
                    <HotelCard
                      :src="hotel.fields.hotelImage.fields.file.url"
                      :alt="hotel.fields.hotelImage.fields.title"
                      :name="hotel.fields.name"
                      :price="hotel.fields.price"
                      class="w-2/5"
                    />
                  </div>
                </div>
                <template slot="prevButton">
                  <div class="absolute inset-y-0 left-0 flex items-center">
                    <div
                      class="w-16 h-24 border-t border-r border-b border-brown flex flex-center"
                    >
                      <AngleLeft class="text-brown h-16" />
                    </div>
                  </div>
                </template>
                <template slot="nextButton">
                  <div class="absolute inset-y-0 right-0 flex items-center">
                    <div
                      class="w-16 h-24 border-t border-l border-b border-brown flex flex-center"
                    >
                      <AngleRight class="text-brown h-16" />
                    </div>
                  </div>
                </template>
              </agile>

              <div
                v-for="(hotel, index) in day.fields.hotels"
                v-else
                :key="index"
                class="w-full py-16 flex flex-center"
              >
                <HotelCard
                  :src="hotel.fields.hotelImage.fields.file.url"
                  :alt="hotel.fields.hotelImage.fields.title"
                  :name="hotel.fields.name"
                  :price="hotel.fields.price"
                  class="w-2/5"
                />
              </div>
            </div>
          </div>
          <!-- Activity -->
          <div v-if="day.fields.activities">
            <div class="mb-16">
              <BorderTitle text="Activity" />
              <div
                class="border-l border-r border-b border-brown text-center py-8 space-y-4"
              >
                <div
                  v-for="(activity, i) in day.fields.activities"
                  :key="i"
                  class="text-xl"
                >
                  {{ activity.fields.name }}
                </div>
              </div>
            </div>
            <div class="space-y-8">
              <div v-for="(activity, i) in day.fields.activities" :key="i">
                <img
                  :src="activity.fields.activityImage.fields.file.url"
                  :alt="activity.fields.name"
                />
                <div class="mt-8 text-lg text-brown">
                  {{ activity.fields.description.content[0].content[0].value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Trip Navigation -->
      <div class="w-1/3 pl-16">
        <div class="space-y-2 sticky top-0 pt-16">
          <div v-for="(day, id) in tripDays" :key="id">
            <nuxt-link
              :to="{
                path: '/trips/' + tripIdea.fields.slug,
                hash: '#' + kebabCase(day.fields.location),
              }"
            >
              <div
                class="h-16 bg-brown-lighter bg-opacity-25 pl-2 hover:bg-brown"
              >
                <div
                  class="pl-2 w-full h-full flex items-center text-xl hover:bg-brown-dark hover:text-white hover:font-bold"
                >
                  {{ day.fields.dayNumbers }}: {{ day.fields.location }}
                </div>
              </div></nuxt-link
            >
          </div>
          <div
            class="h-16 bg-brown-lighter flex items-center italic text-xl bg-opacity-25 pl-4"
          >
            {{ tripPrice }}
          </div>
          <div>
            <a href="/contact">
              <Button text="여행 문의하기" classes="btn-big btn-dark-brown" />
            </a>
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
    let mapCenter = []
    if (thisMap !== undefined) {
      mapCenter = [
        parseFloat(thisMap.fields.mapCentreLongitude),
        parseFloat(thisMap.fields.mapCentreLatitude),
      ]
    }
    const thisMapPoints = thisTrip.fields.mapPoints
    const mapPoints = []
    if (thisMapPoints !== undefined) {
      thisMapPoints.forEach((point) => {
        mapPoints.push({
          name: point.fields.locationName,
          longitude: parseFloat(point.fields.longitude),
          latitude: parseFloat(point.fields.latitude),
        })
      })
    }
    return {
      tripIdea: thisTrip,
      tripName: thisTrip.fields.name,
      tripPics: thisTrip.fields.headerImages,
      tripPrice: thisTrip.fields.startingPrice,
      tripDescription: thisTrip.fields.description.content[0].content[0].value,
      tripMapCenter: mapCenter,
      tripMapPoints: mapPoints,
      tripHighlights: thisTrip.fields.scheduleHighlight,
      tripDays: thisTrip.fields.tripDays,
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
      stayCarouselOptions: {
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
  methods: {
    kebabCase(str) {
      return str
        .replace(/([A-Z])([A-Z])/g, '$1-$2')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    },
  },
}
</script>

<style lang="scss" scoped></style>
