import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { MdAddComment } from 'react-icons/md';

const CommentForm = ({ reviewId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          reviewId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='comment-form-container'>
      <h4>What are your thoughts on this place?</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
              }`} >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>

          <form className="" onSubmit={handleFormSubmit}>

            <div className="">
              <textarea
                name="commentText"
                placeholder="Let us know about your experience..."
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}>
              </textarea>
            </div>

            <div className="">

              <button className="add-comment-btn" type="submit">
                Add Comment <MdAddComment />
              </button>

            </div>

          </form>
        </>
      ) : (

        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup</Link>.
        </p>

      )}
    </div>
  );
};

export default CommentForm;