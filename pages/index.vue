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
      <div class="title title-main">
        당신만을 위한 비스포크 럭셔리 사파리 여행!
      </div>
      <div class="content">
        사파리(Safari)라는 말은 동물을 구경하거나 사냥하는 여행을 의미합니다.
        <br />
        심플사파리는 고객님들이 대자연에서의 모험을 쉽고 편안하게 즐길 수 있도록
        도와드리고 있습니다. <br />
        최고의 경험을 선사해 드리기 위해 심플사파리는 3가지를 약속합니다.
      </div>
      <div class="grid grid-flow-col grid-cols-3 gap-4">
        <div>
          <InfoPoint
            icon="meeting"
            title="사파리 여행 전문가와 함께하는 플래닝"
            content="여행 상담부터 여행 다녀오실 때까지
전문 사파리 여행 컨설턴트가 고객님을 도와드립니다. 
복잡하고 어렵게만 느껴졌던 사파리 여행이 간편해집니다."
          />
        </div>
        <div>
          <InfoPoint
            icon="passenger-with-baggage"
            title="100% 맞춤형 여행"
            content="심플 사파리는 누구나를 위해 만들어진 
패키지 여행은 판매하지 않습니다. 
고객의 취향을 반영해  맞춤 여행을 기획해드립니다."
          />
        </div>
        <div>
          <InfoPoint
            icon="sunbathe"
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
      <div class="title title-main">Destinations</div>
      <div class="grid grid-cols-2">
        <div class="text-left">
          <div class="grid grid-cols-2">
            <ul class="destination-list">
              <li class="destination-list-item">아프리카(Africa)</li>
              <li class="destination-list-item">아시아(Asia)</li>
            </ul>
            <ul class="destination-list ml-2 cursor-pointer">
              <li
                class="destination-list-item"
                @mouseleave="region = null"
                @mouseover="region = 'kenya'"
              >
                케냐 (Kenya)
              </li>
              <li
                class="destination-list-item"
                @mouseleave="region = null"
                @mouseover="region = 'tanzania'"
              >
                탄자니아 (Tanzania)
              </li>
              <li
                class="destination-list-item"
                @mouseleave="region = null"
                @mouseover="region = 'botswana'"
              >
                보츠와나 (Botswana)
              </li>
              <li
                class="destination-list-item"
                @mouseleave="region = null"
                @mouseover="region = 'south-africa'"
              >
                남아프리카 공화국 (South Africa)
              </li>
              <li
                class="destination-list-item"
                @mouseleave="region = null"
                @mouseover="region = 'namibia'"
              >
                나미비아 (Namibia)
              </li>
            </ul>
          </div>
        </div>
        <div class="relative">
          <img class="absolute" :src="countryImage" />
          <img src="@/assets/images/landing-map/map-africa.png" />
        </div>
      </div>
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
      region: null,
    }
  },
  computed: {
    countryImage() {
      if (this.region === null) {
        return ''
      } else {
        return require('@/assets/images/landing-map/map-africa-' +
          this.region +
          '.png')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.destination-list {
  &-item {
    @apply text-brown text-xl mb-4;
  }
  &-item:hover {
    @apply text-black font-bold;
  }
}
</style>
