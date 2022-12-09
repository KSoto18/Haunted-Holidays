import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      places {
        _id
        placesText
        createdAt
      }
    }
  }
`;

export const QUERY_PLACES = gql`
  query getPlaces {
    places {
      _id
      placeText
      placeAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PLACE = gql`
  query getSinglePlace($placeId: ID!) {
    place(placeId: $placeId) {
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
