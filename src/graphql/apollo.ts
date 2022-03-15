import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uri = `${import.meta.env.VITE_SERVER_URL}`;
const link = createUploadLink({ uri });
const cache: InMemoryCache = new InMemoryCache();

const client = new ApolloClient<NormalizedCacheObject>({
  link,
  cache,
});

export default client;
