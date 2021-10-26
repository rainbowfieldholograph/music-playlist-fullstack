import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const uriPath = 'http://localhost:5000/graphql'
const uploadLink = createUploadLink({ uri: uriPath })

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
})

export default client
