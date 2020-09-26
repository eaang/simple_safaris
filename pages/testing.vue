<template>
  <div class="container mx-auto">
    <div v-for="(continent, index) in continents" :key="index" class="mt-24">
      {{ continent }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      continents: this.$store.getters['continents/continents'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
