<template>
  <div class="w-full">
    <span
      v-if="tripIdeas.length > 1"
      v-touch:swipe.left="clickRight"
      v-touch:swipe.right="clickLeft"
    >
      <div class="relative overflow-hidden -mt-8 pb-48">
        <div v-for="(idea, index) in tripIdeas" :key="index">
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
              <TripIdeaCardFlat
                :key="idea.id"
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
                class="w-4/5 lg:w-2/5"
              />
            </div>
          </transition>
        </div>
        <TripIdeaCardFlat class="w-4/5 lg:w-2/5 invisible" />

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
              v-for="(idea, i) in tripIdeas"
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
      v-for="(idea, index) in tripIdeas"
      v-else
      :key="index"
      class="w-full h-full py-16 flex flex-center"
    >
      <TripIdeaCardFlat
        :key="idea.id"
        class="w-4/5 lg:w-2/5"
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
  </div>
</template>

<script>
export default {
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
      lastClicked: null
    }
  },
  computed: {
    trueCounter() {
      if (this.counter < 0) {
        if ((this.counter * -1) % this.tripIdeas.length === 0) {
          return 0
        } else {
          return (
            this.tripIdeas.length -
            ((this.tripIdeas * -1) % this.tripIdeas.length)
          )
        }
      } else if (this.counter < this.tripIdeas.length) {
        return this.counter
      } else {
        return this.counter % this.tripIdeas.length
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
