import { createClient } from 'contentful'
const config = {
  space: process.env.CTF_SPACE_ID || '',
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN || ''
}

export function createContentfulClient() {
  return createClient(config)
}
