<template>
  <div class="">
    <div class="trip-idea-box shadow-xl cursor-pointer">
      <a :href="'/trips/' + slug">
        <div class="relative h-56 trip-idea-image">
          <div
            class="h-56 z-40"
            style="
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            "
            :style="{ 'background-image': 'url(' + url + ')' }"
          ></div>
        </div>
        <div class="trip-idea-text bg-white text-center p-4">
          <div
            class="trip-idea-title text-gray-dark text-lg md:text-2xl flex items-center justify-center px-4 h-16 md:h-20"
          >
            {{ title }}
          </div>
          <div
            class="trip-idea-body text-brown text-xs sm:text-sm h-16 font-normal flex-center"
          >
            {{ content }}
          </div>
          <div
            class="trip-idea-price text-brown h-12 md:h-20 flex flex-col items-center justify-center"
          >
            <div class="text-base md:text-lg">Course 예상 가격</div>
            <div class="text-xs md:text-sm font-normal">{{ price }}</div>
          </div>
          <div class="mt-4">
            <Button text="더보기" classes="btn-dark-brown font-normal" />
          </div></div
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'https://picsum.photos/640/480'
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet'
    },
    content: {
      type: String,
      default:
        '이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다.'
    },
    price: {
      type: String,
      default: '$300만원 부터 시작'
    },
    slug: {
      type: String,
      default: null
    }
  }
}
</script>
