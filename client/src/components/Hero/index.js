import React from 'react';
import SearchBox, { buttonOptions } from '../SearchBox';

import { Jumbotron } from 'reactstrap';
import bgImage from '../../img/MakingPasta.png';
import Login from '../Login';

function Banner() {
  return (
    <div>
      <Jumbotron
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
      >
        <h1>The Recipe Box</h1>
        <p>Create, Import, and organize your recipes online.</p>
        <div style={{ maxWidth: '600px' }}>
          <SearchBox />
        </div>
      </Jumbotron>
    </div>
  );
}

export default Banner;
