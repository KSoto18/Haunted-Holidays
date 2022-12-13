import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Modal from "../Modal/Modal";
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';

import Box from '@mui/material/Box';


const Footer = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  return (
    
    <footer>
       <Button sx={{ background: "black",  position:"absolute",
  bottom:100, left:"90%"}} variant = "contained"
        
        onClick={() => {
          setModalOpen(true);
        }}
      >
        What's this?
      </Button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, elevation: 3}}>
      <BottomNavigation sx={{background: "black"}}>
        <p className="footertag">Four Loopin Ladies</p>
   
    
   
    
    </BottomNavigation>
    </Box>
    </footer>
  );
};

export default Footer;
