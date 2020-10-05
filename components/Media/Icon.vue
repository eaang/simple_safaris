<template>
  <div class="h-40 w-40 flex items-center justify-center">
    <img class="h-24" :src="iconPath" />
  </div>
</template>

<script>
export default {
  props: {
    iconPath: {
      type: String,
      default: require('@/assets/images/landing-page/icon-01.svg')
    }
  }
}
</script>

<style lang="scss" scoped></style>
