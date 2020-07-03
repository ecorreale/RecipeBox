import React, { useState, useEffect } from 'react';
import Banner from '../../components/Hero';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
// import UserService from "../../services/user.service";

const HomePage = () => {
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   UserService.getHomePage().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  return (
    <div>
      <Navigation />
      <Banner />
      <Wrapper></Wrapper>
    </div>
  );
};

export default HomePage;
