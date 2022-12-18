import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import HotelIcon from '@mui/icons-material/Hotel';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const Footer = () => {
  const [value, setValue] = React.useState(0);
  

  
  return (
    <div>

      <Box >

        <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'black; opacity:0.8' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >


         
        <BottomNavigationAction sx={{color:"white"}} href="/whatsthis" label="What's This?" icon={<ContactSupportIcon />} />
          <BottomNavigationAction sx={{color:"white"}} href='https://github.com/KSoto18/Haunted-Holidays' label="Github" icon={<GitHubIcon />} />
          <BottomNavigationAction sx={{color:"white"}} href='https://www.hotels.com/' label="Book a Spooky Stay" icon={<HotelIcon />} />

        </BottomNavigation>
       

      </Box>

      <p className="footer-copyright">
        © 2022 Four Loopin' Ladies
      </p>

    </div >
  );
}



export default Footer;
