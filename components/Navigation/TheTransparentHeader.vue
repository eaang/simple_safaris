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
          <!-- About Dropdown -->
          <div
            class="relative"
            @mouseover="dropdownOneShow = true"
            @mouseleave="dropdownOneShow = false"
          >
            <div class="nav-link nav-link-dropdown">About</div>
            <transition name="fade" mode="out-in">
              <div
                v-if="dropdownOneShow"
                class="absolute nav-dropdown nav-dropdown-dark"
              >
                <ul class="nav-dropdown-list cursor-pointer">
                  <a href="/about"
                    ><li class="nav-dropdown-item nav-dropdown-item-dark">
                      About us
                    </li>
                  </a>

                  <a href="/about/privacy"
                    ><li class="nav-dropdown-item nav-dropdown-item-dark">
                      개인정보처리방침
                    </li></a
                  >

                  <a href="/about/terms-and-conditions"
                    ><li class="nav-dropdown-item nav-dropdown-item-dark">
                      해외여행약관
                    </li>
                  </a>
                </ul>
              </div>
            </transition>
          </div>

          <!-- Destinations Dropdown -->
          <div
            class="relative"
            @mouseover="dropdownTwoShow = true"
            @mouseleave="dropdownTwoShow = false"
          >
            <div class="nav-link nav-link-dropdown">Destinations</div>
            <transition name="fade" mode="out-in">
              <div
                v-if="dropdownTwoShow"
                class="absolute nav-dropdown nav-dropdown-dark"
              >
                <ul class="nav-dropdown-list cursor-pointer">
                  <div
                    v-for="continent in continents"
                    :key="continent.fields.name"
                  >
                    <!-- This is the code for the continent dropdown - hidden for now, to be enabled if Asia ever returns lmao -->
                    <li
                      class="nav-dropdown-item items-center justify-between cursor-pointer hidden"
                      @click="toggleRegions(continent.fields.name)"
                    >
                      <div class="">
                        {{ continent.fields.name }}
                      </div>
                      <div class="invisible">
                        <fa-icon
                          :id="continent.fields.name.toLowerCase() + '-icon-up'"
                          icon="caret-up"
                        />
                        <fa-icon
                          :id="
                            continent.fields.name.toLowerCase() + '-icon-down'
                          "
                          icon="caret-down"
                          class="hidden"
                        />
                      </div>
                    </li>
                    <div
                      :id="continent.fields.name.toLowerCase() + '-dropdown'"
                    >
                      <a
                        v-for="destination in continent.fields.destinations"
                        :key="destination.fields.name"
                        :href="'/destinations/' + destination.fields.slug"
                      >
                        <li class="nav-dropdown-item nav-dropdown-item-dark">
                          {{ destination.fields.name }}
                        </li></a
                      >
                    </div>
                  </div>
                </ul>
              </div>
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
              <div
                v-if="dropdownThreeShow"
                class="absolute nav-dropdown nav-dropdown-dark nav-dropdown-list cursor-pointer"
              >
                <a
                  v-for="tripIdea in tripIdeas"
                  :key="tripIdea.fields.name"
                  :href="'/trips/' + tripIdea.fields.slug"
                >
                  <div class="nav-dropdown-item nav-dropdown-item-dark">
                    {{ tripIdea.fields.name }}
                  </div>
                </a>
              </div>
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
              <a href="#" class="h-6 w-6" target="_blank">
                <img
                  class="object-scale-down"
                  src="@/assets/images/icons/ic-youtube.svg"
                />
              </a>
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
            <a href="#" class="h-6 w-6" target="_blank">
              <img
                class="object-scale-down"
                src="@/assets/images/icons/ic-youtube.svg"
              />
            </a>
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
      dropdownOneShow: false,
      dropdownTwoShow: false,
      dropdownThreeShow: false,
    }
  },
  // This was if there was more than one continent
  // methods: {
  //   toggleRegions(country) {
  //     document
  //       .querySelector('#' + country.toLowerCase() + '-dropdown')
  //       .classList.toggle('hidden')
  //     document
  //       .querySelector('#' + country.toLowerCase() + '-icon-up')
  //       .classList.toggle('hidden')
  //     document
  //       .querySelector('#' + country.toLowerCase() + '-icon-down')
  //       .classList.toggle('hidden')
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.nav {
  &-link {
    &-dropdown {
      @apply h-full flex items-center;
    }
  }
  &-link:hover {
    @apply underline;
  }
  &-dropdown {
    @apply py-4;
    &-dark {
      @apply bg-black;
    }
    &-list {
      @apply w-48;
    }
    &-item {
      @apply py-2 px-4;
      &-dark {
        @apply text-brown;
      }
      &-dark:hover {
        @apply bg-brown text-white font-bold;
      }
    }
  }
}
</style>
