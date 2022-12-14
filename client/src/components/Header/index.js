import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import Auth from '../../utils/auth';
// import Whispering from '../../assets/mp3/whispering.mp3';

// import { useTheme } from './ThemeContext';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // var scareEffect = document.getElementById('scare-sound');
  // const playEffect = () => {
  //   scareEffect.play();
  // }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div>
      <header>
    
        {/* link to home in pg title  */}
        <Link className="headertitle" to="/">
          <h1>Haunted Holidays</h1>
        </Link>
        <p style={{color: "offwhite" }}>
        <GiGhost /><GiGhost /><GiGhost /> Find your next spooky experience! <GiGhost /><GiGhost /><GiGhost />
        </p>
        </header>
        </div>
        <div id="menuBtn">
        <Button sx={{ color:"black", fontSize:"50", background:"transparent", size:"large" }}
        variant='contained'
     
      onClick={handleClick}
    >
      Menu
    </Button>
    <Menu  
    sx={{ color:"black", fontSize:"50" }} variant = "outlined" className='menu'
      
    
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <MenuItem sx={{ color:"black" }} onClick={event =>  window.location.href='/'}>Home</MenuItem>
      <MenuItem  sx={{ color:"black" }}onClick={event =>  window.location.href='/profile'}>Profile</MenuItem>
      <MenuItem sx={{ color:"black" }} onClick={event =>  window.location.href='/about'}>About Us</MenuItem>
      <MenuItem sx={{ color:"black" }} onClick={event =>  window.location.href='/contact'}>Contact</MenuItem>
    </Menu>
    </div>

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
       

     
   </div>
    
  );
};

export default Header;
