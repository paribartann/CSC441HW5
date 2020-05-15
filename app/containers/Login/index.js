/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import MainHeader from 'components/MainHeader';

import { FormattedMessage } from 'react-intl';
import Form from './Form';
import Input from './Input';
import Button from '../../components/Button';
import messages from './messages';
import { loginUser, changeEmail, changePassword } from './actions';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'login';

export function LoginPage({
  email,
  password,
  onSubmitForm,
  onChangeEmail,
  onChangePassword,
  history
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load repos
  //   if (email && email.trim().length > 0) onSubmitForm();
  // }, []);



  return (
    <div>
      <MainHeader />
        <h1>Login Page</h1>
        <Form>
            
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
                  id="login"
                  type="submit"
                  onClick={onSubmitForm(history)}
            >Login
            </Button>
        </Form>
    </div>
  );
}

LoginPage.propTypes = {

  email: PropTypes.string,
  password: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  loginUser: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
    email: makeSelectEmail(),
    password: makeSelectPassword(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: history => evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      let obj = {
          email : email,
          password: password
      }
      dispatch(loginUser({obj, callback: ()=>{
        console.log('call back called!');
        history.push('/home');
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
)(LoginPage);
