import React from 'react';
import { Container, Box } from '../../components/Grid/Grid';

function GridTest() {
  return (
    <div>
      <Container>
        <Box sm="12" md="6" lg="4" xl="2" xxl="1">
          <h1>Test</h1>
        </Box>
      </Container>
      <Container>
        <Box sm="6">
          <h1>Test</h1>
        </Box>
      </Container>
      <Container>
        <Box sm="3">
          <h1>Test</h1>
        </Box>
      </Container>
    </div>
  );
}

export default GridTest;
