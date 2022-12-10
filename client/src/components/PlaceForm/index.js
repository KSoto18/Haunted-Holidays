import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PLACE } from '../../utils/mutations';
import { QUERY_PLACES } from '../../utils/queries';

import Auth from '../../utils/auth';

const PlaceForm = () => {
  const [placeText, setPlaceText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPlace, { error }] = useMutation(ADD_PLACE, {
    update(cache, { data: { addPlace } }) {
      try {
        const { places } = cache.readQuery({ query: QUERY_PLACES });

        cache.writeQuery({
          query: QUERY_PLACES,
          data: { places: [addPlace, ...places] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPlace({
        variables: {
          placeText,
          placeAuthor: Auth.getProfile().data.username,
        },
      });

      setPlaceText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'placeText' && value.length <= 280) {
      setPlaceText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="placeText"
                placeholder="Here's a new place..."
                value={placeText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Place
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your places. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PlaceForm;
