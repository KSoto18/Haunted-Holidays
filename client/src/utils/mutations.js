import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PLACE = gql`
  mutation addPlace($placeText: String!, $placeAuthor: String!) {
    addPlace(placeText: $placeText, placeAuthor: $placeAuthor) {
      _id
      placeText
      placeAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $placeId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      placeId: $placeId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      placeText
      placeAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
