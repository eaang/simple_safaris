<template>
  <div class="grid grid-cols-3">
    <div class="grid grid-rows-2">
      <div class="border-b-2 border-brown"></div>
      <div class="border-l border-brown"></div>
    </div>
    <div class="text-center font-bold text-3xl">{{ text }}</div>
    <div class="grid grid-rows-2">
      <div class="border-b-2 border-brown"></div>
      <div class="border-r border-brown"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'title',
    },
  },
}
</script>

<style lang="scss" scoped></style>
