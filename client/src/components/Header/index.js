import React from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';
// import Auth from '../../utils/auth';
import SideNav from '../SideNav';
// import Whispering from '../../assets/mp3/whispering.mp3';

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  // var scareEffect = document.getElementById('scare-sound');
  // const playEffect = () => {
  //   scareEffect.play();
  // }

  return (
    <div>

      <SideNav />

      {/* <audio id='scare-sound'>
        <source src={Whispering} type='audio/mp3'></source>
      </audio> */}

      <header>

        {/* link to home in pg title  */}
        <Link className="headertitle" to="/">
          <h1>Haunted Holiday<GiGhost /></h1>
        </Link>
        <p className="subheader">
          Find your next spooky experience.
        </p>

        {/* <div className='account-btns'>

          {Auth.loggedIn() ? (
            <>
              <span>Hello, {Auth.getProfile().data.username}!</span>
              <button className="logout-btn" onClick={logout}
              >
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

        </div> */}

      </header >
    </div >
  );
};

export default Header;
