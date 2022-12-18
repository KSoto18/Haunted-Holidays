import "./Modal.css";
import { useNavigate} from 'react-router-dom';
import Boo from "../../assets/mp3/boo-and-laugh-7060.mp3"





const WhatsThis = () => {
  var scareEffect = document.getElementById('Boo');

  const navigate = useNavigate();

  return (

    <div className="modalBackground">
    <div className="modalContainer">
    
      <div className="titleCloseBtn">
      
      </div>
      <audio id='scare-sound'>
        <source src={Boo} type='audio/mp3'></source>
      </audio>
      <div className="title">
        <h1 className= "modalheader">BOO!</h1>
      </div>
      
      <div className="footer">
        <button id="cancelBtn"
          onClick={() =>
          navigate(-1)}>
          
        
           GO BACK!
        </button>
      
      </div>
    </div>
  </div>
        
  )
}

export default WhatsThis;