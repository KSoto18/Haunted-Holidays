import React from 'react';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { QUERY_SINGLE_REVIEW } from '../utils/queries';

const SingleReview = () => {

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

      <h2 className='single-rvw-username'>
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
            lineHeight: '2',
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