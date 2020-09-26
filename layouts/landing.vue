<template>
  <div>
    <Nuxt />
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
.fixed-sidebar {
  @apply fixed top-0 left-0;
}

// Animations go here
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 100%;
  opacity: 1;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  max-height: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.05s ease;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
