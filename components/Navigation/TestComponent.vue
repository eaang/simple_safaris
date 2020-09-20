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
  props: {
    continents: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
