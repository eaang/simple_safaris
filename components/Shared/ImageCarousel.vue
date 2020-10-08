<template>
  <div class="relative w-full">
    <agile
      v-if="images.length > 1"
      ref="carousel"
      :options="carouselOptions"
      class="w-full z-0"
      @after-change="counter = $refs.carousel.getCurrentSlide()"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="slide h-full w-full"
      >
        <img
          :src="image.fields.file.url"
          :alt="image.fields.title"
          class="object-cover h-full w-full"
        />
      </div>
      <!-- Custom buttons -->
      <template slot="prevButton"
        ><div
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
      v-if="images.length > 1"
      class="flex justify-around absolute inset-x-0 bottom-0 py-12"
    >
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

    <div v-for="(image, index) in images" v-else :key="index" class="w-full">
      <img
        :src="image.fields.file.url"
        :alt="image.fields.title"
        class="object-cover"
      />
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
    images: {
      type: Array,
      default: () => [
        {
          fields: {
            file: { url: 'https://picsum.photos/1280/720?random=1' },
            title: 'Placeholder Pic 1'
          }
        },
        {
          fields: {
            file: { url: 'https://picsum.photos/1280/720?random=2' },
            title: 'Placeholder Pic 2'
          }
        },
        {
          fields: {
            file: { url: 'https://picsum.photos/1280/720?random=3' },
            title: 'Placeholder Pic 3'
          }
        }
      ]
    }
  },
  data() {
    return {
      counter: 0,
      carouselOptions: {
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
  }
}
</script>

<style lang="scss" scoped></style>
