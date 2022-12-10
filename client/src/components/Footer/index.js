import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>

      <div className="container text-center mb-5">
        {location.pathname !== '/' && (

          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}

        <p className='footercopyright'>
          © 2022 Four Loopin' Ladies
        </p>

      </div>
    </footer>
  );
};

export default Footer;
