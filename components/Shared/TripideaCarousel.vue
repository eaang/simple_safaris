<template>
  <div class="relative mb-12">
    <agile ref="carousel" :options="tripCarouselOptions" class="mx-8">
      <div v-for="idea in tripIdeas" :key="idea.id" class="slide px-2">
        <TripIdeaCard
          :slug="idea.fields.slug"
          :url="idea.fields.headerImages[0].fields.file.url"
          :alt="idea.fields.headerImages[0].fields.file.title"
          :title="idea.fields.name"
          :content="
            idea.fields.description.content[0].content[0].value.match(
              /^([^.]+.)/
            )[0]
          "
          :price="idea.fields.startingPrice"
        />
      </div>
      <template slot="prevButton"
        ><div
          class="absolute inset-y-0 left-0 -ml-8 pl-4 flex items-center"
          @click="counter--"
        >
          <fa-icon class="text-gray-lighter text-4xl" icon="angle-left" />
        </div>
      </template>
      <template slot="nextButton">
        <div
          class="absolute inset-y-0 right-0 -mr-8 pr-4 flex items-center"
          @click="counter++"
        >
          <fa-icon class="text-gray-lighter text-4xl" icon="angle-right" />
        </div>
      </template>
    </agile>
    <!-- Custom dots -->
    <ul class="flex justify-around absolute inset-x-0 bottom-0 -mb-16">
      <div class="flex">
        <li
          v-for="(card, i) in tripIdeas"
          :key="i"
          class="border-2 border-white rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-white"
          :class="{ 'bg-white': i === trueCounter }"
          @click="
            counter = i
            $refs.carousel.goTo(trueCounter)
          "
        ></li>
      </div>
    </ul>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile,
  },
  props: {
    tripIdeas: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      counter: 0,
      tripCarouselOptions: {
        navButtons: true,
        infinite: true,
        autoplay: false,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      },
    }
  },
  computed: {
    trueCounter() {
      if (this.counter >= 0) {
        return this.counter % this.tripIdeas.length
      } else {
        if (Math.abs(this.counter % this.tripIdeas.length) === 0) {
          return 0
        }
        return (
          this.tripIdeas.length - Math.abs(this.counter % this.tripIdeas.length)
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
