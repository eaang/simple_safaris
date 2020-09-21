<template>
  <div class="info-point">
    <div class="info-icon"><Icon :icon-name="icon" /></div>
    <div class="info-title">{{ title }}</div>
    <div class="info-content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'friends',
    },
    title: {
      type: String,
      default: '중요한 국제조직에 관한 조약.',
    },
    content: {
      type: String,
      default: `선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.`,
    },
  },
}
</script>

<style lang="scss" scoped>
.info {
  &-icon {
    @apply flex justify-center;
  }
  &-title {
    @apply text-black text-2xl font-bold;
  }
  &-content {
    @apply text-gray text-lg my-4 italic;
  }
}
</style>
