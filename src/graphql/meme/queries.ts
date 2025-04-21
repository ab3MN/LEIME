import { gql } from '@apollo/client';
import { MEME_FRAGMENT } from './fragments';

export const GET_MEMES = gql`
  query GetMemes {
    memes {
      ...MemeFragment
    }
  }
  ${MEME_FRAGMENT}
`;

export const GET_MEME = gql`
  query GetMeme($id: ID!) {
    meme(id: $id) {
      ...MemeFragment
    }
  }
  ${MEME_FRAGMENT}
`;

export const UPDATE_MEME = gql`
  mutation UpdateMeme($id: ID!, $data: MemeInput!) {
    updateMeme(id: $id, data: $data) {
      ...MemeFragment
    }
  }
  ${MEME_FRAGMENT}
`;
