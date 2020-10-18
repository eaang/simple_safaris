<template>
  <!-- Pros & Cons -->
  <div class="w-full">
    <!-- Table Content -->
    <div class="flex flex-col md:flex-row w-full space-y-8 md:space-y-0">
      <div class="w-full md:w-1/2">
        <div
          class="flex flex-center w-full text-lg sm:text-xl md:text-2xl py-2"
        >
          장점
        </div>
        <div class="w-full text-black space-y-2 px-4">
          <div v-for="pro in pros" :key="pro" class="flex">
            <div><Check class="h-6 md:h-8 text-brown" /></div>
            <div class="text-base md:text-lg">{{ pro }}</div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div
          class="flex flex-center w-full text-lg sm:text-xl md:text-2xl py-2"
        >
          단점
        </div>
        <div class="w-full text-black space-y-2 px-4">
          <div v-for="con in cons" :key="con" class="flex">
            <div><Cross class="h-6 md:h-8 text-gray" /></div>
            <div class="text-base md:text-lg">{{ con }}</div>
          </div>
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
