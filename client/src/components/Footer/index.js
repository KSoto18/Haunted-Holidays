import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Modal from "../Modal/Modal";
// import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import HelpIcon from '@mui/icons-material/Help';
import GitHubIcon from '@mui/icons-material/GitHub';
// import HotelIcon from '@mui/icons-material/Hotel';
import { MdHotel } from 'react-icons/md';


const Footer = () => {
  const [value, setValue] = React.useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>

      <Box >
        <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#31587a; opacity:0.75' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >

          <BottomNavigationAction className='footer-icons' onClick={() => {
            setModalOpen(true);
          }} label="What's This?" icon={<HelpIcon />} />

          <BottomNavigationAction className='footer-icons' href='https://github.com/KSoto18/Haunted-Holidays' label="Github" icon={<GitHubIcon />} />

          <BottomNavigationAction className='footer-icons' href='https://www.hotels.com/' label="Book a Spooky Stay"
            icon={<MdHotel />} />

        </BottomNavigation>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}

      </Box>

      <p className="footer-copyright">
        © 2022 Four Loopin' Ladies
      </p>

    </div >
  );
}



export default Footer;
