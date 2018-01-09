import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import SiteNav from '../SiteNav/SiteNav';

const Header = styled.header`padding: 5vh 0;`;

const HeaderBar = props => (
  <Header className="sans-serif js-animate fadeIn animate-1">
    <div className="container align-center">
      <div className="sm-col-6">
        <Logo theme={props.theme} />
      </div>
      <div className="sm-col-6 sm-text-align-right">
        <SiteNav />
      </div>
    </div>
  </Header>
);

export default HeaderBar;
