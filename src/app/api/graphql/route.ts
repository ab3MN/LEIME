import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { DateTimeResolver } from 'graphql-scalars';
import { typeDefs } from './typeDefs';

import { Meme } from 'types';
import { LocalhostURLScalar } from '../scalars/LocalhostURLScalar';

import { readMemes, writeMemes } from './meme.services';

const resolvers = {
  DateTime: DateTimeResolver,
  URL: LocalhostURLScalar,

  Query: {
    memes: async () => {
      const memes = await readMemes();

      return memes;
    },

    meme: async (_: unknown, { id }: { id: string }) => {
      const memes = await readMemes();

      const foundMeme = memes.find((meme) => meme.id === id);

      if (!foundMeme) {
        throw new Error('Meme not found');
      }

      return foundMeme;
    },
  },

  Mutation: {
    updateMeme: async (_: unknown, { id, data }: { id: string; data: Omit<Meme, 'timestamp' | 'id'> }) => {
      const memes = await readMemes();

      const idx = memes.findIndex((meme: Meme) => meme.id === id);

      if (idx === -1) throw new Error('Meme not found');

      memes[idx] = { id, ...data, timestamp: new Date().toISOString() };

      await writeMemes(memes);

      return memes[idx];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
