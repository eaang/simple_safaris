<template>
  <div
    class="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:justify-center px-4 pt-32"
  >
    <div class="text-left w-full md:w-3/4 lg:w-3/5">
      <div class="flex flex-col lg:flex-row items-start w-full">
        <!-- Continent Picker  -->
        <ul
          class="destination-list text-2xl w-full lg:w-1/4 xl:w-1/3 flex flex-row-reverse justify-between lg:flex-col-reverse"
        >
          <div
            v-for="continent in continents"
            :key="continent.name"
            class="w-1/2 lg:w-full"
          >
            <li
              class="destination-list-item space-x-4"
              :class="{
                'destination-list-choice':
                  chosenDestination === continent.name.toLowerCase()
              }"
              @click="chosenDestination = continent.name.toLowerCase()"
            >
              <div>
                {{ continent.koreanName }}
                <br class="hidden lg:block xl:hidden" />
                ({{ continent.name }})
              </div>
              <AngleRight
                v-if="chosenDestination === continent.name.toLowerCase()"
                class="text-black h-6 hidden lg:block"
              />
              <AngleDown
                v-if="chosenDestination === continent.name.toLowerCase()"
                class="text-black h-4 block lg:hidden"
              />
            </li>
          </div>
        </ul>
        <!-- Region Picker -->
        <div class="w-full lg:w-3/4 xl:w-2/3">
          <ul v-for="continent in continents" :key="continent.name">
            <div v-if="chosenDestination === continent.name.toLowerCase()">
              <li
                v-for="(destination, i) in continent.destinations"
                :key="i"
                class="destination-list-item"
                @mouseleave="region = null"
                @mouseover="region = kebabCase(destination.name)"
              >
                <a
                  :href="'/destinations/' + kebabCase(destination.name)"
                  class="flex items-center space-x-4"
                >
                  <div>
                    {{ i + 1 }}.
                    {{ destination.koreanName }}
                    ({{ destination.name }})
                  </div>
                  <AngleRight
                    v-if="region === kebabCase(destination.name)"
                    class="text-black h-6 hidden lg:block"
                  />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- Continent Map -->
    <div class="relative my-8 md:my-0 flex justify-center">
      <img class="absolute object-scale-down" :src="countryImage" />
      <img src="@/assets/images/landing-map/map-africa.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      continents: {
        Asia: {
          name: 'Asia',
          koreanName: '아시아',
          destinations: [{ name: 'India', koreanName: '인도' }]
        },
        Africa: {
          name: 'Africa',
          koreanName: '아프리카',
          destinations: [
            { name: 'Kenya', koreanName: '케냐' },
            { name: 'Tanzania', koreanName: '탄자니아' },
            { name: 'Botswana', koreanName: '보츠와나' },
            { name: 'Namibia', koreanName: '나미비아' },
            { name: 'South Africa', koreanName: '남아프리카' }
          ]
        }
      },
      region: null,
      chosenDestination: 'africa'
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
    }
  },
  methods: {
    kebabCase(str) {
      return str
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/([A-Z])([A-Z])/g, '$1-$2')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.destination-list {
  &-item {
    @apply text-brown text-base py-1;
    @screen md {
      @apply text-lg py-2;
    }
    @screen xl {
      @apply text-xl;
    }
  }
  &-item:hover {
    @apply text-black font-bold;
  }
  &-choice {
    @apply text-black font-bold flex items-center w-full;
  }
}
</style>
