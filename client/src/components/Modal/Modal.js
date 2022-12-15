import React from "react";
import "./Modal.css";



function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">

        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 className="modalheader">BOO!</h1>
        </div>

      </div>
    </div>
  );
}

export default Modal;