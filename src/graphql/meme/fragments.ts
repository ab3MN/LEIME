import { gql } from '@apollo/client';

export const MEME_FIELDS = gql`
  fragment MemeFields on Meme {
    id
    title
    imgUrl
    likes
    timestamp
  }
`;
