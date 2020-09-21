<template>
  <div>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style lang="scss">
html {
  line-break: strict;
  word-break: keep-all;
  cursor: default;
}
.section {
  @apply my-8 py-16 mx-auto;
}
.title {
  @apply font-bold;
  &-main {
    @apply text-5xl;
  }
}
.content {
  @apply text-gray text-lg;
}
</style>
