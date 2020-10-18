<template>
  <div>
    <div id="map" class="w-full h-full border border-white content-box"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  props: {
    center: {
      type: Array,
      default: () => [0, 0]
    },
    places: {
      type: Array,
      default: () => [
        { name: 'Kenya', longitude: 37.906193, latitude: -0.023559 },
        { name: 'Tanzania', longitude: 34.888821, latitude: -6.369028 },
        { name: 'Botswana', longitude: 24.684866, latitude: -22.328474 },
        { name: 'Namibia', longitude: 18.49041, latitude: -22.95764 },
        { name: 'South Africa', longitude: 22.937506, latitude: -30.559483 }
      ]
    },
    zoom: {
      type: Number,
      default: 1.32
    }
  },
  computed: {
    locationData() {
      const locations = {
        type: 'FeatureCollection',
        features: []
      }
      this.places.forEach((place) => {
        locations.features.push({
          type: 'Feature',
          properties: {
            description: place.name
          },
          geometry: {
            type: 'Point',
            coordinates: [place.longitude, place.latitude]
          }
        })
      })
      return locations
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      const locations = this.locationData
      const map = new mapboxgl.Map({
        accessToken: this.$config.mapboxToken,
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: this.center,
        zoom: this.zoom
      })
      locations.features.forEach(function (marker) {
        // create a HTML element for each feature
        const el = document.createElement('div')
        el.className = 'marker'

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map)
      })
    }
  }
}
</script>
