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
        ><div class="absolute inset-y-0 left-0 -ml-10 pl-4 flex items-center">
          <img src="@/assets/images/icons/btn-prev.svg" />
        </div>
      </template>
      <template slot="nextButton">
        <div class="absolute inset-y-0 right-0 -mr-10 pr-4 flex items-center">
          <img src="@/assets/images/icons/btn-next.svg" />
        </div>
      </template>
    </agile>
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
}
</script>

<style lang="scss" scoped></style>
