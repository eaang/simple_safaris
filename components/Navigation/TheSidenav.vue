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
        <!-- Home -->
        <a href="/"
          ><div class="nav-item"><div>Home</div></div></a
        >

        <!-- About -->
        <a href="/about"
          ><div class="nav-item"><div>About</div></div></a
        >

        <!-- Destinations -->
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
        <transition name="slide" mode="out-in">
          <div v-if="destinationDropdown">
            <!-- Double title if Asia is included -->
            <!-- <div class="grid grid-cols-2 h-12">
              <div
                class="flex-center border-r border-brown border-opacity-25"
                :class="{
                  'text-white': destinationContinent === 'africa',
                  'text-brown': destinationContinent === 'asia'
                }"
                @click="destinationContinent = 'africa'"
              >
                아프리카
              </div>
              <div
                class="flex-center"
                :class="{
                  'text-white': destinationContinent === 'asia',
                  'text-brown': destinationContinent === 'africa'
                }"
                @click="destinationContinent = 'asia'"
              >
                아시아
              </div>
            </div> -->
            <!-- Single grid for just Africa -->
            <div class="grid grid-cols-1 h-12">
              <div
                class="flex-center border-r border-brown border-opacity-25 text-white"
              >
                아프리카
              </div>
            </div>
            <div v-for="continent in continents" :key="continent.fields.name">
              <div
                v-if="
                  destinationContinent === continent.fields.name.toLowerCase()
                "
                class="bg-brown bg-opacity-25 flex flex-wrap"
              >
                <a
                  v-for="destination in continent.fields.destinations"
                  :key="destination.fields.slug"
                  :href="'/destinations/' + destination.fields.slug"
                  class="text-white h-12 flex items-center px-8 min-w-50"
                >
                  {{ destination.fields.koreanName }}
                </a>
              </div>
            </div>
          </div>
        </transition>

        <!-- Trip ideas -->
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
        <transition name="slide" mode="out-in">
          <div v-if="tripsDropdown">
            <div class="grid grid-cols-2 h-12">
              <div
                class="flex-center border-r border-brown border-opacity-25"
                :class="{
                  'text-white': tripsContinent === 'africa',
                  'text-brown': tripsContinent === 'asia'
                }"
                @click="tripsContinent = 'africa'"
              >
                아프리카
              </div>
              <div
                class="flex-center"
                :class="{
                  'text-white': tripsContinent === 'asia',
                  'text-brown': tripsContinent === 'africa'
                }"
                @click="tripsContinent = 'asia'"
              >
                아시아
              </div>
            </div>
            <div
              v-for="tripIdea in tripIdeas"
              :key="tripIdea.fields.id"
              class="bg-brown bg-opacity-25 flex flex-wrap"
            >
              <a
                v-if="
                  tripIdea.fields.continent.fields.name.toLowerCase() ===
                  tripsContinent
                "
                :href="'/trips/' + tripIdea.fields.slug"
                class="text-white h-12 flex items-center px-8"
              >
                {{ tripIdea.fields.name }}
              </a>
            </div>
          </div>
        </transition>

        <!-- Contact us -->
        <a href="/contact"
          ><div class="nav-item"><div>Contact us</div></div></a
        >
      </div>
      <div class="flex items-end text-brown">
        <div class="mb-8 pt-8 ml-4 font-bold space-y-4 text-lg">
          <ul class="flex space-x-4">
            <a :href="instagram"
              ><li class="">
                <img
                  class="h-8"
                  src="@/assets/images/icons/ic-instagram-ft.svg"
                /></li
            ></a>
            <a :href="blog"
              ><li class="">
                <img
                  class="h-8"
                  src="@/assets/images/icons/ic-blog-ft.svg"
                /></li
            ></a>
            <a :href="kakao"
              ><li class="">
                <img class="h-8" src="@/assets/images/icons/ic-kakao.svg" /></li
            ></a>
          </ul>

          <div class="flex w-full space-x-2">
            <Phone class="h-8" />
            <a class="tel-link tel-link-brown" href="tel:07045170225"
              >070-4517-0225</a
            >
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
      destinationDropdown: false,
      tripsDropdown: false,
      destinationContinent: 'africa',
      tripsContinent: 'africa',
      instagram: 'https://www.instagram.com/simplesafaris/',
      kakao: 'https://pf.kakao.com/_xcxkGdT',
      blog: 'https://blog.naver.com/simplesafaris'
    }
  },
  methods: {
    destinationClick() {
      this.destinationDropdown = !this.destinationDropdown
      this.tripsDropdown = false
    },
    tripsClick() {
      this.tripsDropdown = !this.tripsDropdown
      this.destinationDropdown = false
    }
  }
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
  }
}
</style>
