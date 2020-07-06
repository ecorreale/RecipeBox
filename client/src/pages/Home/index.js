import React, { useState, useEffect } from 'react';

import Banner from '../../components/Hero';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';

const HomePage = () => {
  return (
    <article>
      <nav>
        <Navigation />
      </nav>
      <header>
        <Banner />
      </header>
      <main>
        <Wrapper></Wrapper>
      </main>
    </article>
  );
};

export default HomePage;
