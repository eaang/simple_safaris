<template>
  <div class="relative landing-page">
    <!-- Hero section -->
    <TheTransparentHeader
      :continents="continents"
      :trip-ideas="tripIdeas"
      class="absolute w-full z-50"
    />
    <TheSidenav class="absolute inset-x-0 top-0" />
    <TheFullheightHero class="z-40" />

    <!-- Introduction -->
    <div class="section container text-center">
      <div class="title title-main text-black">
        당신만을 위한 비스포크 럭셔리 사파리 여행!
      </div>
      <div class="content my-8">
        사파리(Safari)라는 말은 동물을 구경하거나 사냥하는 여행을 의미합니다.
        <br />
        심플사파리는 고객님들이 대자연에서의 모험을 쉽고 편안하게 즐길 수 있도록
        도와드리고 있습니다. <br />
        최고의 경험을 선사해 드리기 위해 심플사파리는 3가지를 약속합니다.
      </div>
      <div class="grid grid-flow-col grid-cols-3 gap-4">
        <div>
          <InfoPoint
            :icon-path="require('@/assets/images/landing-page/icon-01.svg')"
            title="사파리 여행 전문가와 함께하는 플래닝"
            content="여행 상담부터 여행 다녀오실 때까지
전문 사파리 여행 컨설턴트가 고객님을 도와드립니다. 
복잡하고 어렵게만 느껴졌던 사파리 여행이 간편해집니다."
          />
        </div>
        <div>
          <InfoPoint
            :icon-path="require('@/assets/images/landing-page/icon-02.svg')"
            title="100% 맞춤형 여행"
            content="심플 사파리는 누구나를 위해 만들어진 
패키지 여행은 판매하지 않습니다. 
고객의 취향을 반영해  맞춤 여행을 기획해드립니다."
          />
        </div>
        <div>
          <InfoPoint
            :icon-path="require('@/assets/images/landing-page/icon-03.svg')"
            title="모험과 휴양의 조화"
            content="사파리 여행 동안 모험과 휴양을 동시에 즐길 수 있도록 
심플 사파리의 자존심을 걸고 
가장 훌륭한 숙소에서 지내실 수 있도록 하겠습니다."
          />
        </div>
      </div>
    </div>

    <!-- Destinations -->
    <div class="section container text-center">
      <div class="title title-main text-black">Destinations</div>
      <TheDestinationMap class="my-8" />
    </div>

    <!-- Trip Ideas -->
    <div class="section bg-brown-dark">
      <div class="container mx-auto">
        <div class="title title-main text-white text-center">
          Trip ideas for you
        </div>
        <div class="grid grid-flow-col grid-cols-4 gap-4 my-8">
          <div v-for="idea in tripIdeas" :key="idea.id">
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
        </div>
      </div>
    </div>

    <!-- Reviews -->
    <TheReviewCarousel />

    <!-- Design Your Safari -->
    <div class="section container mx-auto text-center">
      <div class="title title-main text-black mb-8">Design your safari!</div>
      <div class="content mb-4">
        <div>꿈꾸시는 추억의 맞춤 사파리 여행을 떠나보세요 :)</div>
      </div>
      <div class="btn btn-big btn-dark-brown cursor-pointer w-1/5 mx-auto">
        여행 문의하기 <fa-icon icon="angle-right" />
      </div>
    </div>

    <!-- Travel Knowhow -->
    <div class="section container mx-auto text-center">
      <div class="title title-main text-brown">Travel Knowhow</div>
      <div class="mt-8 grid grid-flow-col grid-cols-4 gap-4">
        <div v-for="(post, i) in blogposts" :key="i">
          <BlogPostCard
            :url="post.url"
            :title="post.title"
            :topic="post.topic"
            :content="post.content"
            :link="post.link"
          />
        </div>
      </div>
    </div>

    <!-- Safari Gallery -->
    <div class="section container mx-auto text-center">
      <div class="title title-main text-brown">Safari Gallery</div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('continents/getContinents')
    await store.dispatch('tripIdeas/getTripIdeas', params.slug)
    return {
      continents: store.getters['continents/continents'],
      tripIdeas: store.getters['tripIdeas/tripIdeas'],
    }
  },
  data() {
    return {
      blogposts: [
        {
          url: require('@/assets/images/blogposts/giraffe_manor.jpg'),
          topic: '케냐 숙소 정보',
          title: `위치부터 역사까지!
케냐 기린 호텔의 모든 것!`,
          content: `기린과의 키스와 함께하는 티타임
나이보비의 천상 정원, 기린호텔!`,
          link: `/`,
        },
        {
          url: require('@/assets/images/blogposts/manta_hotel.jpg'),
          topic: '탄자니아 숙소',
          title: `돌고래와 하룻밤 어떠세요?
탄자니아 수중 호텔`,
          content: `바닷속 한가운데 위치한 마법 같은 숙소
환상적인 수중정원 ‘만타 리조트’`,
          link: `/`,
        },
        {
          url: require('@/assets/images/blogposts/singita_sasakwa_lodge.jpg'),
          topic: '탄자니아 숙소',
          title: `1박 숙박비 250만원!!
럭셔리 싱키타는 왜 특별한가?`,
          content: `VVIP, 그들만을 위한 럭셔리 롯지
완벽한 서비스와 프라이빗 게임리저브`,
          link: `/`,
        },
        {
          url: require('@/assets/images/blogposts/travel_planning.jpg'),
          topic: '케냐 숙소 정보',
          title: `여행 전 꼭 챙겨야 하는
체크 리스트 5가지!`,
          content: `아프리카 여행 시 반드시 체크할 것
비자, 예방접종, 주의사항까지 모든 것`,
          link: `/`,
        },
      ],
    }
  },
  computed: {
    ideaCards() {
      return Object.entries(this.tripIdeas).slice(-4, -1).flat()
    },
  },
}
</script>

<style lang="scss" scoped>
.destination-list {
  &-item {
    @apply text-brown text-2xl mb-4;
  }
  &-item:hover {
    @apply text-black font-bold;
  }
  &-choice {
    @apply text-black text-2xl mb-4 font-bold;
  }
}
</style>
