import React from 'react';
import SearchBox from '../SearchBox';
import { Jumbotron } from 'reactstrap';

function Banner() {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url('/img/MakingPasta.png')`,
          backgroundSize: 'cover',
        }}
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
