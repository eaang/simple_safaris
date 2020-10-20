<template>
  <div>
    <ChatBubble class="fixed bottom-0 right-0 z-50" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/landinghero/kenya-safari.jpeg'
        }
      ]
    }
  }
}
</script>
