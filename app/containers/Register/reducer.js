/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_EMAIL,
  CHANGE_FIRSTNAME,
  CHANGE_LASTNAME,
  CHANGE_PASSWORD,
} from './constants';

// The initial state of the App
export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case CHANGE_FIRSTNAME:
        draft.firstName = action.fName;
        break;

      case CHANGE_LASTNAME:
        draft.lastName = action.lName;
        break;

      case CHANGE_EMAIL:
        draft.email = action.email;
        break;

      case CHANGE_PASSWORD:
        draft.password = action.pw;
        break;
    }
  });

export default registerReducer;
