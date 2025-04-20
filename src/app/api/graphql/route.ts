import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import memes from '../db/memes.json';
import { LocalhostURLScalar } from '../scalars/LocalhostURLScalar';
import { DateTimeResolver } from 'graphql-scalars';
import { Meme } from 'types';
import { generateRandomNumbers } from '@utils/generateRandomNumbers';

const memesPath = path.join(process.cwd(), 'src/app/api/db/memes.json');

const MAX_LIKES = 99;

const typeDefs = `#graphql
    scalar URL
    scalar DateTime

    type Meme {
      id: ID!
      timestamp: DateTime!
      title: String!
      imgUrl: URL!
      likes: Float!
    }

    type Query {
      memes: [Meme!]!
    }

    input MemeInput {
      title: String!
      imgUrl: URL!
      likes: Float!
    }

    type Mutation {
      updateMeme(id: ID!, data: MemeInput!): Meme
    }
`;

const resolvers = {
  DateTime: DateTimeResolver,
  URL: LocalhostURLScalar,

  Query: {
    memes: () =>
      memes.map((meme: Meme) => ({
        ...meme,
        likes: meme.likes !== -1 ? meme.likes : generateRandomNumbers(MAX_LIKES),
      })),
  },

  Mutation: {
    updateMeme: (_: unknown, { id, data }: { id: string; data: Omit<Meme, 'timestamp' | 'id'> }) => {
      const idx = memes.findIndex((meme: Meme) => meme.id === id);

      if (idx === -1) throw new Error('Meme not found');

      memes[idx] = { id, ...data, timestamp: new Date().toISOString() };

      fs.writeFile(memesPath, JSON.stringify(memes, null, 2), (err) => {
        if (err) console.error(err.message);
      });

      return memes[idx];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
