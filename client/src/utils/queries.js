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
  _id
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
