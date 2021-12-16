import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const uriPath = `${process.env.REACT_APP_SERVER_URL}/graphql`
console.log(uriPath)
const uploadLink = createUploadLink({ uri: uriPath })

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
})

export default client
