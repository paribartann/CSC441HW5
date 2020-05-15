/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
//import { initialState } from './reducer';

import { initialState } from 'containers/Register/reducer'

const selectLogin = state => state.login || initialState;

  const makeSelectEmail = () =>
  createSelector(
    selectLogin,
    loginState => loginState.email,
  );

  const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  );

export { selectLogin, makeSelectEmail, makeSelectPassword };
