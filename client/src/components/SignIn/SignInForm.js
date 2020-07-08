import React, { useState, useRef } from 'react';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import AuthService from '../../Services/auth.service.js';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// SignIn Form
const SignInForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  // State Variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Username OnChange Event
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  // On Password Change Event
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthenticateUser();
    } else {
      setLoading(false);
    }
  };

  function AuthenticateUser() {
    AuthService.SignIn(username, password).then(
      (response) => {
        if (response.data.id) {
          window.location.href = '/SignIn';
        }
      },

      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  }

  return (
    <div className="col-md-4">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form} style={{ padding: '10px' }}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};
export default SignInForm;
//ToDo:-------------------------------
// function InlineLogin() {

//   if (this.props.IsAuthenticated) {
//     return (
//       <div style={{ fontSize: '11px' }}> Welcome {this.props.UserName} </div>
//     );
//   } else {
//     return (
//       <Form inline>
//         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//           <Label for="oUsername" className="mr-sm-2">
//             Email
//           </Label>
//           <Input
//             bsSize="sm"
//             type="email"
//             name="email"
//             id="oUsername"
//             placeholder="eMail Address"
//           />
//         </FormGroup>
//         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//           <Label for="oPassword" className="mr-sm-2">
//             Password
//           </Label>
//           <Input bsSize="sm" type="password" name="password" id="oPassword" />
//         </FormGroup>
//         <Button>Submit</Button>
//       </Form>
//     );
//   }
// }

// export default LoginForm;

// import React, { Component } from 'react';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100); // fake async
//   },
// };

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false,
//   };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true,
//       }));
//     });
//   };
//   render() {
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer === true) {
//       // return <Redirect to='/' />
//     }

//     return <div>Login</div>;
//   }
// }

// export default Login;
