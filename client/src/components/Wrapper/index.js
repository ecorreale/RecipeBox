import React from 'react';
import './style.css';

function Wrapper(props) {
  return (
    <div>
      <main className="wrapper" {...props} />
    </div>
  );
}

export default Wrapper;
