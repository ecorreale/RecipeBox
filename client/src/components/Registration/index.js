import React, { useState, useRef } from 'react';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import AuthService from '../../services/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles.module.css';

import { Col, Row, ButtonToggle, Label } from 'reactstrap';

var myPassword;

const required = (value) => {
  myPassword = value;
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vConfirmMatch = (value) => {
  if (myPassword !== value) {
    return (
      <div className="alert alert-danger" role="alert">
        Passwords must match.
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

//  ##############################################
//            Register Function
//  ##############################################

const RegistrationForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setusername] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [acknowledged, setAcknowledged] = useState('');

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setusername(username);
  };

  const onChangeacknowledged = (e) => {
    const acknowledged = e.target.value;
    setAcknowledged(acknowledged);
  };

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setfirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setlastname(lastname);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPw = (e) => {
    const confirmPw = e.target.value;
    setConfirmPw(confirmPw);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, firstname, lastname, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          window.location.href = '/SignIn';
        },

        (error) => {
          console.log('Registration Error:');
          console.log(error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className={Styles.regForm}>
      <Form onSubmit={handleRegister} ref={form}>
        {!successful && (
          <div>
            <Row form>
              <Col md={6}>
                <div className="form-group">
                  <Label htmlFor="username">
                    Email Address{' '}
                    <span style={{ fontSize: '10px' }}>
                      (This will become your username)
                    </span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, validEmail]}
                  />
                </div>
              </Col>
              <Col md={6}>
                <img
                  className={Styles.formImage + ' img-fluid'}
                  src="/img/boxClip.gif"
                  alt="Recipe Box Clipart"
                />
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <div className="form-group">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={firstname}
                    onChange={onChangeFirstname}
                    validations={[required]}
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="form-group">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={lastname}
                    onChange={onChangeLastname}
                    validations={[required]}
                  />
                </div>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <div className="form-group">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="form-group">
                  <Label htmlFor="confirmPw">Password</Label>
                  <Input
                    type="password"
                    className="form-control"
                    name="confirmPw"
                    value={confirmPw}
                    onChange={onChangeConfirmPw}
                    validations={[vConfirmMatch]}
                  />
                </div>
              </Col>
            </Row>

            <Row form>
              <Col md={12}>
                <ReferenceSource />
              </Col>
            </Row>

            <Row form>
              <Col md={12}>
                <div className={Styles.formHeaderGroup}>Membership Rules</div>
                <div>
                  <ol>
                    <li>
                      Membership is available to anyone 18 years of age or
                      older.
                    </li>
                    <li>
                      You promise NOT to use to conduct any fraudulent or
                      business activity or have more than one Member Account at
                      any time.
                    </li>
                  </ol>

                  <div className="form-group">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value={acknowledged}
                          onChange={onChangeacknowledged}
                          validations={[required]}
                        />{' '}
                        I have read, understood, and accepted the rules for
                        membership.
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row form>
              <br />
              <Col md={{ size: 10, offset: 1 }}>
                <br />
                <ButtonToggle type="submit" color="success" ref={checkBtn}>
                  {' '}
                  Sign Up{' '}
                </ButtonToggle>
              </Col>
            </Row>
          </div>
        )}
        {message && (
          <div className="form-group">
            <div>{message.message}</div>
            <div
              className={
                successful ? 'alert alert-success' : 'alert alert-danger'
              }
              role="alert"
            >
              {message.message}
            </div>
          </div>
        )}

        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
      </Form>
    </div>
  );
};

function ReferenceSource() {
  return (
    <article>
      <div className={Styles.formHeaderGroup}>Where did you hear about us?</div>
      <Row>
        <Col md={2}>
          <section>
            <img
              className={Styles.bodyImage + ' img-fluid'}
              src="/img/fatherCookingClip.jpg"
              alt="Father Cooking Clipart"
            />
          </section>
        </Col>

        <Col md={9}>
          <section className={Styles.qSection + ' form-check-input'}>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" value="Friend" />
                From a Friend
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Google"
                />
                Google or other search engine.
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Blog"
                />
                Blog or forum post.
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="News"
                />
                New Article
              </label>
            </div>
          </section>
        </Col>
      </Row>
    </article>
  );
}
export default RegistrationForm;
