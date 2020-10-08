<template>
  <!-- Hero Section -->
  <div class="relative h-screen/75 w-full">
    <div class="absolute inset-x-0 top-0 z-0">
      <agile
        ref="carousel"
        :options="carouselOptions"
        @after-change="counter = $refs.carousel.getCurrentSlide()"
      >
        <div
          v-for="(image, id) in pictures"
          :key="id"
          class="slide h-screen/75 w-full pt-16"
        >
          <div
            class="h-full w-full flex flex-center bg-cover bg-center"
            :style="{
              'background-image': 'url(' + image.url + ')'
            }"
          >
            <div class="title-header text-center w-full">
              {{ title }}
            </div>
          </div>
        </div>

        <!-- Custom buttons -->
        <template slot="prevButton"
          ><div
            v-if="pictures.length > 1"
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
            v-if="pictures.length > 1"
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
        v-if="pictures.length > 1"
        class="flex justify-around absolute inset-x-0 bottom-0 py-12"
      >
        <div class="flex">
          <li
            v-for="(image, i) in pictures"
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
    agile: VueAgile
  },
  props: {
    pictures: {
      type: Array,
      default: () => [
        {
          url: 'https://picsum.photos/1920/1080?random=1'
        },
        {
          url: 'https://picsum.photos/1920/1080?random=2'
        },
        {
          url: 'https://picsum.photos/1920/1080?random=3'
        }
      ]
    },
    title: {
      type: String,
      default: 'Title Here'
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
              navButtons: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.$refs.carousel.goToNext()
      this.counter++
    }, 8000)
  }
}
</script>

<style lang="scss" scoped></style>
