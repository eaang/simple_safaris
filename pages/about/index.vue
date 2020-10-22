<template>
  <div class="about-page">
    <!-- Hero section -->
    <div
      class="bg-cover bg-center w-full h-screen"
      style="background-image: url('/migration.jpg')"
    >
      <div class="h-full flex flex-col">
        <div class="flex-center flex-grow pt-16">
          <div class="title-header">About us</div>
        </div>
        <div
          class="py-8 sm:py-0 sm:h-screen/50 background-gradient w-full flex-center"
        >
          <div
            class="space-y-8 text-white text-base sm:text-lg text-center mx-4 w-full md:w-4/5 lg:w-2/3 xl:w-1/2"
          >
            <div>
              심플 사파리(Simple Safaris) John 과 Jin입니다. 2019년 설립된 심플
              사파리는 여행을 사랑하고, 수준 높은 여행 경험 및 정보를 주변
              친구들과 공유하는 것에 대한 우리의 열정에서부터 시작되었습니다.
            </div>

            <div>
              서울, 뉴욕, 시카고, 홍콩, 싱가포르 등 글로벌 도시에 거주하며,전
              세계 100개 이상의 도시를 방문한 우리는 어느 날 바쁜 도심에서
              벗어나고 싶은 마음에 용기를 내어 사파리 여행을 선택하였습니다.
            </div>

            <div>
              우리는 인간의 손길이 닿지 않은 아프리카와 인도 대자연에서 큰
              감동을 받았으며, 이러한 감동을 많은 사람들과 공유하고 싶어
              심플사파리를 시작하게 되었습니다. 럭셔리한 사파리 여행 경험와 여행
              계획 과정에서 발생할 수 있는 고객 여러분들의 어려움을 해결해
              드리겠습니다.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="section">
      <div class="container mx-auto">
        <div class="title title-main text-center mb-8 mt-16">
          Your Safari Consultants
        </div>
        <div
          class="flex flex-col space-y-40 lg:space-y-0 lg:flex-row lg:space-x-16 xl:space-x-32"
        >
          <!-- John's section -->
          <div class="flex flex-col space-y-8 text-black lg:w-1/2">
            <img class="object-scale-down" src="/profile pic john.png" alt="" />
            <div class="font-bold text-center text-xl">John Bio</div>
            <div class="space-y-8 text-base sm:text-lg px-8">
              <div>
                미국 Northwestern University을 졸업한 뒤 스타트업과 컨설팅을
                거쳐 심플사파리를 시작하게 되었습니다.
              </div>
              <div>
                홍콩에서 태어나 미국과 스페인에서 유학생활을 하며 사람들에게
                기억에 남는 추억을 제공하는 일이 즐겁다는 것을 알게 되었습니다.
              </div>
              <div>
                이런 생각을 품고 한국에 돌아온 후, 우연히 저와 비슷한 생각을
                가진 Jin을 만나 결혼을 하게 되었습니다. 결혼 후 다양한 곳
                여행하던 도중 Jin이 오지로 여행을 가고 싶다고 말했습니다. 결국
                저희 부부는 몇 개월에 준비 끝에 아프리카로 여행을 떠나게
                되었습니다.
              </div>
              <div>
                그곳에서 제가 경험한 것은 말 그대로 지상 낙원이었습니다. 끝없는
                평야와 그 안을 자유롭게 뛰어다니는 야생 동물들을 보며 꿈을 꾸는
                것 같았습니다. 평생 잊을 수 없을 만큼 행복한 경험을 제게
                선사했던 사파리 여행을 통해 저는 사파리 여행에 매력에 빠지게
                되었습니다. 심플사파리를 이용하는 모든 고객분들께 잊을 수 없는
                감동을 남겨드리기 위해 최선을 다하겠습니다.
              </div>
            </div>
          </div>

          <!-- Jin's section -->
          <div class="flex flex-col space-y-8 text-lg text-black lg:w-1/2">
            <img class="object-scale-down" src="/profile pic jin.png" alt="" />

            <div class="font-bold text-center text-xl">Jin bio</div>
            <div class="space-y-8 text-base sm:text-lg px-8">
              <div>
                미국 New York University에서 공부하며, 여행을 떠나는 법, 맛있는
                음식과 와인을 즐기는 법, 패션을 사랑하는 법을 배웠습니다.
              </div>

              <div>
                한국에 돌아와 John 만나 결혼 후 더 열심히 맛집 찾아다니고 여행을
                다녔습니다. 그러던 중 탄자니아를 다녀오게 되었고 사파리 여행에
                매력에 빠져들어 John과 함께 심플사파리를 시작했습니다.
              </div>

              <div>
                제게 왜 사파리 여행이 왜 그리도 감동적이었는지 누군가가
                물어본다면, 때묻지 않은 자연과 아프리카 사람들의 따뜻함
                때문이라고 말하고 싶습니다. 아직도 제가 세렝게티에 도착한 첫 날
                제 방에 놓여있었던 빨간 장미꽃 다발을 잊을 수 없습니다.
              </div>

              <div>
                심플사파리의 모든 고객이 저와 똑 같은 감동을 느낄 수 있도록 제가
                돕고 싶습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map box -->
    <div class="section container mx-auto">
      <div class="title title-main text-center mb-8">Places we've visited</div>
      <MapNoText :places="places" class="w-full h-screen/50 lg:h-screen/75" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        { name: 'Australia', longitude: 134.755, latitude: -24.7761086 },
        { name: 'Bahrain', longitude: 50.5344606, latitude: 26.1551249 },
        { name: 'Botswana', longitude: 24.5928742, latitude: -23.1681782 },
        { name: 'Cambodia', longitude: 104.869423, latitude: 13.5066394 },
        { name: 'Canada', longitude: -107.9917071, latitude: 61.0666922 },
        { name: 'China', longitude: 104.999927, latitude: 35.000074 },
        { name: 'Ethiopia', longitude: 38.6521203, latitude: 10.2116702 },
        { name: 'France', longitude: 1.8883335, latitude: 46.603354 },
        { name: 'India', longitude: 78.6677428, latitude: 22.3511148 },
        { name: 'Indonesia', longitude: 117.8902853, latitude: -2.4833826 },
        { name: 'Italy', longitude: 12.674297, latitude: 42.6384261 },
        { name: 'Japan', longitude: 139.2394179, latitude: 36.5748441 },
        { name: 'Kenya', longitude: 38.4313975, latitude: 1.4419683 },
        { name: 'Malaysia', longitude: 102.2656823, latitude: 4.5693754 },
        { name: 'Namibia', longitude: 17.3231107, latitude: -23.2335499 },
        { name: 'The Netherlands', longitude: 5.7480821, latitude: 52.5001698 },
        { name: 'Korea', longitude: 127.6961188, latitude: 36.638392 },
        { name: 'Singapore', longitude: 103.83039182, latitude: 1.340863 },
        {
          name: 'South Africa',
          longitude: 22.937506,
          latitude: -30.559483
        },
        { name: 'Spain', longitude: -4.8380649, latitude: 39.3262345 },
        { name: 'Thailand', longitude: 100.83273, latitude: 14.8971921 },
        { name: 'The UAE', longitude: 53.9994829, latitude: 24.0002488 },
        { name: 'The UK', longitude: -3.2765753, latitude: 54.7023545 },
        { name: 'Tanzania', longitude: 35.7878438, latitude: -6.5247123 },
        { name: 'The USA', longitude: -100.4458825, latitude: 39.7837304 },
        { name: 'Zambia', longitude: 27.5599164, latitude: -14.5186239 },
        { name: 'Zimbabwe', longitude: 29.7468414, latitude: -18.4554963 }
      ]
    }
  },
  head() {
    const title = 'Simple Safaris - About us'
    const description = this.$config.metaDescription

    return {
      title: '- About us',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://simple-safaris.netlify.app/metaimage.jpg'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://simple-safaris.netlify.app/metaimage.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.background-gradient {
  background: rgb(104, 100, 84);
  background: linear-gradient(
    0deg,
    // rgba(104, 100, 84, 1) 0%,
    rgba(104, 100, 84, 1) 50%,
    rgba(104, 100, 84, 0.8) 100%
  );
}
</style>
