import React from 'react';
import { Box } from '../../components/Grid/Grid';

const SocialBar = () => (
  <Box sm="12" md="12" lg="12" xl="12" xxl="12">
    <ul className="listless inline js-animate fadeIn slideUp animate-5 sans-serif">
      <li>
        <a href="https://twitter.com/smdly">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/michaelsmedley">Github</a>
      </li>
      <li>
        <a href="https://codepen.io/smdly">CodePen</a>
      </li>
      <li>
        <a href="https://medium.com/smdly">Medium</a>
      </li>
    </ul>
  </Box>
);

export default SocialBar;
