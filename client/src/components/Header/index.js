import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';
// import { useTheme } from './ThemeContext';
import Auth from '../../utils/auth';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <header>
      {/* link to home in pg title  */}
      <Link className="headertitle" to="/">
        <h1>Haunted Holidays<GiGhost /></h1>
      </Link>
      <p className="subheader">
        Find your next spooky experience.
      </p>
     
      {/* navbar  */}
      <nav>
        <ul>
        
          <li><Link className='navlink' to="/">Home</Link></li>
          <li><Link className='navlink' to="/profile">Profile</Link></li>
          <li><Link className='navlink' to="/about">About</Link></li>
          <li><Link className='navlink' to="/contact">Contact</Link></li>


        </ul>
      </nav>


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
              Login</Link>

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
