import { gql } from '@apollo/client';

export const MEME_FRAGMENT = gql`
  fragment MemeFragment on Meme {
    id
    title
    imgUrl
    likes
    timestamp
  }
`;
