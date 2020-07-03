//In the case we access protected resources, the HTTP request needs Authorization header.

// The code above checks Local Storage for user item.
//      If there is a logged in user with accessToken (JWT), return HTTP Authorization header.
//      Otherwise, return an empty object.

// Node.js Express back-end, please use x-access-token header like this:

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
