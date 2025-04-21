import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.HOST || 'http://localhost:3030'}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
