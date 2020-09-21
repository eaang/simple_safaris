<template>
  <div class="section">
    <div class="container relative bg-brown mx-auto text-center py-16">
      <div class="title title-main text-white leading-10">Reviews</div>
      <div class="text-white text-lg">
        <agile
          ref="reviewCarousel"
          :options="reviewCarouselOptions"
          class="pb-24"
        >
          <div v-for="(review, i) in reviews" :key="i" class="slide">
            <h3>
              <div class="flex w-full justify-center space-x-4 my-8">
                <div
                  v-for="n in review.rating"
                  :key="n"
                  class="rounded-lg h-16 w-16 bg-teal-500 flex items-center justify-center text-3xl"
                >
                  <fa-icon icon="thumbs-up" />
                </div>
              </div>
              <div class="px-48 my-8">{{ review.text }}</div>
              <div class="font-bold my-8">{{ review.name }}</div>
            </h3>
          </div>
          <template slot="prevButton"
            ><div
              class="absolute inset-y-0 left-0 flex items-center justify-around px-12 text-4xl"
              @click="reviewCounter--"
            >
              <div
                class="rounded-full border-2 border-white p-8 text-white hover:bg-white hover:text-brown"
              >
                <div class="h-6 w-6 flex items-center justify-around">
                  <fa-icon icon="arrow-left" />
                </div>
              </div>
            </div>
          </template>
          <template slot="nextButton"
            ><div
              class="absolute inset-y-0 right-0 flex items-center justify-around px-12 text-4xl"
              @click="reviewCounter++"
            >
              <div
                class="rounded-full border-2 border-white p-8 text-white hover:bg-white hover:text-brown"
              >
                <div class="h-6 w-6 flex items-center justify-around">
                  <fa-icon icon="arrow-right" />
                </div>
              </div>
            </div>
          </template>
        </agile>
        <!-- Custom dots -->
        <ul class="flex justify-around absolute inset-x-0 bottom-0 pb-16">
          <div class="flex">
            <li
              v-for="(review, i) in reviews"
              :key="i"
              class="border-2 border-white rounded-full w-4 h-4 mx-2 cursor-pointer hover:bg-white"
              :class="{ 'bg-white': i === trueReviewCounter }"
              @click="
                reviewCounter = i
                $refs.reviewCarousel.goTo(trueReviewCounter)
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
    agile: VueAgile,
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
            breakpoint: 768,
            settings: {
              navButtons: true,
            },
          },
        ],
      },
      reviews: [
        {
          name: '이름이',
          rating: 2,
          text: `대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한
          중요정책을 국민투표에 붙일 수 있다. 이를 규제·조정할 수 있다. 누구든지
          체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지
          아니하고는 체포 또는 구속을 당하지 아니한다. 국회의원과 정부는
          법률안을 제출할 수 있다.`,
        },
        {
          name: '뭐예요',
          rating: 3,
          text: `대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한
          중요정책을 국민투표에 붙일 수 있다. 이를 규제·조정할 수 있다. 누구든지
          체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지
          아니하고는 체포 또는 구속을 당하지 아니한다. 국회의원과 정부는
          법률안을 제출할 수 있다.`,
        },
        {
          name: '이름이',
          rating: 4,
          text: `대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한
          중요정책을 국민투표에 붙일 수 있다. 이를 규제·조정할 수 있다. 누구든지
          체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지
          아니하고는 체포 또는 구속을 당하지 아니한다. 국회의원과 정부는
          법률안을 제출할 수 있다.`,
        },
        {
          name: '뭐예요',
          rating: 5,
          text: `대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한
          중요정책을 국민투표에 붙일 수 있다. 이를 규제·조정할 수 있다. 누구든지
          체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지
          아니하고는 체포 또는 구속을 당하지 아니한다. 국회의원과 정부는
          법률안을 제출할 수 있다.`,
        },
      ],
    }
  },
  computed: {
    trueReviewCounter() {
      if (this.reviewCounter >= 0) {
        return this.reviewCounter % this.reviews.length
      } else {
        if (Math.abs(this.reviewCounter % this.reviews.length) === 0) {
          return 0
        }
        return (
          this.reviews.length -
          Math.abs(this.reviewCounter % this.reviews.length)
        )
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.$refs.reviewCarousel.goToNext()
      this.reviewCounter++
    }, 4000)
  },
}
</script>

<style lang="scss" scoped></style>
