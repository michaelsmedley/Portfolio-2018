import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { Container, Box } from '../../components/Grid/Grid';
import SiteNav from '../SiteNav/SiteNav';

const Header = styled.header`
  padding: 5vh 0;
`;

const HeaderBar = props => (
  <Header className="sans-serif js-animate fadeIn animate-1">
    <Container className="align-center">
      <Box sm="6" md="6" lg="6" xl="6" xxl="6">
        <Logo theme={props.theme} />
      </Box>
      <Box sm="6" md="6" lg="6" xl="6" xxl="6" className="sm-text-align-right">
        <SiteNav />
      </Box>
    </Container>
  </Header>
);

export default HeaderBar;
