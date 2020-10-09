<template>
  <div class="w-full">
    <agile
      v-if="hotels.length > 1"
      :options="stayCarouselOptions"
      class="w-full z-0 pointer-events-none"
    >
      <div v-for="(hotel, index) in hotels" :key="index" class="slide">
        <div class="w-full py-16 flex flex-center">
          <HotelCard
            :src="hotel.fields.hotelImage.fields.file.url"
            :alt="hotel.fields.hotelImage.fields.title"
            :name="hotel.fields.name"
            :price="hotel.fields.price"
            class="w-4/5 lg:w-2/5 pointer-events-auto"
          />
        </div>
      </div>
      <template slot="prevButton">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <div
            class="w-16 h-24 border-t border-r border-b border-brown flex flex-center"
          >
            <AngleLeft class="text-brown h-16 pointer-events-auto" />
          </div>
        </div>
      </template>
      <template slot="nextButton">
        <div class="absolute inset-y-0 right-0 flex items-center">
          <div
            class="w-16 h-24 border-t border-l border-b border-brown flex flex-center"
          >
            <AngleRight class="text-brown h-16 pointer-events-auto" />
          </div>
        </div>
      </template>
    </agile>

    <div
      v-for="(hotel, index) in hotels"
      v-else
      :key="index"
      class="w-full py-16 flex flex-center"
    >
      <HotelCard
        :src="hotel.fields.hotelImage.fields.file.url"
        :alt="hotel.fields.hotelImage.fields.title"
        :name="hotel.fields.name"
        :price="hotel.fields.price"
        class="w-4/5 lg:w-2/5"
      />
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
  components: {
    agile: VueAgile
  },
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
            name: 'Hotel Name',
            price: '2'
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
            name: 'Name of Hotel',
            price: '3'
          }
        }
      ]
    }
  },
  data() {
    return {
      stayCarouselOptions: {
        navButtons: false,
        fade: false,
        infinite: true,
        autoplay: false,
        dots: false,
        speed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              navButtons: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
