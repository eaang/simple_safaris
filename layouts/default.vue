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
}
.section {
  @apply my-24 mx-auto;
}
.title {
  @apply text-black font-bold;
  &-main {
    @apply text-5xl my-8;
  }
}
.content {
  @apply text-gray text-xl my-4;
}
</style>
