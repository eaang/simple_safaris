<template>
  <div class="flex justify-between">
    <div class="grid grid-rows-2 flex-grow">
      <div class="border-b-2 border-brown"></div>
      <div class="border-l border-brown"></div>
    </div>
    <div
      class="text-center font-bold text-xl md:text-2xl xl:text-3xl px-4 md:px-8"
    >
      {{ text }}
    </div>
    <div class="grid grid-rows-2 flex-grow">
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
