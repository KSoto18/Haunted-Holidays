import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';

import Auth from '../../utils/auth';
// import Whispering from '../../assets/mp3/whispering.mp3';

// import { useTheme } from './ThemeContext';
import Modal from "../Modal/Modal";


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // var scareEffect = document.getElementById('scare-sound');
  // const playEffect = () => {
  //   scareEffect.play();
  // }
const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>

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
        {/* navbar  */}
        <nav>
          <ul>

            <li><Link className='navlink' to="/">Home</Link></li>
            <li><Link className='navlink' to="/profile">Profile</Link></li>
            <li><Link className='navlink' to="/about">About Us</Link></li>
            <li><Link className='navlink' to="/contact">Contact</Link></li>


          </ul>
        </nav>


        <div className='account-btns'>

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

        </div>

      </header >
    </div >
    
  );
};

export default Header;
