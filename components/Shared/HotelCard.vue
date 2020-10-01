<template>
  <div class="shadow-2xl">
    <img class="object-cover w-full h-56" :src="src" :alt="alt" />
    <div class="h-48 flex flex-col flex-center px-4 space-y-8">
      <div class="text-gray-dark text-center text-2xl">
        {{ name }}
      </div>
      <div class="text-brown text-center text-2xl">
        {{ '$'.repeat(parseInt(price)) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'Hotel Name',
    },
    price: {
      type: String,
      default: '1',
    },
  },
}
</script>

<style lang="scss" scoped></style>
