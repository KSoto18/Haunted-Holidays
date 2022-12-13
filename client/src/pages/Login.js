import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { AiOutlineMail } from 'react-icons/ai';
import { GiKey } from 'react-icons/gi';
import ImpactSound from '../assets/mp3/impactsound.mp3';


import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  var scareEffect = document.getElementById('scare-sound');
  const playEffect = () => {
    scareEffect.play();
  }

  return (
    <div>
      <audio id='scare-sound'>
        <source src={ImpactSound} type='audio/mp3'></source>
      </audio>

      <div className="login-form">

        <h2 className="loginpg-title">Login</h2>
        <p className='login-subtitle'>Please fill in this form to log in to your account.</p>


        {data ? (
          <p className='success-msg'>
            Success! You may now head{' '}
            <Link to="/profile"> to your profile.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className='input-container'>
              <AiOutlineMail size={'1.25em'} className='icon-loginpg' />
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
              <GiKey size={'1.25em'} className='icon-loginpg' />
              <input className="form-input"
                placeholder="******" name="password" type="password"
                value={formState.password} onChange={handleChange} />
            </div>

            <button onClick={playEffect}
              className="loginsubmit-btn"
              style={{ cursor: 'pointer' }}
              type="submit">Submit
            </button>

            <p className='signup-redirect'>
              Don't have an account? Sign up <a href="/signup">here</a>.
            </p>

          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;