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
.btn {
  @apply border-2 px-4 py-2 rounded-md;
}
.btn-big {
  @apply text-xl px-8 py-4;
}
.btn-white-outline {
  @apply border-white;
}
.btn-white-outline:hover {
  @apply text-brown bg-white;
}
.btn-dark-brown {
  @apply bg-brown-dark text-white;
}
.btn-dark-brown:hover {
  @apply bg-brown;
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
