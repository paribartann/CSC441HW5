/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { REGISTER_USER } from 'containers/Register/constants';

import { makeSelectFirstname, makeSelectLastname, makeSelectEmail, makeSelectPassword } from 'containers/Register/selectors';
import axios from 'axios';
/**
 * Github repos request/response handler
 */
export function* registerUser({object: {obj, callback}}) {
  // Select username from store
  const firstName = yield select(makeSelectFirstname());
  const LastName = yield select(makeSelectLastname());
  const email_ = yield select(makeSelectEmail());
  const password_ = yield select(makeSelectPassword());

  axios
    .post('users/register', {
        fName : firstName,
        lName : LastName,
        email : email_,
        password : password_
    })
    .then(response => {
      console.log(response);
      if(response.status === 200)
      {
        if(response.data.error)
        {
          console.log(response.data.error);
          alert(response.data.error);
        }
        else
        {
          console.log(response.data.status);
          callback();
        }
        
      }
        
    })
    .catch( err => console.log(err))

}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signUp() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REGISTER_USER, registerUser);
}
