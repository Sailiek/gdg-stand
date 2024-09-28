import React, { useState } from 'react';

function ClickComponent() {
  const [count, setCount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const flag = "Flag{gdg a7ssen club}"; 

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === 253) {
      setIsSuccess(true);
    }
  }

  return (
    <div className="container mt-5">
      <h2>Click Counter</h2>
      <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
        Click me!
      </button>
      <p className="mt-3">You clicked {count} times!</p>
      
      {isSuccess && (
        <div className="alert alert-success mt-3">
          <h4>Success!</h4>
          <p>{flag}</p>
        </div>
      )}
    </div>
  );
}

export default ClickComponent;
