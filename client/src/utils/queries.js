import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user {
  user {
    email
    _id
    username
    reviews {
      _id
      reviewAuthor
      reviewText
      createdAt
      comments {
        commentText
        commentAuthor
      }
    }
  }
}
`;

export const QUERY_MARKERS = gql`
query locations{
locations{
  latitude
  longitude
  location
  description
  city
  state_abbrev
}
}
`;

export const QUERY_REVIEWS = gql`
  query getReviews {
    reviews {
      _id
      reviewText
      reviewAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_REVIEW = gql`
  query getSingleReview($reviewId: ID!) {
    review(reviewId: $reviewId) {
      _id
      reviewText
      reviewAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
        commentAuthor
      }
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       reviews {
//         _id
//         reviewText
//         reviewAuthor
//         createdAt
//       }
//     }
//   }
// `;
