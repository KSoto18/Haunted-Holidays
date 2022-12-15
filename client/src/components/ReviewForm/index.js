import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import { ImEyePlus } from 'react-icons/im';

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        const { user } = cache.readQuery({ query: (QUERY_USER, QUERY_REVIEWS) });

        cache.writeQuery({
          query: QUERY_USER,
          data: { user: user},
        });
        
      } catch (e) {
        console.error(e);
      }
    
    },
  });



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReview({
        variables: {
          reviewText,
          reviewAuthor: Auth.getProfile().data.username,
        },
        refetchQueries: [
          { 
            query: (QUERY_USER, QUERY_REVIEWS),
        
          },
        ],
      });

      setReviewText('');

    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'reviewText' && value.length <= 280) {
      setReviewText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3 align='center'>
        Tell us about your frightening sighting!
      </h3>

      {Auth.loggedIn() ? (
        <>
          <p align='center'
            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/280
          </p>

          <form className="" onSubmit={handleFormSubmit}>
            <div className="">
              <textarea
                name="reviewText"
                type="text"
                placeholder="Who's haunting you..."
                value={reviewText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button className="add-sighting-btn" type="submit">
                Add Sighting <ImEyePlus />
              </button>
            </div>

            {error && (
              <div className="">
                {error.message}
              </div>
            )}
          </form>

        </>
      ) : (
        <p>
          You need to be logged in to share your sightings. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup</Link>.
        </p>
      )
      }
    </div >
  );
};

export default ReviewForm;