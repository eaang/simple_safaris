<template>
  <div>
    <div class="relative h-screen w-full">
      <agile ref="carousel" :options="carouselOptions">
        <div
          v-for="image in images"
          :key="image.pathShort"
          class="slide block h-screen w-full z-0 bg-center bg-cover"
          :style="{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)), url(${image.pathLong})`,
          }" />

        <template slot="prevButton"
          ><div
            class="absolute inset-y-0 left-0 flex items-center justify-around px-12 text-4xl"
            @click="counter--"
          >
            <div
              class="rounded-full border-2 border-white p-8 text-white hover:bg-white hover:text-brown"
            >
              <div class="h-6 w-6 flex items-center justify-around">
                <fa-icon icon="arrow-left" />
              </div>
            </div>
          </div>
        </template>
        <template slot="nextButton"
          ><div
            class="absolute inset-y-0 right-0 flex items-center justify-around px-12 text-4xl"
            @click="counter++"
          >
            <div
              class="rounded-full border-2 border-white p-8 text-white hover:bg-white hover:text-brown"
            >
              <div class="h-6 w-6 flex items-center justify-around">
                <fa-icon icon="arrow-right" />
              </div>
            </div>
          </div> </template
      ></agile>
      <!-- Custom dots -->
      <ul class="flex justify-around absolute inset-x-0 bottom-0 py-12">
        <div class="flex">
          <li
            v-for="(image, i) in images"
            :key="i"
            class="border-2 border-white rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-white"
            :class="{ 'bg-white': i === trueCounter }"
            @click="
              counter = i
              $refs.carousel.goTo(trueCounter)
            "
          ></li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile,
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
        speed: 500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              navButtons: true,
            },
          },
        ],
      },
      images: [],
    }
  },
  computed: {
    trueCounter() {
      if (this.counter >= 0) {
        return this.counter % this.images.length
      } else {
        if (Math.abs(this.counter % this.images.length) === 0) {
          return 0
        }
        return this.images.length - Math.abs(this.counter % this.images.length)
      }
    },
  },
  created() {
    this.importImages(
      require.context('@/assets/images/landing-page/', true, /\.jpeg$/)
    )
  },
  mounted() {
    setInterval(() => {
      this.$refs.carousel.goToNext()
      this.counter++
    }, 4000)
  },
  methods: {
    importImages(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      )
    },
    isFilled(i) {
      if (i === this.counter) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
