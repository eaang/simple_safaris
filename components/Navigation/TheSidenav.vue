<template>
  <div class="sidenav flex h-screen">
    <div class="w-full bg-black flex flex-col justify-between pt-4 shadow-lg">
      <div class="h-12 flex justify-end">
        <img
          class="nav-button nav-button-big cursor-pointer"
          src="@/assets/images/icons/btn-close.svg"
          @click="$nuxt.$emit('closeSidenav')"
        />
      </div>
      <div class="flex flex-col h-full pl-4 overflow-auto">
        <a href="/"
          ><div class="nav-item"><div>Home</div></div></a
        >
        <div class="nav-item z-20" @click="aboutClick">
          <div>About</div>
          <img
            v-if="!aboutDropdown"
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-add.svg"
          />
          <img
            v-else
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-minus.svg"
          />
        </div>
        <transition name="slide" mode="in-out">
          <div v-if="aboutDropdown" class="nav-dropdown z-0">
            <a href="/about"><div class="nav-dropdown-item">About us</div> </a>
            <a href="/about/privacy"
              ><div class="nav-dropdown-item">개인정보처리방침</div></a
            >
            <a href="/about/terms-and-conditions"
              ><div class="nav-dropdown-item">해외여행약관</div>
            </a>
          </div>
        </transition>
        <div class="nav-item" @click="destinationClick">
          <div>Destinations</div>
          <img
            v-if="!destinationDropdown"
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-add.svg"
          />
          <img
            v-else
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-minus.svg"
          />
        </div>
        <transition name="slide" mode="in-out">
          <div v-if="destinationDropdown" class="nav-dropdown">
            <div
              v-for="continent in continents"
              :key="continent.fields.name"
              class="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 grid-flow-row"
            >
              <a
                v-for="destination in continent.fields.destinations"
                :key="destination.fields.name"
                :href="'/destinations/' + destination.fields.slug"
              >
                <div class="nav-dropdown-item">
                  {{ destination.fields.koreanName }}
                </div></a
              >
            </div>
          </div>
        </transition>
        <div class="nav-item" @click="tripsClick">
          <div>Trip Ideas</div>
          <img
            v-if="!tripsDropdown"
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-add.svg"
          />
          <img
            v-else
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-minus.svg"
          />
        </div>
        <transition name="slide" mode="in-out">
          <div v-if="tripsDropdown" class="nav-dropdown">
            <a
              v-for="tripIdea in tripIdeas"
              :key="tripIdea.fields.name"
              :href="'/trips/' + tripIdea.fields.slug"
            >
              <div class="nav-dropdown-item">
                {{ tripIdea.fields.name }}
              </div>
            </a>
          </div>
        </transition>
        <a href="/"
          ><div class="nav-item"><div>Blog</div></div></a
        >
        <a href="/contact"
          ><div class="nav-item"><div>Contact us</div></div></a
        >
      </div>
      <div class="flex items-end text-brown">
        <div class="mb-8 pt-8 ml-4 font-bold space-x-2 space-y-8 text-lg">
          <ul class="flex space-x-4">
            <a href="/"
              ><li class="">
                <img
                  class="h-8"
                  src="@/assets/images/icons/ic-instagram-ft.svg"
                /></li
            ></a>
            <a href="/"
              ><li class="">
                <img
                  class="h-8"
                  src="@/assets/images/icons/ic-blog-ft.svg"
                /></li
            ></a>
            <a href="/"
              ><li class="">
                <img class="h-8" src="@/assets/images/icons/ic-kakao.svg" /></li
            ></a>
          </ul>
          <fa-icon icon="phone-alt" /><a
            class="tel-link tel-link-brown"
            href="tel:07045170225"
            >070-4517-0225</a
          >
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
      aboutDropdown: false,
      destinationDropdown: false,
      tripsDropdown: false,
    }
  },
  methods: {
    aboutClick() {
      this.aboutDropdown = !this.aboutDropdown
      this.destinationDropdown = false
      this.tripsDropdown = false
    },
    destinationClick() {
      this.destinationDropdown = !this.destinationDropdown
      this.aboutDropdown = false
      this.tripsDropdown = false
    },
    tripsClick() {
      this.tripsDropdown = !this.tripsDropdown
      this.aboutDropdown = false
      this.destinationDropdown = false
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &-item {
    min-height: 4rem;
    @apply h-16 border-b border-brown border-opacity-25 flex items-center justify-between cursor-pointer text-brown font-bold text-2xl;
  }
  &-button {
    @apply object-scale-down mr-4;
    &-big {
      @apply h-12 w-12;
    }
    &-small {
      @apply h-8 w-8;
    }
  }
  &-dropdown {
    @apply bg-brown bg-opacity-25;
    &-item {
      @apply text-white m-4 text-lg;
    }
  }
}
</style>
