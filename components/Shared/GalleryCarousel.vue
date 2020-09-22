<template>
  <div class="relative">
    <agile :options="carouselOptions">
      <div v-for="(group, i) in gallery" :key="i" class="slide px-2 space-y-4">
        <img :src="group[0]" />
        <img v-if="group[1]" :src="group[1]" />
        <img v-else src="/transparent-square.png" />
      </div>
      <template slot="prevButton"
        ><div class="absolute inset-y-0 left-0 flex items-center -ml-4">
          <fa-icon class="text-gray-lighter text-4xl" icon="angle-left" />
        </div>
      </template>
      <template slot="nextButton">
        <div class="absolute inset-y-0 right-0 flex items-center -mr-4">
          <fa-icon class="text-gray-lighter text-4xl" icon="angle-right" />
        </div>
      </template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile,
  },
  props: {
    imageLinks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      carouselOptions: {
        dots: false,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
            },
          },
        ],
      },
    }
  },
  computed: {
    gallery() {
      return this.imageLinks.reduce(function (result, value, index, array) {
        if (index % 2 === 0) result.push(array.slice(index, index + 2))
        return result
      }, [])
    },
  },
}
</script>

<style lang="scss" scoped></style>
