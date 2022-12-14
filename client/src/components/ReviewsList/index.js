import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { REMOVE_REVIEW } from '../../utils/mutations';


const ReviewsList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  const [removeReview, {error}] = useMutation(REMOVE_REVIEW)

  if (!reviews) {
    return <h3>No Haunted Stories Yet</h3>;
  }

  const handleRemoveReview = async (review) => {
    try {
      const { data } = await removeReview({
        variables: { review },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }



  return (
    <div>

      {showTitle && <h3>{title}</h3>}
      {reviews &&
        reviews.map((review) => (

          <div key={review._id} className=''>

            <div className=''>

              {showUsername ? (

                <Link
                  className="text-light"

                  to={`/profiles/${review.reviewAuthor}`}>

                  {review.reviewAuthor} <br />

                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {review.createdAt}
                  </span>

                </Link>

              ) : (

                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this review on {review.createdAt}
                  </span>
                </>

              )}

            </div>

            <div className=''>
              <p>{review.reviewText}</p>
            </div>

            <Link
              className=''
              to={`/reviews/${review._id}`}>
              Join the discussion on this sighting.
            </Link>
            <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveReview(review)}
                    >
                      Delete
                    </button>
          </div>
          

        ))}

    </div>
  );
};

export default ReviewsList;