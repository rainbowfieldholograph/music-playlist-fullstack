import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import type { ReactNode } from 'react';

const uri = String(import.meta.env.VITE_SERVER_URL);
const link = createUploadLink({ uri });
const cache = new InMemoryCache();

export const client = new ApolloClient<NormalizedCacheObject>({
  link,
  cache,
});

// eslint-disable-next-line react/display-name
export const withApollo = (component: () => ReactNode) => () => {
  return <ApolloProvider client={client}>{component()}</ApolloProvider>;
};
