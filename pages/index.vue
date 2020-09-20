<template>
  <div class="relative landing-page">
    <TheTransparentHeader
      :continents="continents"
      class="absolute w-screen z-50"
    />
    <TheSidenav class="absolute inset-x-0 top-0" />
    <TheFullheightHero class="z-40" />
  </div>
</template>

<script>
import TheTransparentHeader from '@/components/Navigation/TheTransparentHeader.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue'
import TheFullheightHero from '@/components/Hero/TheFullheightHero.vue'

export default {
  components: {
    TheTransparentHeader,
    TheSidenav,
    TheFullheightHero,
  },
  async asyncData({ store }) {
    await store.dispatch('continents/getContinents')
    return {
      continents: store.getters['continents/continents'],
    }
  },
}
</script>

<style></style>
