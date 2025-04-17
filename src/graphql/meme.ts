import { gql } from '@apollo/client';
import client from './client';
import { Meme } from 'types/meme.type';

const GET_MEMES = gql`
  query GetMemes {
    memes {
      id
      timestamp
      name
      imgUrl
      likes
    }
  }
`;

export const getMemes = async () => {
  const res = await client.query<{ memes: Meme[] }>({
    query: GET_MEMES,
  });

  return res.data.memes;
};
