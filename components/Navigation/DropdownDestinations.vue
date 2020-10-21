<template>
  <div class="absolute nav-dropdown nav-dropdown-dark w-48">
    <ul class="nav-dropdown-list flex flex-col-reverse cursor-pointer">
      <div v-for="continent in continents" :key="continent.fields.name">
        <li
          class="nav-dropdown-item flex items-center justify-between cursor-pointer text-white"
          @click="toggleRegions(continent.fields.name)"
        >
          <div>
            {{ continent.fields.name }}
          </div>
          <div>
            <CaretUp :id="continent.fields.name.toLowerCase() + '-icon-up'" />
            <CaretDown
              :id="continent.fields.name.toLowerCase() + '-icon-down'"
              class="hidden"
            />
          </div>
        </li>
        <div :id="continent.fields.name.toLowerCase() + '-dropdown'">
          <a
            v-for="destination in continent.fields.destinations"
            :key="destination.fields.name"
            :href="'/destinations/' + destination.fields.slug"
          >
            <li class="nav-dropdown-item nav-dropdown-item-dark">
              {{ destination.fields.name }}
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
    continents: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggleRegions(country) {
      document
        .querySelector('#' + country.toLowerCase() + '-dropdown')
        .classList.toggle('hidden')
      document
        .querySelector('#' + country.toLowerCase() + '-icon-up')
        .classList.toggle('hidden')
      document
        .querySelector('#' + country.toLowerCase() + '-icon-down')
        .classList.toggle('hidden')
    }
  }
}
</script>
