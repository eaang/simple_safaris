<template>
  <div class="section px-8">
    <div class="container relative bg-brown mx-auto text-center pt-16 pb-32">
      <div class="title title-main text-white">Reviews</div>
      <div class="text-white text-lg lg:text-xl">
        <agile
          ref="reviewCarousel"
          :options="reviewCarouselOptions"
          class="pb-18"
          @after-change="reviewCounter = $refs.reviewCarousel.getCurrentSlide()"
        >
          <div v-for="(review, i) in reviews" :key="i" class="slide">
            <h3>
              <div
                class="flex w-full justify-center space-x-2 lg:space-x-4 my-8"
              >
                <div
                  v-for="n in review.rating"
                  :key="n"
                  class="rounded h-12 w-12 lg:h-16 lg:w-16 bg-teal-500 flex items-center justify-center"
                >
                  <ThumbsUp class="h-6 lg:h-10" />
                </div>
              </div>
              <div class="px-8 lg:px-48 my-8 text-base md:text-lg">
                {{ review.text }}
              </div>
              <div class="font-bold my-8">{{ review.name }}</div>
            </h3>
          </div>
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
            </div>
          </template>
        </agile>
        <!-- Custom dots -->
        <ul class="flex justify-around absolute inset-x-0 bottom-0 pb-16 h-0">
          <div class="flex">
            <li
              v-for="(review, i) in reviews"
              :key="i"
              class="border-2 border-white rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-white"
              :class="{ 'bg-white': i === reviewCounter }"
              @click="
                reviewCounter = i
                $refs.reviewCarousel.goTo(reviewCounter)
              "
            ></li>
          </div>
        </ul>
      </div>
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
    reviews: {
      type: Array,
      default: () => [
        {
          name: '이름이',
          rating: 2,
          text: `대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한
          중요정책을 국민투표에 붙일 수 있다. 이를 규제·조정할 수 있다. 누구든지
          체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지
          아니하고는 체포 또는 구속을 당하지 아니한다. 국회의원과 정부는
          법률안을 제출할 수 있다.`
        },
        {
          name: '뭐예요',
          rating: 3,
          text: `대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한
          중요정책을 국민투표에 붙일 수 있다. 이를 규제·조정할 수 있다. 누구든지
          체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지
          아니하고는 체포 또는 구속을 당하지 아니한다. 국회의원과 정부는
          법률안을 제출할 수 있다.`
        }
      ]
    }
  },
  data() {
    return {
      reviewCounter: 0,
      reviewCarouselOptions: {
        navButtons: false,
        infinite: true,
        autoplay: false,
        dots: false,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
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
