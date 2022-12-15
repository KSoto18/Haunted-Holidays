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
import HotelIcon from '@mui/icons-material/Hotel';



const Footer = () => {
  const [value, setValue] = React.useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>

      <Box >
        <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "black;opacity 0.75" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >

          <BottomNavigationAction sx={{color:"white"}} onClick={() => {
            setModalOpen(true);
          }} label="What's This?" icon={<HelpIcon />} />

          <BottomNavigationAction sx={{color:"white"}} href='https://github.com/KSoto18/Haunted-Holidays' label="Github" icon={<GitHubIcon />} />
          <BottomNavigationAction sx={{color:"white"}} href='https://www.hotels.com/' label="Book a Spooky Stay" icon={<HotelIcon />} />


        </BottomNavigation>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}

      </Box>

      <p className="footer-copyright">
        © 2022 Four Loopin' Ladies
      </p>

    </div>
  );
}



export default Footer;
