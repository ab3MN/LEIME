import { gql } from '@apollo/client';
import { MEME_FIELDS } from './fragments';

export const GET_MEMES = gql`
  query GetMemes {
    memes {
      ...MemeFields
    }
  }
  ${MEME_FIELDS}
`;

export const UPDATE_MEME = gql`
  mutation UpdateMeme($id: ID!, $data: MemeInput!) {
    updateMeme(id: $id, data: $data) {
      ...MemeFields
    }
  }
  ${MEME_FIELDS}
`;
