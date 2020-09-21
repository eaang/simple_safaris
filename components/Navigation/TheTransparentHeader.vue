<template>
  <div class="flex items-center h-24">
    <div class="relative container px-4 mx-auto flex justify-between h-full">
      <div
        class="lg:hidden flex items-center text-4xl text-white absolute h-full"
      >
        <fa-icon icon="bars" />
      </div>
      <div
        class="left-navbar flex justify-center lg:justify-start space-x-8 w-screen"
      >
        <div class="text-4xl font-display text-white flex items-center">
          SIMPLE SAFARIS
        </div>
        <div class="hidden lg:flex items-center text-white text-lg space-x-8">
          <!-- About Dropdown -->
          <div
            class="relative"
            @mouseover="dropdownOneShow = true"
            @mouseleave="dropdownOneShow = false"
          >
            <div class="nav-link nav-link-dropdown">About</div>
            <div
              v-if="dropdownOneShow"
              class="absolute nav-dropdown nav-dropdown-dark"
            >
              <ul class="nav-dropdown-list cursor-pointer">
                <a href="/about"
                  ><li class="nav-dropdown-item nav-dropdown-item-dark">
                    About Us
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
          </div>

          <!-- Destinations Dropdown -->
          <div
            class="relative"
            @mouseover="dropdownTwoShow = true"
            @mouseleave="dropdownTwoShow = false"
          >
            <div class="nav-link nav-link-dropdown">Destinations</div>
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
                        :id="continent.fields.name.toLowerCase() + '-icon-down'"
                        icon="caret-down"
                        class="hidden"
                      />
                    </div>
                  </li>
                  <div :id="continent.fields.name.toLowerCase() + '-dropdown'">
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
          </div>

          <!-- Trip Ideas Dropdown -->
          <div
            class="relative"
            @mouseover="dropdownThreeShow = true"
            @mouseleave="dropdownThreeShow = false"
          >
            <div class="nav-link nav-link-dropdown">Trip Ideas</div>

            <div
              v-if="dropdownThreeShow"
              class="absolute nav-dropdown nav-dropdown-dark"
            >
              <ul class="nav-dropdown-list cursor-pointer">
                <a
                  v-for="tripIdea in tripIdeas"
                  :key="tripIdea.fields.name"
                  :href="'/trips/' + tripIdea.fields.slug"
                >
                  <li class="nav-dropdown-item nav-dropdown-item-dark">
                    {{ tripIdea.fields.name }}
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <!-- Contact Us Button -->
          <nuxt-link class="btn btn-white-outline" to="/contact"
            >Contact Us</nuxt-link
          >
        </div>
      </div>
      <div
        class="right-navbar hidden lg:flex flex-col justify-center text-white text-lg"
      >
        <div class="flex justify-end space-x-2">
          <a
            href="#"
            target="_blank"
            @mouseover="socialOne = true"
            @mouseleave="socialOne = false"
          >
            <img
              v-if="socialOne === false"
              class="h-5"
              src="@/assets/images/icons/ic-instagram.svg"
            />
            <img
              v-else
              class="h-5"
              src="@/assets/images/icons/ic-instagram-ft.svg"
            />
          </a>
          <a
            href="#"
            target="_blank"
            @mouseover="socialTwo = true"
            @mouseleave="socialTwo = false"
            ><img
              v-if="socialTwo === false"
              class="h-5"
              src="@/assets/images/icons/ic-blog.svg" /><img
              v-else
              class="h-5"
              src="@/assets/images/icons/ic-blog-ft.svg"
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
      socialOne: false,
      socialTwo: false,
    }
  },
  methods: {
    toggleRegions(country) {
      document
        .querySelector('#' + country.toLowerCase() + '-dropdown')
        .classList.toggle('hidden')
      document
        .querySelector('#' + country.toLowerCase() + '-icon-up')
        .classList.toggle('hidden')
      document
        .querySelector('#' + country.toLowerCase() + '-icon-down')
        .classList.toggle('hidden')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &-link {
    &-dropdown {
      @apply py-6;
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
