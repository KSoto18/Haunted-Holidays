import React from 'react';
import { Link } from 'react-router-dom';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { QUERY_SINGLE_REVIEW } from '../utils/queries';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineForum } from 'react-icons/md';

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

      <div className='reroute-btns'>
        <button className='goback-btn'>

          <Link to='/profile'><TbArrowBackUp /> Profile</Link>
        </button>
        <button className='gotoforum-btn'>
          <Link to='/forum'>Forum <MdOutlineForum /></Link>

        </button>
      </div>

      <p style={{ fontSize: '0.8rem' }}>
        Posted on: {review.createdAt}
      </p>

      <div>
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