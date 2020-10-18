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
      <vgs :images="photos" :index="index" @close="index = null" />
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
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      index: null
    }
  },
  computed: {
    photos() {
      const album = [this.src]
      this.images.forEach((image) => {
        album.push(image.fields.file.url)
      })
      return album
    }
  }
}
</script>
