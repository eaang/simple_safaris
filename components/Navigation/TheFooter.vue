<template>
  <div class="footer">
    <div class="footer-top bg-black">
      <div class="container mx-auto py-8">
        <div class="flex">
          <div class="text-4xl font-display text-brown">SIMPLE SAFARIS</div>
          <div>
            <div class="footer-title">About</div>
            <ul class="footer-list">
              <li class="footer-list-item">About us</li>
              <li class="footer-list-item">개인정보처리방침</li>
              <li class="footer-list-item">해외여행약관</li>
            </ul>
          </div>
          <div>Space 2</div>
          <div>Space 3</div>
          <div>Space 4</div>
          <div>Space 5</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-black text-center py-4">
      2020 © Copyright Simple Safaris. All Rights Reserved
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
    @apply font-bold;
  }
  &-list {
    &-item {
      @apply opacity-50 cursor-pointer;
    }
    &-item:hover {
      @apply opacity-75;
    }
  }
}
</style>
