import React from 'react';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { QUERY_SINGLE_REVIEW } from '../utils/queries';

const SingleReview = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { reviewId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_REVIEW, {
    // pass URL parameter
    variables: { reviewId: reviewId },
  });

  const review = data?.review || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-review-container">

      <h2 style={{ fontSize: '1.3rem' }}>
        {review.reviewAuthor} <br />
      </h2>

      <p style={{ fontSize: '0.8rem' }}>
        Posted on: {review.createdAt}
      </p>

      <div className="">
        <blockquote
          className="comment-block"
          style={{
            fontSize: '1.3rem',
            fontStyle: 'italic',
            lineHeight: '1.5',
          }}
        >
          {review.reviewText}
        </blockquote>
      </div>

      <div className="">
        <CommentList comments={review.comments} />
      </div>

      <div className="">
        <CommentForm reviewId={review._id} />
      </div>

    </div>
  );
};

export default SingleReview;