import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputComponent() {
  
  const hintData = [
    { hint: "hint1", flag: "gdg is the best" },
    { hint: "dimaraja", flag: "gdg the goat of clubs" }
  ];
  
  const [hint, setHint] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  function handleClick() {
    
    let cleanedHint = hint.replace(/\s+/g, '').toLowerCase();

    
    const foundHint = hintData.find(item => item.hint === cleanedHint);

    if (foundHint) {
      setIsSuccess(true);
      setMessage(`Congrats you found ${foundHint.hint} - Flag{${foundHint.flag}}`);
    } else {
      setHint("");
      setMessage("Incorrect hint, try again!");
    }
  }

  return (
    <div className="container mt-5">
      {!isSuccess ? (
        <>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputHint" className="col-form-label">Enter Hint</label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputHint"
                className="form-control"
                value={hint}
                onChange={(e) => setHint(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
                Check Hint
              </button>
            </div>
          </div>
          {message && <p className="mt-3 text-danger">{message}</p>}
        </>
      ) : (
        <div className="alert alert-success">
          <h4>Success!</h4>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default InputComponent;
