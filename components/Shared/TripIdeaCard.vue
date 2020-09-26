<template>
  <div class="px-2">
    <div
      class="trip-idea-box shadow cursor-pointer"
      @mouseover="mouseover = true"
      @mouseleave="mouseover = false"
    >
      <a :href="'/trips/' + slug">
        <div class="relative h-56 trip-idea-image">
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
            class="trip-idea-title text-gray-dark text-2xl flex items-center justify-center px-4 h-20"
          >
            {{ title }}
          </div>
          <div class="trip-idea-body text-brown text-sm h-16 font-normal">
            {{ content }}
          </div>
          <div
            class="trip-idea-price text-brown h-20 flex flex-col items-center justify-center"
          >
            <div class="text-lg">Course 예상 가격</div>
            <div class="text-sm font-normal">{{ price }}</div>
          </div>
          <div>
            <Button
              text="발견해보세요"
              classes="btn-small btn-dark-brown font-normal"
              :arrow="true"
            />
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
      default: 'https://picsum.photos/640/480',
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
  filter: brightness(80%);
}
</style>
