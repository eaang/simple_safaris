<template>
  <div>
    <div class="relative h-screen/75 lg:h-screen w-full">
      <agile
        ref="carousel"
        :options="carouselOptions"
        @after-change="counter = $refs.carousel.getCurrentSlide()"
      >
        <div
          v-for="image in images"
          :key="image.pathShort"
          class="slide block h-screen/75 lg:h-screen w-full z-0 bg-center bg-cover"
          :style="{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)), url(${image.pathLong})`,
          }" />

        <template slot="prevButton"
          ><div
            class="absolute inset-y-0 left-0 flex items-center justify-around px-12 text-2xl"
          >
            <div
              class="rounded-full border-2 border-white p-6 text-white hover:bg-white hover:text-brown"
            >
              <div class="h-6 w-6 flex items-center justify-around">
                <ArrowLeft />
              </div>
            </div>
          </div>
        </template>
        <template slot="nextButton"
          ><div
            class="absolute inset-y-0 right-0 flex items-center justify-around px-12 text-2xl"
          >
            <div
              class="rounded-full border-2 border-white p-6 text-white hover:bg-white hover:text-brown"
            >
              <div class="h-6 w-6 flex items-center justify-around">
                <ArrowRight />
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
        speed: 3000,
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
  created() {
    this.importImages(
      require.context('@/assets/images/landing-page/', true, /\.jpeg$/)
    )
  },
  mounted() {
    setInterval(() => {
      this.$refs.carousel.goToNext()
      this.counter++
    }, 6000)
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
