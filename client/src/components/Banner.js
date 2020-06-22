import React from 'react';

import { Jumbotron } from 'reactstrap';
import bgImage from './img/MakingPasta.png';

function Banner() {
  return (
    <div>
      <Jumbotron
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
      >
        <h1>The Recipe Box</h1>
        <p>Create, Import, and organize your recipes online.</p>
      </Jumbotron>
    </div>
  );
}

export default Banner;
