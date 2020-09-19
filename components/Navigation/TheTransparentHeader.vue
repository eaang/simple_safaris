<template>
  <div class="flex items-center h-24">
    <div class="container mx-auto flex justify-between">
      <div class="left-navbar flex space-x-8">
        <div class="title text-4xl font-display text-white">SIMPLE SAFARIS</div>
        <div class="flex items-center text-white text-lg space-x-8">
          <nuxt-link class="nav-link" to="/destinations"
            >Destinations</nuxt-link
          >
          <nuxt-link class="nav-link" to="/trips">Trip Ideas</nuxt-link>
          <nuxt-link class="nav-link" to="/about">About Us</nuxt-link>
          <nuxt-link class="nav-link" to="/contact">Contact Us</nuxt-link>
        </div>
      </div>
      <div
        class="right-navbar flex flex-col justify-around text-white text-lg space-x-4"
      >
        <div class="flex justify-end space-x-2">
          <a href="#" target="_blank"
            ><img class="h-5" src="@/assets/images/icons/ic-instagram.svg"
          /></a>
          <a href="#" target="_blank"
            ><img class="h-5" src="@/assets/images/icons/ic-blog.svg"
          /></a>
        </div>
        <div class="flex items-center space-x-2">
          <fa-icon icon="phone-alt" /><span>070-4517-0225</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-link:hover {
  @apply text-brown-lighter;
}
</style>
