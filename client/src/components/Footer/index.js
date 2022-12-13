import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Modal from "../Modal/Modal";
import Button from '@mui/material/Button';


const Footer = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  return (
    
    <footer>
      
  
    <Button sx={{ background: "black",  position:"absolute",
  bottom:0, left:"90%"}} variant = "contained"
        
        onClick={() => {
          setModalOpen(true);
        }}
      >
        What's this?
      </Button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    
   
    </footer>
   
   
  );
};

export default Footer;

