import { gql } from '@apollo/client';

export const MEME_FIELDS = gql`
  fragment MemeFields on Meme {
    id
    name
    imgUrl
    likes
    timestamp
  }
`;
