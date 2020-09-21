<template>
  <div class="relative">
    <agile :options="carouselOptions">
      <div v-for="(partner, i) in partners" :key="i" class="slide">
        <img :src="partner" />
      </div>
      <template slot="prevButton"
        ><div class="absolute inset-y-0 left-0 flex items-center">
          <fa-icon class="text-gray-lighter text-4xl" icon="angle-left" />
        </div>
      </template>
      <template slot="nextButton">
        <div class="absolute inset-y-0 right-0 flex items-center">
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
  data() {
    return {
      carouselOptions: { slidesToShow: 6, dots: false },
      partners: [
        '/partners/partner-01.jpg',
        '/partners/partner-02.jpg',
        '/partners/partner-03.jpg',
        '/partners/partner-04.jpg',
        '/partners/partner-05.jpg',
        '/partners/partner-06.jpg',
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
