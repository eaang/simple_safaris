<template>
  <div class="relative">
    <agile :options="carouselOptions" class="px-4">
      <div v-for="(partner, i) in partners" :key="i" class="slide">
        <img class="w-full object-scale-down" :src="partner" />
      </div>
      <template slot="prevButton"
        ><div class="absolute inset-y-0 left-0 flex items-center -ml-6">
          <img src="@/assets/images/icons/btn-prev.svg" />
        </div>
      </template>
      <template slot="nextButton">
        <div class="absolute inset-y-0 right-0 flex items-center -mr-6">
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
  data() {
    return {
      carouselOptions: {
        dots: false,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      },
      partners: [
        '/partners/partner-01.jpg',
        '/partners/partner-02.jpg',
        '/partners/partner-03.jpg',
        '/partners/partner-04.jpg',
        '/partners/partner-05.jpg',
        '/partners/partner-06.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
