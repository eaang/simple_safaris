<template>
  <div class="btn" :class="classes">
    {{ text }}
    <AngleRight v-if="arrow" :class="arrowSize" />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Button'
    },
    arrow: {
      type: Boolean,
      default: false
    },
    arrowSize: {
      type: String,
      default: 'h-5'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @apply border-2 px-4 py-2 text-base rounded-md flex items-center justify-center;
}
.btn-small {
  @apply text-sm px-2 py-1;
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
</style>
