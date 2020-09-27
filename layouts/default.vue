<template>
  <div>
    <ChatBubble class="fixed bottom-0 right-0 z-50" />
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
    <Nuxt class="-mt-24" />
    <TheFooter :continents="continents" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidenavStatus: false,
      continents: this.$store.getters['continents/continents'],
      tripIdeas: this.$store.getters['tripIdeas/tripIdeas'],
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
.section {
  @apply my-8 py-16 mx-auto;
}
.tel-link {
  @apply border-b-2 border-t-2 border-transparent;
  &:hover {
    @apply border-b-2 border-dotted;
  }
  &-brown:hover {
    @apply border-brown;
  }
  &-white:hover {
    @apply border-white;
  }
}
.title {
  @apply font-bold;
  &-main {
    @apply text-2xl;
    @screen md {
      @apply text-5xl;
    }
  }
  &-header {
    text-shadow: 0 0 35px rgba(0, 0, 0, 1);
    @apply text-white text-5xl font-normal;
  }
}
.content {
  @apply text-gray text-lg;
}
.flex-center {
  @apply flex items-center justify-center;
}
.fixed-sidebar {
  @apply fixed top-0 left-0;
}
.nav {
  &-link {
    @apply h-full flex items-center;
  }
  &-dropdown {
    @apply py-4;
    &-dark {
      @apply bg-black;
    }
    &-list {
      @apply w-64 text-base;
    }
    &-item {
      @apply py-2 px-4;
      &-dark {
        @apply text-brown;
      }
      &-dark:hover {
        @apply bg-brown text-white font-bold;
      }
    }
  }
}
// Animations go here
.slide-leave-active,
.slide-enter-active {
  transition: all 0.5s ease;
  max-height: 50%;
  opacity: 1;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  max-height: 0px;
  margin: 0;
  padding: 0;
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

// Map styles
.marker {
  background-image: url('/pin.png');
  @apply bg-contain bg-center h-8 w-6 cursor-pointer;
}

.mapboxgl-popup {
  @apply max-w-2xl;
}

.mapboxgl-popup-content {
  @apply text-brown shadow-lg rounded h-8 flex items-end justify-center text-lg font-bold pb-1;
}
</style>
