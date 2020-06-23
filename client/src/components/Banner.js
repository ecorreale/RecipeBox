import React from 'react';
import Search from './Search';

import { Jumbotron } from 'reactstrap';
import bgImage from '../img/MakingPasta.png';

function Banner() {
  return (
    <div>
      <Jumbotron
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
      >
        <h1>The Recipe Box</h1>
        <p>Create, Import, and organize your recipes online.</p>
        <Search />
      </Jumbotron>
    </div>
  );
}

export default Banner;
