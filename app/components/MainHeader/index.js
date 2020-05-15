import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function MainHeader() {
  return (
    <div>
      <NavBar>
      <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
        <HeaderLink to="/register">
          <FormattedMessage {...messages.register} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default MainHeader;
