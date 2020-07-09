import React from 'react';
import { Jumbotron } from 'reactstrap';

function Banner() {
  return (
    <div>
      <Jumbotron
        style={{
          // backgroundImage: `url('/img/spiceBowls.png')`,
          backgroundSize: 'cover',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'black' }}>The Recipe Box</h1>
        <p style={{ color: 'black' }}>
          Create, Save, and organize your recipes online.
        </p>
      </Jumbotron>
    </div>
  );
}

export default Banner;
