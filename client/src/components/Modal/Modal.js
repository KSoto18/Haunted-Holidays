import "./Modal.css";
import { useNavigate} from 'react-router-dom';






const WhatsThis = () => {

  const navigate = useNavigate();

  return (

    <div className="modalBackground">
    <div className="modalContainer">
    
      <div className="titleCloseBtn">
      
      </div>
      <div className="title">
        <h1 className= "modalheader">BOO!</h1>
      </div>
      
      <div className="footer">
        <button id="cancelBtn"
          onClick={() =>
          navigate(-1)}>
          
        
          That was Scary! GO BACK!
        </button>
      
      </div>
    </div>
  </div>
        
  )
}

export default WhatsThis;