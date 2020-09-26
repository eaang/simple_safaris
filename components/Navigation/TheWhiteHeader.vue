<template>
  <div class="h-24 select-none">
    <div class="h-16 bg-white shadow-lg">
      <div class="relative container px-4 mx-auto flex justify-between h-full">
        <div
          class="lg:hidden flex items-center text-4xl text-brown absolute h-full"
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
          <div class="text-4xl font-display text-brown flex items-center">
            <a href="/">SIMPLE SAFARIS</a>
          </div>
          <div
            class="hidden lg:flex items-stretch text-black text-lg space-x-8"
          >
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
                <DropdownTrips
                  v-if="dropdownThreeShow"
                  :trip-ideas="tripIdeas"
                />
              </transition>
            </div>

            <!-- Contact Us Button -->
            <a href="/contact" class="nav-link">Contact us</a>
          </div>
        </div>
        <div
          class="right-navbar hidden w-1/4 xl:w-1/3 lg:flex flex-grow justify-center text-brown-dark text-lg"
        >
          <div
            class="space-x-2 hidden lg:flex lg:flex-col justify-center xl:hidden"
          >
            <div>
              <div class="flex items-center space-x-2 justify-end">
                <!-- Temporarily hiding the youtube icon -->
                <!-- <a href="#" class="h-6 w-6" target="_blank">
                  <img
                    class="object-scale-down"
                    src="@/assets/images/icons/ic-youtube-ft.svg"
                  />
                </a> -->
                <a href="#" class="h-6 w-6" target="_blank">
                  <img
                    class="object-scale-down"
                    src="@/assets/images/icons/ic-instagram-ft.svg"
                  />
                </a>
                <a href="#" class="h-6 w-6" target="_blank"
                  ><img
                    class="object-scale-down"
                    src="@/assets/images/icons/ic-blog-ft.svg"
                /></a>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <fa-icon icon="phone-alt" /><a
                class="tel-link tel-link-brown"
                href="tel:07045170225"
                >070-4517-0225</a
              >
            </div>
          </div>
          <div class="space-x-2 hidden xl:flex">
            <div class="flex items-center space-x-2">
              <fa-icon icon="phone-alt" /><a
                class="tel-link tel-link-brown"
                href="tel:07045170225"
                >070-4517-0225</a
              >
            </div>
            <div class="flex items-center space-x-2 justify-end">
              <!-- Temporarily hiding the youtube icon -->
              <!-- <a href="#" class="h-6 w-6" target="_blank">
                <img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-youtube-ft.svg"
                />
              </a> -->
              <a href="#" class="h-6 w-6" target="_blank">
                <img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-instagram-ft.svg"
                />
              </a>
              <a href="#" class="h-6 w-6" target="_blank"
                ><img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-blog-ft.svg"
              /></a>
            </div>
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
      dropdownOneShow: false,
      dropdownTwoShow: false,
      dropdownThreeShow: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &-link {
    @apply font-bold;
  }
  &-link:hover {
    @apply text-brown-dark;
  }
}
</style>
