<template>
  <div class="contact-success-page">
    <!-- Hero section -->
    <div
      class="bg-cover bg-center w-full h-screen flex flex-col items-center justify-end"
      style="background-image: url('/migration.jpg')"
    >
      <div class="flex-grow flex-center pt-16">
        <div class="title-header">Contact us</div>
      </div>
      <div class="w-5/6 sm:w-3/4 bg-gray-lightest h-48 lg:h-40">
        <div class="relative w-full h-full flex flex-col justify-center">
          <div
            class="flex flex-wrap justify-center gap-x-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl p-4"
          >
            <div class="text-center">
              사파리 여행 문의가 성공적으로 접수되었습니다!
            </div>
            <div class="absolute inset-x-0 bottom-0 flex justify-center">
              <div class="w-24 h-1 bg-brown"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-white h-forty flex flex-col items-center">
        <div
          class="w-5/6 sm:w-3/4 bg-gray-lightest h-48 lg:h-40 flex flex-col flex-center text-gray-dark text-base md:text-lg lg:text-xl xl:text-2xl px-8"
        >
          <div class="text-center">
            문의주신 내용을 바탕으로
            <span class="text-black">24시간 이내</span>에 사파리여행 컨설턴트가
            연락 드릴 예정입니다.
          </div>
          <div class="text-center italic">
            인생에서 가장 기억에 남을 만한 사라피여행을 만들어 드리겠습니다.
          </div>
        </div>
        <a href="/">
          <Button
            class="cursor-pointer w-40 mt-8"
            classes="btn-big btn-dark-brown"
            text="확인"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '- Contact us'
    }
  }
}
</script>

<style lang="scss" scoped></style>
