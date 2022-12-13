import React from 'react';
import { Link } from 'react-router-dom';

const ReviewsList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!reviews) {
    return <h3>No Haunted Stories Yet</h3>;
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

          </div>

        ))}

    </div>
  );
};

export default ReviewsList;