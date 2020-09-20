require('dotenv').config()

const contentful = require('contentful')

module.exports = contentful.createClient({
  space: process.env.NUXT_ENV_CTF_SPACE_ID,
  accessToken: process.env.NUXT_ENV_CTF_CD_ACCESS_TOKEN,
})
