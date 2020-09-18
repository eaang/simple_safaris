<template>
  <div class="h-screen">
    <agile>
      <div v-for="image in images" :key="image.pathShort" class="slide">
        <img class="object-cover h-screen w-full" :src="image.pathLong" />
      </div>
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
      images: [],
    }
  },
  created() {
    this.importImages(
      require.context('@/assets/images/landing-page/', true, /\.jpeg$/)
    )
  },
  methods: {
    importImages(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
