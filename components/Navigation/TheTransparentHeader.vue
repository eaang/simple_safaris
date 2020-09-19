<template>
  <div class="flex items-center h-24">
    <div class="container mx-auto flex justify-between">
      <div class="left-navbar flex space-x-8">
        <div class="title text-4xl font-display text-white cursor-default">
          SIMPLE SAFARIS
        </div>
        <div class="flex items-center text-white text-lg space-x-8">
          <div
            class="relative"
            @mouseover="dropdownOneShow = true"
            @click="dropdownOneShow = !dropdownOneShow"
            @mouseleave="dropdownOneShow = false"
          >
            <div class="nav-link nav-link-dropdown">About</div>
            <div
              v-if="dropdownOneShow"
              class="absolute nav-dropdown nav-dropdown-dark"
            >
              <ul class="nav-dropdown-list">
                <nuxt-link
                  tag="li"
                  to="/about"
                  class="nav-dropdown-item nav-dropdown-item-dark"
                >
                  About Us
                </nuxt-link>
                <nuxt-link
                  tag="li"
                  to="/about/privacy"
                  class="nav-dropdown-item nav-dropdown-item-dark"
                >
                  개인정보처리방침
                </nuxt-link>
                <nuxt-link
                  tag="li"
                  to="/about/terms-and-conditions"
                  class="nav-dropdown-item nav-dropdown-item-dark"
                >
                  해외여행약관
                </nuxt-link>
              </ul>
            </div>
          </div>
          <nuxt-link class="nav-link" to="/destinations"
            >Destinations</nuxt-link
          >
          <nuxt-link class="nav-link" to="/trips">Trip Ideas</nuxt-link>
          <nuxt-link class="nav-button" to="/contact">Contact Us</nuxt-link>
        </div>
      </div>
      <div
        class="right-navbar flex flex-col justify-around text-white text-lg space-x-4"
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
  data() {
    return {
      dropdownOneShow: false,
      socialOne: false,
      socialTwo: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &-link {
    @apply cursor-default;
    &-dropdown {
      @apply py-3;
    }
  }
  &-link:hover {
    @apply text-brown;
  }
  &-button {
    @apply border-2 border-white px-4 py-2 rounded-md;
  }
  &-button:hover {
    @apply bg-white text-brown;
  }
  &-dropdown {
    @apply py-4;
    &-dark {
      @apply bg-black;
    }
    &-list {
      @apply w-48 cursor-pointer;
    }
    &-item {
      @apply py-2 px-4;
      &-dark {
        @apply text-brown;
      }
      &-dark:hover {
        @apply bg-brown text-white;
      }
    }
    &-item:hover {
      @apply font-bold;
    }
  }
}
</style>
