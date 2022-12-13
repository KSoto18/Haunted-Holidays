import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { GiKey } from 'react-icons/gi';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (

    <div className="signup-form">

      <h2 className="signup-pgtitle">Sign Up</h2>
      <p className='signup-subtitle'>Please fill in this form to create an account.</p>


      {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/profile">back to your profile.</Link>
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className='input-container'>
            <FaUserAlt className='icon-signuppg' />
            <input
              className="form-input"
              placeholder="Your name"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div className='input-container'>
            <AiOutlineMail size={'1.25em'} className='icon-signuppg' />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className='input-container'>
            <GiKey size={'1.25em'} className='icon-signuppg' />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <button
            className="signupsubmit-btn"
            style={{ cursor: 'pointer' }}
            type="submit"
          >Submit
          </button>

          <p className='login-redirect'>
            Already have an account? Sign in <a href="/login">here</a>.
          </p>

        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}

    </div>

  );
};

export default Signup;
