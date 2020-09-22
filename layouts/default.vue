<template>
  <div class="default-layout">
    <!-- Hero section -->
    <transition name="slideLeft">
      <TheSidenav
        v-if="sidenavStatus"
        class="fixed-sidebar z-50 w-2/3"
        style="animation-duration: 0.3s"
        :continents="continents"
        :trip-ideas="tripIdeas"
      />
    </transition>

    <transition name="fade">
      <div
        v-if="sidenavStatus"
        class="fixed-sidebar top-0 sidenav-backdrop w-screen h-screen z-40 bg-opacity-50 bg-black"
        @click="$nuxt.$emit('closeSidenav')"
      ></div>
    </transition>

    <TheWhiteHeader
      :continents="continents"
      :trip-ideas="tripIdeas"
      class="sticky top-0 w-full z-30"
    />
    <Nuxt class="default-content -mt-24" />
    <TheFooter />
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('continents/getContinents')
    await store.dispatch('tripIdeas/getTripIdeas', params.slug)
    return {
      continents: store.getters['continents/continents'],
      tripIdeas: store.getters['tripIdeas/tripIdeas'],
    }
  },
  data() {
    return {
      sidenavStatus: false,
    }
  },
  created() {
    this.$nuxt.$on('closeSidenav', () => {
      this.sidenavStatus = false
    })
    this.$nuxt.$on('openSidenav', () => {
      this.sidenavStatus = true
    })
  },
}
</script>

<style lang="scss">
html {
  line-break: strict;
  word-break: keep-all;
  cursor: default;
}
.default-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.default-content {
  flex: 1;
}
.section {
  @apply my-8 py-16 mx-auto;
}
.btn {
  @apply border-2 px-4 py-2 rounded-md;
}
.btn-big {
  @apply text-xl px-8 py-4;
}
.btn-white-outline {
  @apply border-white;
}
.btn-white-outline:hover {
  @apply text-brown bg-white;
}
.btn-dark-brown {
  @apply bg-brown-dark text-white;
}
.btn-dark-brown:hover {
  @apply bg-brown;
}
.title {
  @apply font-bold;
  &-main {
    @apply text-5xl;
  }
}
.content {
  @apply text-gray text-lg;
}
.fixed-sidebar {
  position: -webkit-fixed;
  position: fixed;
  top: 0;
  right: left;
}

// Animations go here
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 100%;
  opacity: 1;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  max-height: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.05s ease;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
