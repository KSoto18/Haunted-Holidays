import React from 'react';
import { Link } from 'react-router-dom';

const ReviewsList = ({ review, title }) => {
  if (!review) {
    return <h3>No Haunted Stories Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {review &&
        review.map((review) => (
          <div key={review._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {review.reviewAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                found this sighting on {review.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{review.reviewText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/reviews/${review._id}`}
            >
              Join the discussion on this sighting.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ReviewsList;
