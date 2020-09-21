<template>
  <div class="footer">
    <div class="footer-top bg-black">
      <div class="container mx-auto py-8">
        <div class="flex">
          <a href="/" class="text-4xl font-display text-brown w-1/3">
            SIMPLE SAFARIS
          </a>
          <div class="grid grid-flow-col grid-cols-5 gap-4 w-full">
            <div>
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
            <div>
              <a href="/destinations"
                ><div class="footer-title">Destinations</div></a
              >
              <a href="/trips"><div class="footer-title">Trip Ideas</div></a>
              <a href="/contact"><div class="footer-title">Contact Us</div></a>
            </div>
            <div>
              <div class="footer-title">Stay in Touch</div>
              <ul class="footer-list">
                <div class="flex w-1/2 justify-between mb-1">
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
                <li class="">070-4517-0225</li>
                <li class="">jin@simplesafaris.com</li>
              </ul>
            </div>
            <div></div>
            <div></div>
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
    @apply font-bold my-2;
  }
  &-list {
    @apply opacity-75;
    &-item {
      @apply cursor-pointer;
    }
    &-item:hover {
      @apply opacity-50;
    }
  }
}
</style>
