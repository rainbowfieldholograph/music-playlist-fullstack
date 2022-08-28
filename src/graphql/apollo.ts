import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uri = `${import.meta.env.VITE_SERVER_URL}`;
const link = createUploadLink({ uri });
const cache = new InMemoryCache();

export const client = new ApolloClient<NormalizedCacheObject>({
  link,
  cache,
});
