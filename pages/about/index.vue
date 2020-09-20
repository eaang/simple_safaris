<template>
  <div>
    <div v-for="(continent, i) in continents" :key="i">
      {{ continent.fields.name }}
      <ul>
        <li
          v-for="(destination, ind) in continent.fields.destinations"
          :key="ind"
        >
          {{ destination.fields.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_CONTINENT_ID,
      }),
    ]).then(([name]) => {
      // return data that should be available
      // in the template
      return {
        continents: name.items,
      }
    })
  },
}
</script>
