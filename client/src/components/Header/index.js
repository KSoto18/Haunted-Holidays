import React from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>

      <div>
        <Link className="headertitle" to="/">
          <h1>Haunted Holiday<GiGhost /></h1>
        </Link>
        <p className="subheader">
          Find your next spooky experience.
        </p>
      </div>



      <div className='account-btns'>

        {Auth.loggedIn() ? (
          <>
            <span>Hello, {Auth.getProfile().data.username}!</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="login-btn" to="/login">
              Login
            </Link>
            <Link className="signup-btn" to="/signup">
              Signup
            </Link>
          </>
        )}

      </div>

    </header>
  );
};

export default Header;
