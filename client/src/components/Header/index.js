import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GiGhost } from 'react-icons/gi';
// import Auth from '../../utils/auth';
import SideNav from '../SideNav';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

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
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
 //    setAnchorEl(event.currentTarget);
  // };
 //  const handleClose = () => {
 //    setAnchorEl(null);
 //  };

  return (
    <div>

      <SideNav />

      {/* <audio id='scare-sound'>
        <source src={Whispering} type='audio/mp3'></source>
      </audio> */}


      <div>
      <header>
    
        {/* link to home in pg title  */}
        <Link className="headertitle" to="/">
          <h1>Haunted Holidays </h1>
        </Link>
        <p style={{color: "offwhite" }}>
        <GiGhost /><GiGhost /><GiGhost /> Find your next spooky experience! <GiGhost /><GiGhost /><GiGhost />
        </p>

          )}



        </div>
       


     
   </div>
    
  );
};

export default Header;
