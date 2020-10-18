<template>
  <div class="relative w-full pb-8">
    <agile
      ref="carousel"
      :options="carouselOptions"
      class="w-full md:px-12"
      @after-change="counter = $refs.carousel.getCurrentSlide()"
    >
      <TripIdeaCard
        v-for="idea in tripIdeas"
        :key="idea.id"
        class="slide px-2"
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
      <template slot="prevButton"
        ><div class="absolute inset-y-0 left-0 flex items-center">
          <img src="@/assets/images/icons/btn-prev.svg" />
        </div>
      </template>
      <template slot="nextButton">
        <div class="absolute inset-y-0 right-0 flex items-center">
          <img src="@/assets/images/icons/btn-next.svg" />
        </div>
      </template>
    </agile>
    <!-- Custom dots -->
    <ul class="flex justify-around absolute inset-x-0 bottom-0 w-full">
      <div class="flex">
        <li
          v-for="(card, i) in tripIdeas"
          :key="i"
          class="border-2 border-brown rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-brown"
          :class="{ 'bg-brown': i === counter }"
          @click="
            counter = i
            $refs.carousel.goTo(counter)
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
    agile: VueAgile
  },
  props: {
    tripIdeas: {
      type: Array,
      default: () => [
        {
          id: 1,
          fields: {
            slug: 'idea-1',
            headerImages: [
              {
                fields: {
                  file: {
                    url: 'https://picsum.photos/1280/720?random=1',
                    title: 'A picture'
                  }
                }
              }
            ],
            name: 'Idea Name',
            description: {
              content: [
                {
                  content: [
                    {
                      value:
                        'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                  ]
                }
              ]
            },
            startingPrice: '$300만원 부터 시작'
          }
        },
        {
          id: 2,
          fields: {
            slug: 'idea-2',
            headerImages: [
              {
                fields: {
                  file: {
                    url: 'https://picsum.photos/1280/720?random=2',
                    title: 'Another picture'
                  }
                }
              }
            ],
            name: 'Another Name',
            description: {
              content: [
                {
                  content: [
                    {
                      value:
                        'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                  ]
                }
              ]
            },
            startingPrice: '$500만원 부터 시작'
          }
        }
      ]
    }
  },
  data() {
    return {
      counter: 0,
      carouselOptions: {
        navButtons: false,
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
              navButtons: true
            }
          }
        ]
      }
    }
  }
}
</script>
