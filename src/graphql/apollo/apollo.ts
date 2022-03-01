import {
  ApolloClient,
  gql,
  InMemoryCache,
  makeVar,
  NormalizedCacheObject,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

export const typeDefs = gql`
  extend type Query {
    currentTrackId: Int
  }
`

export const currentTrackIdVar = makeVar<Number | null>(null)

const uriPath = `${import.meta.env.VITE_SERVER_URL}/graphql`
const uploadLink = createUploadLink({ uri: uriPath })

const client = new ApolloClient<NormalizedCacheObject>({
  link: uploadLink,
  cache: new InMemoryCache(),
  typeDefs: typeDefs,
})

export default client
