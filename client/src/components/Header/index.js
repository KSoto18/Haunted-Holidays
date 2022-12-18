import React from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';
import Auth from '../../utils/auth';
import SideNav from '../SideNav';
import { SlLogin, SlLogout } from 'react-icons/sl';
import { FiUserPlus } from 'react-icons/fi';

const Header = (props) => {
 

  return (
    <div>

      <SideNav sideNav={props.sideNav} />

      <header>

        {/* login/signup/logout buttons */}
        <div>
          {Auth.loggedIn() ? (
            <>

            </>
          ) : (
            <>
              <div className='login-signup-btn-container'>
                <Link className="login-btn" to="/login">
                  Login <SlLogin />
                </Link>

                <Link className="signup-btn" to="/signup" >
                  Signup <FiUserPlus />
                </Link>
              </div>
            </>
          )}


          {/* link to home in pg title  */}
          <div className='header-title-container'>
            <Link className="headertitle" to="/">
              <h1>Haunted Holidays<GiGhost className='header-ghost' /></h1>
            </Link>
            <p className='subheader'>
              Find your next spooky experience!
            </p>
          </div>

        </div>
      </header >
    </div >

  );
}

export default Header;
