const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
  }

  type Location {
    _id: ID
    city: String
    country: String
    description: String
    location: String
    state: String
    state_abbrev: String
    longitude: String
    latitude: String
    city_latitude: String
    city_longitude: String
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
    reviews(username: String): [Review]
    review(reviewId: ID!): Review
    locations: [Location]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(reviewText: String!, reviewAuthor: String!): Review
    addComment(
      reviewId: ID!
      commentText: String!
      commentAuthor: String!
    ): Review
    removeReview(reviewId: ID!): Review
    removeComment(reviewId: ID!, commentId: ID!): Review
  }

`;

module.exports = typeDefs;

