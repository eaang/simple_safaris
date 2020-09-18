<template>
  <div class="flex items-center h-24">
    <div class="container mx-auto flex justify-between">
      <div class="left-navbar flex space-x-8">
        <div class="title text-4xl font-display text-white">SIMPLE SAFARIS</div>
        <div class="flex items-center text-white text-lg space-x-8">
          <nuxt-link to="/destinations">Destinations</nuxt-link>
          <nuxt-link to="/trips">Trip Ideas</nuxt-link>
          <nuxt-link to="/about">About Us</nuxt-link>
          <nuxt-link to="/contact">Contact Us</nuxt-link>
        </div>
      </div>
      <div class="right-navbar flex items-center text-white text-lg space-x-4">
        <div class="space-x-2">
          <fa-icon icon="phone-alt" /><span>070-4517-0225</span>
        </div>
        <a href="#" target="_blank"
          ><img class="h-6" src="@/assets/images/icons/ic-youtube.svg"
        /></a>
        <a href="#" target="_blank"
          ><img class="h-5" src="@/assets/images/icons/ic-instagram.svg"
        /></a>
        <a href="#" target="_blank"
          ><img class="h-5" src="@/assets/images/icons/ic-blog.svg"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
