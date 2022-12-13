import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Modal from "../Modal/Modal";
import Button from '@mui/material/Button';


const Footer = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  return (
    
    <footer>
      <Button sx={{ color: "orange" }} variant="contained">Contained</Button>
  <div>
    <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        What's this?
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
   
    </footer>
   
   
  );
};

export default Footer;

