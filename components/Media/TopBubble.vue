<template>
  <div @click="backToTop">
    <div
      class="rounded-full h-12 w-12 bg-brown hover:bg-brown-lighter cursor-pointer flex-center m-4 shadow fixed bottom-0 right-0 z-50 mb-20"
      :class="{ invisible: !scrolled }"
    >
      <ArrowTopDouble class="text-white h-6" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > window.innerHeight
    },
    backToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
