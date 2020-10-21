<template>
  <div class="absolute nav-dropdown nav-dropdown-dark w-64">
    <ul class="nav-dropdown-list flex flex-col cursor-pointer">
      <!-- African trips -->
      <div>
        <li
          class="nav-dropdown-item flex items-center justify-between cursor-pointer text-white"
          @click="toggleTrips('africa')"
        >
          <div>Africa</div>
          <div>
            <CaretUp id="africa-trip-icon-up" />
            <CaretDown id="africa-trip-icon-down" class="hidden" />
          </div>
        </li>
        <div id="africa-trip-dropdown">
          <a
            v-for="tripIdea in africaTrips"
            :key="tripIdea.fields.name"
            :href="'/trips/' + tripIdea.fields.slug"
          >
            <li class="nav-dropdown-item nav-dropdown-item-dark">
              {{ tripIdea.fields.name }}
            </li></a
          >
        </div>
      </div>
      <!-- Asian trips -->
      <div>
        <li
          class="nav-dropdown-item flex items-center justify-between cursor-pointer text-white"
          @click="toggleTrips('asia')"
        >
          <div class="text-white">Asia</div>
          <div>
            <CaretUp id="asia-trip-icon-up" />
            <CaretDown id="asia-trip-icon-down" class="hidden" />
          </div>
        </li>
        <div id="asia-trip-dropdown">
          <a
            v-for="tripIdea in asiaTrips"
            :key="tripIdea.fields.name"
            :href="'/trips/' + tripIdea.fields.slug"
          >
            <li class="nav-dropdown-item nav-dropdown-item-dark">
              {{ tripIdea.fields.name }}
            </li></a
          >
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tripIdeas: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    asiaTrips() {
      return this.tripIdeas.filter(
        (trip) => trip.fields.continent.fields.name === 'Asia'
      )
    },
    africaTrips() {
      return this.tripIdeas.filter(
        (trip) => trip.fields.continent.fields.name === 'Africa'
      )
    }
  },
  methods: {
    toggleTrips(country) {
      document
        .querySelector('#' + country.toLowerCase() + '-trip-dropdown')
        .classList.toggle('hidden')
      document
        .querySelector('#' + country.toLowerCase() + '-trip-icon-up')
        .classList.toggle('hidden')
      document
        .querySelector('#' + country.toLowerCase() + '-trip-icon-down')
        .classList.toggle('hidden')
    }
  }
}
</script>
