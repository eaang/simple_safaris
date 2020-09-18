<template>
  <div class="landing-page">
    <FullheightHero />
    <div class="container mx-auto">
      <div class="font-display">THIS IS A TITLE</div>
      <div class="font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <ul>
        <li class="text-brown-lighter">Test one</li>
        <li class="text-brown">Test two</li>
        <li class="text-brown-dark">Test three</li>
        <li class="text-gray">Test four</li>
        <li class="text-gray-dark">Test five</li>
      </ul>
      <div><Icon :icon-name="'dog-footprint'" /></div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Media/Icon.vue'
import FullheightHero from '@/components/Hero/FullheightHero.vue'
export default {
  layout: 'landing',
  components: {
    Icon,
    FullheightHero,
  },
}
</script>

<style></style>
