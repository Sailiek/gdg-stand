import React, { useState } from 'react'; // Import useState from React
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './assets/logo.png';

function ImageComponent() {
  const [click, setClick] = useState(false); // Use useState inside the component
  const flag = "ggs champ you found a flag";

  function handleClick() {
    setClick(true);
  }

  return (
    <div>
      <img 
        src={myImage} 
        className="img-fluid" 
        style={{ width: '250px', height: '250px' }} 
        onClick={handleClick} 
        alt="Logo"
      />
      {click && ( 
        <div className="alert alert-success mt-3">
          <h4>Success!</h4>
          <p>the flag : {flag}</p>
        </div>
      )}
    </div>
  );
}

export default ImageComponent;
