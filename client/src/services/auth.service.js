// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
// register(): POST {username, email, password}
// getCurrentUser(): get stored user information (including JWT)

import axios from 'axios';

const API_URL =
  window.location.protocol +
  '//' +
  window.location.hostname +
  ':3001/api/auth/';

const register = (username, firstname, lastname, password) => {
  console.log('username: ' + username);
  console.log('firstname: ' + firstname);
  console.log('lastname: ' + lastname);
  console.log('password: ' + password);
  console.log('Posting to: ' + API_URL);

  return axios.post(API_URL + 'signup', {
    username,
    firstname,
    lastname,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
