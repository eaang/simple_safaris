<template>
  <div>
    <div class="relative h-screen/75 lg:h-screen w-full">
      <client-only>
        <agile
          ref="carousel"
          :options="carouselOptions"
          @after-change="counter = $refs.carousel.getCurrentSlide()"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="image.position"
            class="slide block h-screen/75 lg:h-screen lg:bg-bottom w-full z-0 bg-cover"
            :style="{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)), url(${image.src})`
            }" />

          <!-- Custom buttons -->
          <template slot="prevButton"
            ><div
              class="absolute inset-y-0 left-0 flex items-center justify-around px-12 text-2xl"
            >
              <div
                class="rounded-full border-2 border-white p-6 text-white hover:bg-white hover:text-brown"
              >
                <ArrowLeft class="h-6 w-6" />
              </div>
            </div>
          </template>
          <template slot="nextButton"
            ><div
              class="absolute inset-y-0 right-0 flex items-center justify-around px-12 text-2xl"
            >
              <div
                class="rounded-full border-2 border-white p-6 text-white hover:bg-white hover:text-brown"
              >
                <ArrowRight class="h-6 w-6" />
              </div>
            </div> </template
        ></agile>
        <!-- Custom dots -->
        <ul class="flex justify-around absolute inset-x-0 bottom-0 py-12">
          <div class="flex">
            <li
              v-for="(image, i) in images"
              :key="i"
              class="border-2 border-white rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-white"
              :class="{ 'bg-white': i === counter }"
              @click="
                counter = i
                $refs.carousel.goTo(counter)
              "
            ></li>
          </div>
        </ul>
      </client-only>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import { isMobile } from 'mobile-device-detect'

export default {
  components: {
    agile: VueAgile
  },
  data() {
    return {
      counter: 0,
      carouselOptions: {
        navButtons: false,
        fade: true,
        infinite: true,
        autoplay: false,
        dots: false,
        speed: 4000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              navButtons: true
            }
          }
        ]
      },
      images: !isMobile
        ? [
            {
              src: '/landinghero/hotel-samaki-lodge-zanzibar.jpeg',
              position: 'bg-center'
            },
            {
              src: '/landinghero/kenya-safari.jpeg',
              position: 'bg-left-bottom'
            },
            {
              src: '/landinghero/luxury-safari-holiday.jpeg',
              position: 'bg-left-bottom'
            },
            {
              src: '/landinghero/national-parks-safari-africa.jpeg',
              position: 'bg-bottom'
            },
            {
              src: '/landinghero/ranthambore-national-park.jpeg',
              position: 'bg-center'
            },
            {
              src: '/landinghero/sri-lanka-safari-leopard.jpeg',
              position: 'bg-right'
            }
          ]
        : [
            {
              src: '/landinghero/mobile-beach.jpeg',
              position: 'bg-center'
            },
            {
              src: '/landinghero/mobile-giraffe.jpeg',
              position: 'bg-center'
            },
            {
              src: '/landinghero/mobile-pool.jpeg',
              position: 'bg-center'
            },
            {
              src: '/landinghero/mobile-safari.jpeg',
              position: 'bg-center'
            },
            {
              src: '/landinghero/mobile-4wd.jpeg',
              position: 'bg-center'
            },
            {
              src: '/landinghero/ranthambore-national-park.jpeg',
              position: 'bg-center'
            }
          ]
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$refs.carousel.goToNext()
      this.counter++
    }, 8000)
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>
