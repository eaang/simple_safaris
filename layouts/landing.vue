<template>
  <div class="relative">
    <TheTransparentHeader class="absolute inset-x-0 top-0" />
    <TheSidenav />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheTransparentHeader from '@/components/Navigation/TheTransparentHeader.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue'
import TheFooter from '@/components/Navigation/TheFooter.vue'

export default {
  components: {
    TheTransparentHeader,
    TheSidenav,
    TheFooter,
  },
}
</script>

<style></style>
