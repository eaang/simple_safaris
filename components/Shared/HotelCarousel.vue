<template>
  <div class="w-full">
    <span
      v-if="hotels.length > 1"
      v-touch:swipe.left="clickRight"
      v-touch:swipe.right="clickLeft"
    >
      <div class="relative overflow-hidden -mt-8 pb-48">
        <div v-for="(hotel, index) in hotels" :key="index">
          <transition
            :enter-active-class="enterActive"
            :leave-active-class="leaveActive"
            mode="in-out"
          >
            <div
              v-show="index === trueCounter"
              class="slide w-full h-full py-16 flex flex-center absolute"
              style="animation-duration: 0.3s"
            >
              <HotelCard
                :src="hotel.fields.hotelImage.fields.file.url"
                :alt="hotel.fields.hotelImage.fields.title"
                :name="hotel.fields.name"
                :price="hotel.fields.price"
                :images="hotel.fields.otherImages"
                class="w-4/5 lg:w-2/5"
              />
            </div>
          </transition>
        </div>
        <HotelCard class="invisible" />

        <!-- Navigation Buttons -->
        <div
          class="invisible md:visible absolute inset-y-0 left-0 flex items-center cursor-pointer"
        >
          <div
            class="w-16 h-24 border-t border-r border-b border-brown flex flex-center"
            @click="clickLeft"
          >
            <AngleLeft class="text-brown h-16 pointer-events-auto" />
          </div>
        </div>
        <div
          class="invisible md:visible absolute inset-y-0 right-0 flex items-center cursor-pointer"
        >
          <div
            class="w-16 h-24 border-t border-l border-b border-brown flex flex-center"
            @click="clickRight"
          >
            <AngleRight class="text-brown h-16 pointer-events-auto" />
          </div>
        </div>
        <!-- Custom dots -->
        <ul class="flex justify-around absolute inset-x-0 bottom-0 mb-12">
          <div class="flex">
            <li
              v-for="(hotel, i) in hotels"
              :key="i"
              class="border-2 border-brown rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-brown"
              :class="{ 'bg-brown': i === trueCounter }"
              @click="counter = i"
            ></li>
          </div>
        </ul>
      </div>
    </span>
    <div
      v-for="(hotel, index) in hotels"
      v-else
      :key="index"
      class="w-full h-full py-16 flex flex-center"
    >
      <HotelCard
        :src="hotel.fields.hotelImage.fields.file.url"
        :alt="hotel.fields.hotelImage.fields.title"
        :name="hotel.fields.name"
        :price="hotel.fields.price"
        :images="hotel.fields.otherImages"
        :hotel="hotel"
        class="w-4/5 lg:w-2/5"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotels: {
      type: Array,
      default: () => [
        {
          fields: {
            hotelImage: {
              fields: {
                file: {
                  url: 'https://picsum.photos/600/400?random=1'
                },
                title: 'Placeholder Photo 1'
              }
            },
            name: 'Hotel 1',
            price: 2
          }
        },
        {
          fields: {
            hotelImage: {
              fields: {
                file: {
                  url: 'https://picsum.photos/600/400?random=2'
                },
                title: 'Placeholder Photo 2'
              }
            },
            name: 'Hotel 2',
            price: 3
          }
        },
        {
          fields: {
            hotelImage: {
              fields: {
                file: {
                  url: 'https://picsum.photos/600/400?random=3'
                },
                title: 'Placeholder Photo 3'
              }
            },
            name: 'Hotel 3',
            price: 3
          }
        },
        {
          fields: {
            hotelImage: {
              fields: {
                file: {
                  url: 'https://picsum.photos/600/400?random=4'
                },
                title: 'Placeholder Photo 4'
              }
            },
            name: 'Hotel 4',
            price: 3
          }
        }
      ]
    }
  },
  data() {
    return {
      counter: 0,
      lastClicked: null
    }
  },
  computed: {
    trueCounter() {
      if (this.counter < 0) {
        if ((this.counter * -1) % this.hotels.length === 0) {
          return 0
        } else {
          return this.hotels.length - ((this.counter * -1) % this.hotels.length)
        }
      } else if (this.counter < this.hotels.length) {
        return this.counter
      } else {
        return this.counter % this.hotels.length
      }
    },
    enterActive() {
      if (this.lastClicked === 'right') {
        return 'animated slideInRight'
      } else return 'animated slideInLeft'
    },
    leaveActive() {
      if (this.lastClicked === 'right') {
        return 'animated slideOutLeft'
      } else return 'animated slideOutRight'
    }
  },
  methods: {
    clickLeft() {
      this.counter--
      this.lastClicked = 'left'
    },
    clickRight() {
      this.counter++
      this.lastClicked = 'right'
    }
  }
}
</script>
