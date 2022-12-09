import React from 'react';
import { Link } from 'react-router-dom';

const PlacesList = ({ places, title }) => {
  if (!places.length) {
    return <h3>No Haunted Places Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {places &&
        places.map((place) => (
          <div key={place._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {place.placeAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                found this place on {place.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{place.placeText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/placess/${place._id}`}
            >
              Join the discussion on this place.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PlacesList;
