import React from 'react';
import { Container } from 'reactstrap';
import Styles from './Wrapper.css';

function Wrapper(props) {
  return (
    <Container fluid="md" className={Styles.siteWrapper}>
      <div>
        <main {...props} />
      </div>
    </Container>
  );
}

export default Wrapper;
