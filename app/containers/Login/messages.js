/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Register';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Register Page',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'Please enter details to register',
  },
  firstnameMessage: {
    id: `${scope}.firstname.Message`,
    defaultMessage: 'First Name:  ',
  },
  lastnameMessage: {
    id: `${scope}.lastname.Message`,
    defaultMessage: 'Last Name:  ',
  },
  emailMessage: {
    id: `${scope}.email.Message`,
    defaultMessage: 'Email:  ',
  },
  passwordMessage: {
    id: `${scope}.password.Message`,
    defaultMessage: 'Password:  ',
  },
});
