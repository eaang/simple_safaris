<template>
  <div>
    <div class="h-16"></div>
    <Map
      class="w-full h-screen/50 lg:h-screen/75"
      :center="center"
      :places="places"
      :zoom="zoom"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      center: [0, 0],
      places: [
        { name: 'Kenya', longitude: 37.906193, latitude: -0.023559 },
        { name: 'Tanzania', longitude: 34.888821, latitude: -6.369028 },
        { name: 'Botswana', longitude: 24.684866, latitude: -22.328474 },
        { name: 'Namibia', longitude: 18.49041, latitude: -22.95764 },
        { name: 'South Africa', longitude: 22.937506, latitude: -30.559483 }
      ],
      zoom: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
