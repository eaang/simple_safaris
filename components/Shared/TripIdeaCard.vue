<template>
  <div class="trip-idea-box shadow-2xl">
    <div class="trip-idea-image">
      <img class="object-cover h-56 w-full" :src="url" :alt="alt" />
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
        class="trip-idea-link text-xs text-brown flex items-center justify-center space-x-2"
      >
        <div>more</div>
        <img src="@/assets/images/icons/more.svg" />
      </div>
    </div>
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
  },
}
</script>

<style lang="scss" scoped></style>
