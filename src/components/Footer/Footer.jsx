import React from 'react';
import SocialBar from '../SocialBar/SocialBar';

const Footer = () => (
  <footer className="pt-1 pb-1 js-animate fadeIn animate-5">
    <div className="container">
      <ul className="inline listless sm-col-12 sans-serif">
        <li>
          <a href="mailto:hello@michael-smedley.co.uk">hello@michael-smedley.co.uk</a>
        </li>
      </ul>
      <SocialBar />
    </div>
  </footer>
);

export default Footer;
