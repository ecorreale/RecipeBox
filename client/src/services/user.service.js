import React from 'react';
import axios from 'axios';
import authHeader from './auth-header';
import HomePage from '../pages/Home';

const API_URL =
  window.location.protocol +
  '//' +
  window.location.hostname +
  ':' +
  window.location.port;
// const getHomePage = () => {
//   return ( <HomePage /> )
// };

const getRecipeList = () => {
  return axios.get(API_URL + '/api/recipe', { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};

export default {
  // getHomePage,
  getRecipeList,
  getModeratorBoard,
  getAdminBoard,
};
