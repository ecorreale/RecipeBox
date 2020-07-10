import React from 'react';

import Banner from '../../components/Hero';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
import { Helmet } from 'react-helmet';
import Section from '../../components/Section';

const HomePage = () => {
  return (
    <article>
      <Helmet>
        <title>Recipe Box</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <header>
        <Banner />
      </header>
      <main>
        <Wrapper>
          <Section />
        </Wrapper>
      </main>
    </article>
  );
};

export default HomePage;
