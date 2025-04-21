import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.HOST || 'https://leime-production-886b.up.railway.app'}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
