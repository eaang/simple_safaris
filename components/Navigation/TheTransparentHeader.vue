<template>
  <div class="flex items-center h-24 select-none">
    <div class="relative container px-4 mx-auto flex justify-between h-full">
      <div
        class="lg:hidden flex items-center absolute h-full cursor-pointer"
        @click="$nuxt.$emit('openSidenav')"
      >
        <Bars class="text-white h-6 sm:h-8" />
      </div>
      <div
        class="left-navbar flex justify-center lg:justify-start space-x-8 w-screen"
      >
        <div
          class="text-2xl md:text-4xl font-display text-white flex items-center"
        >
          <nuxt-link to="/">SIMPLE SAFARIS</nuxt-link>
        </div>
        <div class="hidden lg:flex items-stretch text-white text-lg space-x-8">
          <!-- About Link -->
          <nuxt-link
            class="nav-link nav-link-dropdown cursor-pointer"
            to="/about"
            >About</nuxt-link
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
          <nuxt-link to="/contact" class="flex items-center"
            ><div class="btn btn-white-outline">Contact us</div></nuxt-link
          >
        </div>
      </div>
      <div
        class="right-navbar hidden lg:flex w-64 xl:w-1/3 justify-end text-white text-lg"
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
              <a :href="instagram" class="h-6 w-6" target="_blank">
                <img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-instagram.svg"
                />
              </a>
              <a :href="blog" class="h-6 w-6" target="_blank"
                ><img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-blog.svg"
              /></a>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <div>
              <Phone class="h-6" />
            </div>
            <a class="tel-link tel-link-white" href="tel:07045170225"
              >070-4517-0225</a
            >
          </div>
        </div>
        <div class="space-x-2 hidden xl:flex">
          <div class="flex items-center space-x-2 w-40 justify-end">
            <div>
              <Phone class="h-6" />
            </div>
            <a class="tel-link tel-link-white" href="tel:07045170225"
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
            <a :href="instagram" class="h-6 w-6" target="_blank">
              <img
                class="object-scale-down"
                src="@/assets/images/icons/ic-instagram.svg"
              />
            </a>
            <a :href="blog" class="h-6 w-6" target="_blank"
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
      required: true
    },
    tripIdeas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dropdownTwoShow: false,
      dropdownThreeShow: false,
      instagram: 'https://www.instagram.com/simplesafaris/',
      kakao: 'https://pf.kakao.com/_xcxkGdT',
      blog: 'https://blog.naver.com/simplesafaris'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  &-link:hover {
    @apply underline;
  }
}
</style>
