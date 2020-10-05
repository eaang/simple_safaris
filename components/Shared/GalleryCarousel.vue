<template>
  <div class="relative">
    <agile :options="carouselOptions" class="mx-8 px-2 md:px-12">
      <div v-for="(group, i) in gallery" :key="i" class="slide">
        <div
          class="grid grid-rows-2 grid-cols-1 gap-y-2 px-1 md:gap-y-4 md:px-2"
        >
          <a :href="group[0].link" target="blank">
            <img :src="group[0].src" />
          </a>

          <a v-if="group[1]" :href="group[1].link" target="blank">
            <img :src="group[1].src" />
          </a>
          <img v-else src="/transparent-square.png" />
        </div>
      </div>
      <template slot="prevButton"
        ><div class="absolute inset-y-0 left-0 -ml-6 flex items-center">
          <img src="@/assets/images/icons/btn-prev.svg" />
        </div>
      </template>
      <template slot="nextButton">
        <div class="absolute inset-y-0 right-0 -mr-6 flex items-center">
          <img src="@/assets/images/icons/btn-next.svg" />
        </div>
      </template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile
  },
  props: {
    imageLinks: {
      type: Array,
      default: () => []
    }
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
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5
            }
          }
        ]
      }
    }
  },
  computed: {
    gallery() {
      return this.imageLinks.reduce(function (result, value, index, array) {
        if (index % 2 === 0) result.push(array.slice(index, index + 2))
        return result
      }, [])
    }
  }
}
</script>

<style lang="scss" scoped>
.square {
  @apply h-56 w-56;
}
</style>
