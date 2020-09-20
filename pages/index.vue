<template>
  <div class="relative landing-page">
    <client-only>
      <TheTransparentHeader
        :continents="continents"
        :trip-ideas="tripIdeas"
        class="absolute w-screen z-50"
      />
      <TheSidenav class="absolute inset-x-0 top-0" />
      <TheFullheightHero class="z-40" />
    </client-only>
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
  async asyncData({ store, params }) {
    await store.dispatch('continents/getContinents')
    await store.dispatch('tripIdeas/getTripIdeas', params.slug)
    return {
      continents: store.getters['continents/continents'],
      tripIdeas: store.getters['tripIdeas/tripIdeas'],
    }
  },
}
</script>

<style></style>
