import axios from 'axios';

const API_URL =
  window.location.protocol + '//' + window.location.hostname + ':3000/api/auth';

const register = (username, firstname, lastname, password) => {
  return axios.post(API_URL + '/signup', {
    username,
    firstname,
    lastname,
    password,
  });
};

const SignIn = (username, password) => {
  // Call Node to authenticate

  return axios

    .post(API_URL + '/signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response;
    });
};

function SignOut() {
  localStorage.removeItem('user');
}

function getCurrentUser() {
  const token = JSON.parse(localStorage.getItem('user'));
  return token;
}

function GetAuthStatus() {
  const AuthStatus = JSON.parse(localStorage.getItem('user'));

  if (AuthStatus && AuthStatus.accessToken) {
    return true;
  } else {
    return false;
  }
}

export default {
  register,
  SignOut,
  SignIn,
  getCurrentUser,
  GetAuthStatus,
};
