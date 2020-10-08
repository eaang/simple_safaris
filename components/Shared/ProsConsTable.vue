<template>
  <!-- Pros & Cons -->
  <div class="w-full">
    <!-- Table Headers -->
    <div class="flex w-full">
      <div class="flex flex-center w-1/2">장점</div>
      <div class="flex flex-center w-1/2">단점</div>
    </div>

    <!-- Table Content -->
    <div class="flex w-full">
      <div class="w-1/2 text-black">
        <div v-for="pro in pros" :key="pro" class="flex">
          <div><Check class="h-8 text-brown" /></div>
          <div>{{ pro }}</div>
        </div>
      </div>
      <div class="w-1/2 text-black">
        <div v-for="con in cons" :key="con" class="flex">
          <div><Cross class="h-8 text-gray" /></div>
          <div>{{ con }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pros: {
      type: Array,
      default: () => [
        '타행선지 대비 적은관광객, 친환경숙박시설',
        '동물 출현 확률 높음'
      ]
    },
    cons: {
      type: Array,
      default: () => ['가격 측면에서 고가, 선택폭이 많이없음']
    }
  }
}
</script>

<style lang="scss" scoped></style>
