import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import memes from '../db/memes.json';
import { generateMemOpt } from '../../../utils/generateMemOpt';
import { LocalhostURLScalar } from '../scalars/LocalhostURLScalar';
import { DateTimeResolver } from 'graphql-scalars';

const typeDefs = `#graphql
  scalar URL
  scalar DateTime

  type Meme {
    id: ID!
    timestamp: DateTime!
    name: String!
    imgUrl: URL!
    likes: Float!
  }

  type Query {
    memes: [Meme!]!
  }
`;

const resolvers = {
  DateTime: DateTimeResolver,
  URL: LocalhostURLScalar,
  Query: {
    memes: () =>
      memes.map((mem) => ({
        ...generateMemOpt(),
        ...mem,
        timestamp: new Date().toISOString(),
        imgUrl: `${process.env.HOST}/${mem.imgUrl}`,
      })),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
