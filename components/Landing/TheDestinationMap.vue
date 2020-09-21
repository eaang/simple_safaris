<template>
  <div class="grid grid-cols-2">
    <div class="text-left">
      <div class="flex">
        <!-- Continent Picker -->
        <ul class="destination-list text-2xl w-56">
          <li
            class="destination-list-item"
            :class="{
              'destination-list-choice': chosenDestination === 'africa',
            }"
            @click="chosenDestination = 'africa'"
          >
            아프리카 (Africa)
            <fa-icon v-if="chosenDestination === 'africa'" icon="angle-right" />
          </li>
          <li
            class="destination-list-item"
            :class="{
              'destination-list-choice': chosenDestination === 'asia',
            }"
            @click="chosenDestination = 'asia'"
          >
            아시아 (Asia)
            <fa-icon v-if="chosenDestination === 'asia'" icon="angle-right" />
          </li>
        </ul>
        <!-- Region Picker -->
        <ul
          v-if="chosenDestination === 'africa'"
          class="destination-list ml-2 cursor-pointer"
        >
          <a href="/destinations/kenya"
            ><li
              class="destination-list-item"
              @mouseleave="region = null"
              @mouseover="region = 'kenya'"
            >
              케냐 (Kenya)
            </li></a
          >
          <a href="tanzania"
            ><li
              class="destination-list-item"
              @mouseleave="region = null"
              @mouseover="region = 'tanzania'"
            >
              탄자니아 (Tanzania)
            </li></a
          >
          <a href="/destinations/botswana"
            ><li
              class="destination-list-item"
              @mouseleave="region = null"
              @mouseover="region = 'botswana'"
            >
              보츠와나 (Botswana)
            </li></a
          >
          <a href="/destinations/south-africa"
            ><li
              class="destination-list-item"
              @mouseleave="region = null"
              @mouseover="region = 'south-africa'"
            >
              남아프리카 공화국 (South Africa)
            </li></a
          >
          <a href="/destinations/namibia"
            ><li
              class="destination-list-item"
              @mouseleave="region = null"
              @mouseover="region = 'namibia'"
            >
              나미비아 (Namibia)
            </li></a
          >
        </ul>
        <ul
          v-if="chosenDestination === 'asia'"
          class="destination-list ml-2 cursor-pointer"
        >
          <a href="/destinations/sri-lanka"
            ><li
              class="destination-list-item"
              @mouseleave="region = null"
              @mouseover="region = 'sri-lanka'"
            >
              스리랑카 (Sri Lanka)
            </li></a
          >
          <a href="/destinations/rajasthan"
            ><li
              class="destination-list-item"
              @mouseleave="region = null"
              @mouseover="region = 'rajasthan'"
            >
              라자스탄 (Rajasthan)
            </li></a
          >
        </ul>
      </div>
    </div>
    <!-- Continent Map -->
    <div class="relative">
      <img class="absolute" :src="countryImage" />
      <img src="@/assets/images/landing-map/map-africa.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: null,
      chosenDestination: 'africa',
    }
  },
  computed: {
    countryImage() {
      if (this.region === null) {
        return ''
      } else {
        return require('@/assets/images/landing-map/map-africa-' +
          this.region +
          '.png')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.destination-list {
  &-item {
    @apply text-brown text-2xl mb-4;
  }
  &-item:hover {
    @apply text-black font-bold;
  }
  &-choice {
    @apply text-black text-2xl mb-4 font-bold;
  }
}
</style>
