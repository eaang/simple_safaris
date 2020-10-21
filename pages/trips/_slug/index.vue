<template>
  <div class="trip-idea-page">
    <!-- Bubble to scroll up -->
    <TopBubble />

    <!-- Hero Section -->

    <StandardHero :pictures="tripPics" :title="tripName" />

    <!-- Map & Description -->
    <div class="section container mx-auto space-y-8">
      <MapWithNumbers
        v-if="tripIdea.fields.map !== undefined"
        class="w-full h-screen/50 lg:h-screen/75"
        :center="tripMapCenter"
        :places="tripMapPoints"
        :zoom="6"
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
              class="object-scale-down max-h-90"
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
      <div class="trip-days-info w-full xl:w-2/3 space-y-24">
        <div
          v-for="(day, id) in tripDays"
          :id="kebabCase(day.fields.location)"
          :key="id"
          class="space-y-16"
        >
          <!-- Title section -->
          <div class="sticky top-0 z-10 xl:static pt-16">
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
          <div class="px-8 xl:px-0">
            <img
              class="object-scale-down"
              :src="day.fields.locationImage.fields.file.url"
              :alt="day.fields.locationImage.fields.file.fileName"
            />
            <div class="space-y-4 pt-4">
              <div class="text-2xl md:text-3xl text-gray-dark">
                {{ day.fields.location }}
              </div>
              <div class="text-base md:text-lg text-brown">
                {{ day.fields.description.content[0].content[0].value }}
              </div>
            </div>
          </div>
          <!-- Transportation -->
          <div class="px-8 xl:px-0">
            <BorderTitle text="Transportation" />
            <div class="border-l border-r border-b border-brown py-8 space-y-4">
              <div
                v-for="(step, index) in day.fields.transportationSteps"
                :key="index"
                class="flex flex-col justify-center px-8 items-start lg:items-center"
              >
                <div class="flex items-center justify-start space-x-2">
                  <div v-if="step.fields.modeOfTransportation === 'Car'">
                    <img src="/transport/ic-car.svg" />
                  </div>
                  <div v-if="step.fields.modeOfTransportation === 'Plane'">
                    <img src="/transport/ic-plane.svg" />
                  </div>
                  <div class="text-base md:text-xl lg:text-xl">
                    {{ step.fields.direction }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Hotel -->
          <div class="px-8 xl:px-0">
            <BorderTitle text="Stay" />
            <div
              class="relative border-l border-r border-b border-brown flex flex-center"
            >
              <HotelCarousel :hotels="day.fields.hotels" />
            </div>
          </div>
          <!-- Activity -->
          <div v-if="day.fields.activities" class="px-8 xl:px-0">
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
                <div class="mt-8 text-base md:text-lg text-brown">
                  {{ activity.fields.description.content[0].content[0].value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Trip Navigation -->
      <div class="hidden xl:block xl:w-1/3 pl-16">
        <div class="space-y-2 sticky top-0 pt-16">
          <div v-for="(day, id) in tripDays" :key="id">
            <nuxt-link
              :to="{
                path: '/trips/' + tripIdea.fields.slug,
                hash: '#' + kebabCase(day.fields.location)
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
export default {
  async asyncData({ store, params }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
    const thisTrip = store.getters['tripIdea/tripIdea']
    const thisMap = thisTrip.fields.map
    let mapCenter = []
    if (thisMap !== undefined) {
      mapCenter = [
        parseFloat(thisMap.fields.mapCentreLongitude),
        parseFloat(thisMap.fields.mapCentreLatitude)
      ]
    }
    const thisMapPoints = thisTrip.fields.mapPoints
    const mapPoints = []
    if (thisMapPoints !== undefined) {
      thisMapPoints.forEach((point) => {
        mapPoints.push({
          name: point.fields.locationName,
          longitude: parseFloat(point.fields.longitude),
          latitude: parseFloat(point.fields.latitude)
        })
      })
    }
    const pictures = thisTrip.fields.headerImages
    const tripPics = []
    pictures.forEach((picture) => {
      tripPics.push({ url: picture.fields.file.url })
    })
    return {
      firstPic: tripPics[0].url,
      tripIdea: thisTrip,
      tripName: thisTrip.fields.name,
      tripPics: tripPics,
      tripPrice: thisTrip.fields.startingPrice,
      tripDescription: thisTrip.fields.description.content[0].content[0].value,
      tripMapCenter: mapCenter,
      tripMapPoints: mapPoints,
      tripHighlights: thisTrip.fields.scheduleHighlight,
      tripDays: thisTrip.fields.tripDays
    }
  },
  data() {
    return {
      counter: 0,
      scrolled: false,
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
              navButtons: true
            }
          }
        ]
      }
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('tripIdea/getTripIdeaBySlug', params.slug)
  },
  head() {
    const title = 'Simple Safaris - ' + this.tripName
    const description = this.$config.metaDescription

    return {
      title: '- ' + this.tripName,
      description: description,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.firstPic
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.firstPic
        }
      ]
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters['tripIdea/loadingStatus']
    }
  },
  mounted() {},
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
html {
  scroll-behavior: smooth;
}
</style>
