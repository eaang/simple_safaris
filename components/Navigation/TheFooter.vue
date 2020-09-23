<template>
  <div class="footer mt-24">
    <div class="footer-top bg-black">
      <div class="container px-4 mx-auto py-16">
        <div class="flex flex-col lg:flex-row">
          <a
            href="/"
            class="text-4xl font-display text-brown w-full lg:w-1/2 xl:w-1/3"
          >
            SIMPLE SAFARIS
          </a>
          <div
            class="grid grid-flow-col grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full"
          >
            <div class="hidden md:block">
              <div class="footer-title">About</div>
              <ul class="footer-list">
                <a href="/about"><li class="footer-list-item">About Us</li></a>
                <a href="/about/privacy"
                  ><li class="footer-list-item">개인정보처리방침</li></a
                >
                <a href="/about/terms-and-conditions"
                  ><li class="footer-list-item">해외여행약관</li></a
                >
              </ul>
            </div>
            <div class="hidden xl:block">
              <div class="footer-title">Destinations</div>
              <ul class="footer-list">
                <a href="/destinations/botswana"
                  ><li class="footer-list-item">보츠와나</li></a
                >
                <a href="/destinations/kenya"
                  ><li class="footer-list-item">케냐</li></a
                >
                <a href="/destinations/namibia"
                  ><li class="footer-list-item">나미비아</li></a
                >
                <a href="/destinations/south-africa"
                  ><li class="footer-list-item">남아프리카 공화국</li></a
                >
                <a href="/destinations/tanzania"
                  ><li class="footer-list-item">탄자니아</li></a
                >
              </ul>
            </div>
            <div>
              <div class="footer-title">Contact us</div>
              <ul class="footer-list">
                <a href="/contact"
                  ><li class="footer-list-item">문의 양식</li></a
                >
                <li class="">070-4517-0225</li>
                <li class="">sales@simplesafaris.com</li>
                <div class="flex md:hidden space-x-2 mt-2">
                  <li class="footer-list-item">
                    <img
                      class="h-5"
                      src="@/assets/images/icons/ic-youtube-ft.svg"
                    />
                  </li>
                  <li class="footer-list-item">
                    <img
                      class="h-5"
                      src="@/assets/images/icons/ic-instagram-ft.svg"
                    />
                  </li>
                  <li class="footer-list-item">
                    <img
                      class="h-5"
                      src="@/assets/images/icons/ic-blog-ft.svg"
                    />
                  </li>
                  <li class="footer-list-item">
                    <img class="h-5" src="@/assets/images/icons/ic-kakao.svg" />
                  </li>
                </div>
              </ul>
            </div>
            <div class="hidden xl:block"></div>
            <div class="hidden md:block">
              <div class="footer-title">Stay in touch</div>
              <ul class="footer-list">
                <div class="flex space-x-2 mb-1">
                  <li class="footer-list-item">
                    <img
                      class="h-5"
                      src="@/assets/images/icons/ic-youtube-ft.svg"
                    />
                  </li>
                  <li class="footer-list-item">
                    <img
                      class="h-5"
                      src="@/assets/images/icons/ic-instagram-ft.svg"
                    />
                  </li>
                  <li class="footer-list-item">
                    <img
                      class="h-5"
                      src="@/assets/images/icons/ic-blog-ft.svg"
                    />
                  </li>
                  <li class="footer-list-item">
                    <img class="h-5" src="@/assets/images/icons/ic-kakao.svg" />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="text-xs opacity-75 md:text-sm flex flex-col lg:flex-row items-start justify-center lg:space-x-24 mt-8 lg:mt-16"
        >
          <div class="flex items-center flex-row space-x-4">
            <div>관광사업등록번호</div>
            <div class="flex space-x-4">
              <div class="font-bold">제 2019-000026호</div>
              <img
                class="object-scale-down"
                src="@/assets/images/icons/window.svg"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center flex-row space-x-4">
              <div>인허가보증보험증권</div>
              <div class="flex space-x-4">
                <div class="font-bold">제 100-000-2020 0098 3703호</div>
                <img
                  class="object-scale-down"
                  src="@/assets/images/icons/window.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-4">
      <div
        class="container mx-auto flex justify-center text-gray-dark text-center text-sm"
      >
        <div>© 2020 Simple Safaris All Rights Reserved</div>
        <!-- If we go with icons8 icons -->
        <!-- <div class="text-gray-dark">
          icons by
          <a class="text-gray hover:text-gray-dark" href="icons8.com/"
            >icons8</a
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  @apply text-brown;
  &-title {
    @apply font-bold my-2 text-lg;
  }
  &-list {
    @apply opacity-75;
    &-item {
      @apply cursor-pointer;
    }
    &-item:hover {
      @apply underline;
    }
  }
}
</style>
