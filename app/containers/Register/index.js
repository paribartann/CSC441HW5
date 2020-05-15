/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { FormattedMessage } from 'react-intl';
import Form from './Form';
import Input from './Input';
import Button from '../../components/Button';
import messages from './messages';
import MainHeader from 'components/MainHeader';
import { registerUser, changeEmail, changeFirstName, changeLastName
        , changePassword } from './actions';
import { makeSelectFirstname, 
    makeSelectLastname, makeSelectEmail, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'register';

export function RegisterPage({
  firstName,
  lastName,
  email,
  password,
  onSubmitForm,
  onChangeEmail,
  onChangeFirstName,
  onChangeLastName,
  onChangePassword,
  history
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

//   useEffect(() => {
//     // When initial state username is not null, submit the form to load repos
//     if (email && email.trim().length > 0) onSubmitForm();
//   }, []);

  return (
    <div>
        <MainHeader />
        <h1>Register Page</h1>
        <Form>
            
            <label htmlFor="firstname">
            <FormattedMessage {...messages.firstnameMessage} />
            <Input 
                id="firstName"
                type="text"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={onChangeFirstName}
            />
            </label>
            <br />
            <br />
            <label htmlFor="lastname">
            <FormattedMessage {...messages.lastnameMessage} />
            <Input 
                id="lastName"
                type="text"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={onChangeLastName}
            />
            </label>
            <br />
            <br />
            <label htmlFor="email">
            <FormattedMessage {...messages.emailMessage} />
            <Input 
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={onChangeEmail}
            />
            </label>
            <br />
            <br />
            <label htmlFor="password">
            <FormattedMessage {...messages.passwordMessage} />
            <Input 
                id="password"
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={onChangePassword}
            />
            </label>
            <br />
            <br />
            <Button
                  id="register"
                  type="submit"
                  onClick={onSubmitForm(history)}
            >Register User
            </Button>
        </Form>
    </div>
  );
}

RegisterPage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeFirstName: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
    firstName: makeSelectFirstname(),
    lastName: makeSelectLastname(),
    email: makeSelectEmail(),
    password: makeSelectPassword()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFirstName: evt => dispatch(changeFirstName(evt.target.value)),
    onChangeLastName: evt => dispatch(changeLastName(evt.target.value)),
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: history => evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      let obj = {
          f_name : firstName,
          l_name : lastName,
          email : email,
          password: password
      }
      
      dispatch(registerUser({obj, callback: ()=>{
        console.log('call back called!');
        history.push('/login');
      }}));
     
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo
)(RegisterPage);
