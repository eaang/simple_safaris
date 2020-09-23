<template>
  <div class="h-screen pt-16">
    <div class="container mx-auto">
      <div>Testing the map</div>
      <div>
        <div id="map" class="w-full h-screen/75"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  data() {
    return {
      map_token: process.env.MAPBOX_TOKEN,
      map: {},
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.map_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        zoom: 2,
        center: [15, -15],
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
