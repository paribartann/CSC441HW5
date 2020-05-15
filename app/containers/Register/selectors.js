/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegister = state => state.register || initialState;

const makeSelectFirstname = () =>
  createSelector(
    selectRegister,
    registerState => registerState.firstName,
  );

  const makeSelectLastname = () =>
  createSelector(
    selectRegister,
    registerState => registerState.lastName,
  );

  const makeSelectEmail = () =>
  createSelector(
    selectRegister,
    registerState => registerState.email,
  );

  const makeSelectPassword = () =>
  createSelector(
    selectRegister,
    registerState => registerState.password,
  );

export { selectRegister, makeSelectFirstname, 
    makeSelectLastname, makeSelectEmail, makeSelectPassword };
