import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Modal from "../Modal/Modal";

const Footer = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <footer>
     

      {/* <div className="container text-center mb-5">
        {location.pathname !== '/' && (

          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
         </div> */}

      <p className='footercopyright'>
        © 2022 Four Loopin' Ladies
      </p>
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
    </footer >
  );
};

export default Footer;
