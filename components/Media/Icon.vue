<template>
  <div class="h-40 w-40 flex items-center justify-center">
    <img
      class="h-24"
      :src="'https://img.icons8.com/ios/100/000000/' + iconName + '.png'"
    />
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'national-park',
    },
  },
}
</script>

<style lang="scss" scoped></style>
