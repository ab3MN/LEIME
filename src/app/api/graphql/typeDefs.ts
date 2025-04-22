export const typeDefs = `#graphql
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
      meme(id: ID!): Meme
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
