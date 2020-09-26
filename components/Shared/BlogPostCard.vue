<template>
  <div>
    <div
      class="trip-idea-box shadow cursor-pointer"
      @mouseover="mouseover = true"
      @mouseleave="mouseover = false"
    >
      <a :href="link">
        <div class="relative h-56 trip-idea-image">
          <div
            class="h-56 z-40"
            style="
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            "
            :class="{ 'background-filter': mouseover }"
            :style="{ 'background-image': `url(${url})` }"
          ></div>
        </div>
        <div class="trip-idea-text bg-white text-center py-8 space-y-8">
          <div
            class="trip-idea-title text-gray-dark font-bold h-16 md:h-20 lg:h-24 px-4"
          >
            <div class="topic text-base md:text-lg">[{{ topic }}]</div>
            <div class="title h-full text-lg md:text-xl">
              {{ title }}
            </div>
          </div>
          <div
            class="trip-idea-body px-4 text-brown h-12 md:h-16 text-sm md:text-base flex-center"
          >
            {{ content }}
          </div>
        </div></a
      >
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
    topic: {
      type: String,
      default: '케냐 숙소 정보',
    },
    title: {
      type: String,
      default: `위치부터 역사까지!
케냐 기린 호텔의 모든 것!`,
    },
    content: {
      type: String,
      default: `기린과의 키스와 함께하는 티타임
나이보비의 천상 정원, 기린호텔!`,
    },
    link: {
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
