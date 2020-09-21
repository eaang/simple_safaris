<template>
  <div class="relative">
    <agile ref="carousel" :options="carouselOptions" class="mx-8">
      <BlogPostCard
        v-for="(post, i) in blogposts"
        :key="i"
        :url="post.url"
        class="slide px-2"
        :title="post.title"
        :topic="post.topic"
        :content="post.content"
        :link="post.link"
      />
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
          v-for="(post, i) in blogposts"
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
    blogposts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      counter: 0,
      carouselOptions: {
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
        return this.counter % this.blogposts.length
      } else {
        if (Math.abs(this.counter % this.blogposts.length) === 0) {
          return 0
        }
        return (
          this.blogposts.length - Math.abs(this.counter % this.blogposts.length)
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
