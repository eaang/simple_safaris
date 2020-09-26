<template>
  <div class="flex items-center h-24 select-none">
    <div class="relative container px-4 mx-auto flex justify-between h-full">
      <div
        class="lg:hidden flex items-center text-4xl text-white absolute h-full"
      >
        <fa-icon
          class="cursor-pointer text-2xl sm:text-4xl"
          icon="bars"
          @click="$nuxt.$emit('openSidenav')"
        />
      </div>
      <div
        class="left-navbar flex justify-center lg:justify-start space-x-8 w-screen"
      >
        <div class="text-4xl font-display text-white flex items-center">
          <a href="/">SIMPLE SAFARIS</a>
        </div>
        <div class="hidden lg:flex items-stretch text-white text-lg space-x-8">
          <!-- About Link -->
          <a class="nav-link nav-link-dropdown cursor-pointer" href="/about"
            >About</a
          >

          <!-- Destinations Dropdown -->
          <div
            class="relative"
            @mouseover="dropdownTwoShow = true"
            @mouseleave="dropdownTwoShow = false"
          >
            <div class="nav-link nav-link-dropdown">Destinations</div>
            <transition name="fade" mode="out-in">
              <DropdownDestinations
                v-if="dropdownTwoShow"
                :continents="continents"
              />
            </transition>
          </div>

          <!-- Trip Ideas Dropdown -->
          <div
            class="relative"
            @mouseover="dropdownThreeShow = true"
            @mouseleave="dropdownThreeShow = false"
          >
            <div class="nav-link nav-link-dropdown">Trip ideas</div>

            <transition name="fade" mode="out-in">
              <DropdownTrips v-if="dropdownThreeShow" :trip-ideas="tripIdeas" />
            </transition>
          </div>

          <!-- Contact Us Button -->
          <a href="/contact" class="flex items-center"
            ><div class="btn btn-white-outline">Contact us</div></a
          >
        </div>
      </div>
      <div
        class="right-navbar hidden lg:flex w-1/4 xl:w-1/3 justify-end text-white text-lg"
      >
        <div
          class="space-x-2 hidden lg:flex lg:flex-col justify-center xl:hidden"
        >
          <div>
            <div class="flex items-center space-x-2 justify-end">
              <!-- Temporarily hiding youtube -->
              <!-- <a href="#" class="h-6 w-6" target="_blank">
                <img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-youtube.svg"
                />
              </a> -->
              <a href="#" class="h-6 w-6" target="_blank">
                <img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-instagram.svg"
                />
              </a>
              <a href="#" class="h-6 w-6" target="_blank"
                ><img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-blog.svg"
              /></a>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <fa-icon icon="phone-alt" /><a
              class="tel-link tel-link-white"
              href="tel:07045170225"
              >070-4517-0225</a
            >
          </div>
        </div>
        <div class="space-x-2 hidden xl:flex">
          <div class="flex items-center space-x-2 w-40 justify-end">
            <fa-icon icon="phone-alt" /><a
              class="tel-link tel-link-white"
              href="tel:07045170225"
              >070-4517-0225</a
            >
          </div>
          <div class="flex items-center space-x-2 justify-end">
            <!-- Temporarily hiding youtube -->
            <!-- <a href="#" class="h-6 w-6" target="_blank">
              <img
                class="object-scale-down"
                src="@/assets/images/icons/ic-youtube.svg"
              />
            </a> -->
            <a href="#" class="h-6 w-6" target="_blank">
              <img
                class="object-scale-down"
                src="@/assets/images/icons/ic-instagram.svg"
              />
            </a>
            <a href="#" class="h-6 w-6" target="_blank"
              ><img
                class="object-scale-down"
                src="@/assets/images/icons/ic-blog.svg"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    continents: {
      type: Array,
      required: true,
    },
    tripIdeas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dropdownTwoShow: false,
      dropdownThreeShow: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &-link:hover {
    @apply underline;
  }
}
</style>
