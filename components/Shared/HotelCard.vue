<template>
  <div>
    <div class="shadow-2xl">
      <img class="object-cover w-full h-56" :src="src" :alt="alt" />
      <div class="h-56 flex flex-col flex-center px-4 space-y-8">
        <div class="text-gray-dark text-center text-2xl">
          {{ name }}
        </div>
        <div class="text-brown text-center text-2xl">
          {{ '$'.repeat(price) }}
        </div>
        <div
          class="text-brown text-sm cursor-pointer flex items-end"
          @click="index = 0"
        >
          <div>more</div>
          <ArrowRightSmall class="ml-2 h-5" />
        </div>
      </div>
    </div>
    <client-only>
      <vgs :images="images" :index="index" @close="index = null" />
    </client-only>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  components: {
    vgs: VueGallerySlideshow
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'Hotel Name'
    },
    price: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      images: [
        'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
