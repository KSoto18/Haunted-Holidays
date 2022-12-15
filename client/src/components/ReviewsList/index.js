import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { REMOVE_REVIEW } from '../../utils/mutations';
import { MdAddComment } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { QUERY_USER } from '../../utils/queries';

const ReviewsList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
  isLoggedInUser = false
}) => {
  const [removeReview, { error }] = useMutation(REMOVE_REVIEW, {
    update(cache, { data: { removeReview } }) {
      try {
        cache.writeQuery({
          query: QUERY_USER,
          data: { user: removeReview },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  if (!reviews) {
    return <h3 align='center'>No haunted stories... yet!</h3>;
  }

  const handleRemoveReview = async (review) => {
    console.log('testing')
    try {
      const { data } = await removeReview({
        variables: { reviewId: review },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!reviews.length) {
    return <h3 align='center'>You have not posted any reviews... yet!</h3>;
  }



  return (
    <div className='review-list-container'>

      {showTitle && <h3>{title}</h3>}
      {reviews &&
        reviews.map((review) => (

          <div key={review._id} className='posted-review-form'>

            {showUsername ? (

              <div>

                <span style={{ fontSize: '0.8rem' }}>
                  <h2 className='single-rvw-username'>
                    {review.reviewAuthor}</h2>
                  <p className='review-info'>
                    had this spooky sighting on {review.createdAt}.
                  </p>
                </span>

              </div>

            ) : (

              <>
                {/* <span style={{ fontSize: '0.8rem' }}>
                  Posted on: {review.createdAt}
                </span> */}
              </>

            )}

            <div className='users-reviews'>
              <button className="delete-btn"
                onClick={() => handleRemoveReview(review._id)}><AiOutlineDelete />
              </button>
              <p className="review-content" style={{ fontSize: '1.2rem' }}>
                <i>{review.reviewText}</i></p>
            </div>

            <button className='add-comment-btn-profilepg'>
              <Link className='' to={`/reviews/${review._id}`}>Reply <MdAddComment /></Link></button>

          </div>


        ))}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>

  );
};

export default ReviewsList;