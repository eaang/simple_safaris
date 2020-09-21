<template>
  <div
    class="trip-idea-box shadow-2xl cursor-pointer"
    @mouseover="mouseover = true"
    @mouseleave="mouseover = false"
  >
    <a :href="'/trips/' + slug">
      <div class="relative h-56 trip-idea-image">
        <div
          v-if="mouseover"
          class="absolute w-full h-full flex items-center justify-center text-beige text-6xl z-50"
        >
          +
        </div>
        <div
          class="h-56 z-40"
          style="
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          "
          :class="{ 'background-filter': mouseover }"
          :style="{ 'background-image': 'url(' + url + ')' }"
        ></div>
      </div>
      <div class="trip-idea-text bg-white text-center p-4">
        <div
          class="trip-idea-title text-gray-dark text-2xl font-bold flex items-center justify-center px-4 h-20"
        >
          {{ title }}
        </div>
        <div class="trip-idea-body text-brown text-sm h-16">
          {{ content }}
        </div>
        <div
          class="trip-idea-price text-brown h-20 flex flex-col items-center justify-center"
        >
          <div class="font-bold text-lg">Course 예상 가격</div>
          <div>{{ price }}</div>
        </div>
        <div
          class="trip-idea-link text-xs text-brown flex items-center justify-center space-x-2 h-6"
        >
          <div>more</div>
          <img src="@/assets/images/icons/more.svg" />
        </div></div
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'https://picsum.photos/640/480',
    },
    alt: {
      type: String,
      default: 'A placeholder',
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    content: {
      type: String,
      default:
        '이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다.',
    },
    price: {
      type: String,
      default: '$300만원 부터 시작',
    },
    slug: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      mouseover: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.trip-idea {
  &-box {
    margin: 4px;
  }
  &-box:hover {
    margin: 0px;
    @apply border-4 border-beige;
  }
}
.background-filter {
  filter: brightness(50%);
}
</style>
