<template>
  <div class="container">
    <div v-for="(continent, i) in continents" :key="i">
      {{ continent.fields.name }}
      <ul>
        <li
          v-for="(destination, ind) in continent.fields.destinations"
          :key="ind"
        >
          {{ destination.fields.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('continents/getContinents', params.slug)
  },
  computed: {
    continents() {
      return this.$store.getters['continents/continents']
    },
  },
}
</script>

<style lang="scss" scoped></style>
