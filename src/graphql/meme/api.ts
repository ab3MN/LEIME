import client from '../client';
import { Meme } from 'types/meme.type';
import { GET_MEME, GET_MEMES, UPDATE_MEME } from './queries';

export const getMemes = async () => {
  const res = await client.query<{ memes: Meme[] }>({
    query: GET_MEMES,
  });

  return res.data.memes;
};

export const getMeme = async (id: string) => {
  const res = await client.query<{ meme: Meme }>({
    query: GET_MEME,
    variables: { id },
  });

  return res.data.meme;
};

export const updateMeme = async (id: string, meme: Omit<Meme, 'timestamp' | 'id'>) => {
  const res = await client.mutate({
    mutation: UPDATE_MEME,
    variables: { id, data: meme },
  });

  return res.data.updateMeme;
};
