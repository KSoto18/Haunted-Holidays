import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';
import Auth from '../../utils/auth';
import SideNav from '../SideNav';
import { SlLogin, SlLogout } from 'react-icons/sl';
import { FiUserPlus } from 'react-icons/fi';
// import Whispering from '../../assets/mp3/whispering.mp3';

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

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
          <h1>Haunted Holidays<GiGhost size={'4em'} /></h1>
        </Link>
        <p className='subheader' style={{ color: "offwhite" }}>
          Find your next spooky experience!
        </p>

        {/* login/signup/logout buttons */}
        <div>

          {Auth.loggedIn() ? (
            <>
              <div className='logout-btn-container'>
                <p className='hello-user-msg'>
                  Hello, {Auth.getProfile().data.username}!</p>
                <div>
                  <Link className="logout-btn"
                    style={{ fontSize: '14px' }}
                    onClick={logout}>
                    Logout <SlLogout />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='login-signup-btn-container'>
                <Link className="login-btn" to="/login">
                  Login <SlLogin />
                </Link>

                <Link className="signup-btn" to="/signup">
                  Signup <FiUserPlus />
                </Link>
              </div>
            </>
          )}
          </header>

        </div>
  );
};

export default Header;
