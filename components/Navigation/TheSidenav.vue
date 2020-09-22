<template>
  <div class="sidenav">
    <div class="h-screen w-2/3 bg-black grid grid-rows-2">
      <div
        class="flex flex-col justify-evenly text-brown font-bold text-2xl pl-4"
      >
        <div class="h-12 flex justify-end">
          <img
            class="nav-button nav-button-big"
            src="@/assets/images/icons/btn-close.svg"
          />
        </div>
        <a href="/"
          ><div class="nav-item"><div>Home</div></div></a
        >
        <div class="nav-item">
          <div>About</div>
          <img
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-add.svg"
          />
        </div>
        <div class="nav-item">
          <div>Destinations</div>
          <img
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-add.svg"
          />
        </div>
        <div class="nav-item">
          <div>Trip Ideas</div>
          <img
            class="nav-button nav-button-small"
            src="@/assets/images/icons/btn-add.svg"
          />
        </div>
        <div class="nav-item"><div>Blog</div></div>
        <a href="/contact"
          ><div class="nav-item"><div>Contact us</div></div></a
        >
      </div>
      <div class="flex items-end text-brown">
        <div class="mb-8 ml-4 font-bold space-x-2 text-lg">
          <fa-icon icon="phone-alt" /><span>070-4517-0225</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  &-item {
    @apply h-12 border-b border-brown border-opacity-25 flex items-center justify-between pb-2 cursor-pointer;
  }
  &-button {
    @apply object-scale-down mr-4;
    &-big {
      @apply h-12 w-12;
    }
    &-small {
      @apply h-8 w-8;
    }
  }
}
</style>
